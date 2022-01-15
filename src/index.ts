import { app } from '@snazzyui/snazzyui';

import type {
  ViewFn,
  Update,
  UpdateFn,
  Subscriptions,
} from '@snazzyui/snazzyui';

const PROP_VALS = Symbol('SE_Property_values');
const DISPATCH = Symbol('SE_App_Dispatch');

export type ElementConfig<S> = {
  tagName: string;
  view: ViewFn<S>;
  init: <P>(props: P) => Update<S>;
  subscriptions: Subscriptions<S>;
  styles: string;
  properties: {
    name: string;
    default: unknown;
    onChanged: UpdateFn<S>;
  }[];
};

interface ShadowRoot {
  adoptedStyleSheets: readonly CSSStyleSheet[];
}

export function registerSnazzyElement<S>(config: ElementConfig<S>) {
  const css = new CSSStyleSheet();
  if (config.styles && config.styles.length > 0) {
    config.styles
      .trim()
      .split(/\}\n/)
      .forEach((rule) => {
        css.insertRule(rule);
      });
  }
  const propKeys = config.properties.map(({ name }) => name);
  window.customElements.define(
    config.tagName,
    class extends HTMLElement {
      [PROP_VALS]: { [key: string]: unknown };
      [DISPATCH]: Function;
      [key: string]: unknown;

      constructor() {
        super();
        this[PROP_VALS] = {};
      }

      static get observedAttributes() {
        return propKeys ?? [];
      }

      connectedCallback() {
        this.createShadowRoot();
        this.createStyles();
        this.createProps();
        this.start();
      }

      createShadowRoot() {
        this.attachShadow({ mode: 'open' });
      }

      createStyles() {
        const shadowRoot: ShadowRoot | null = this
          .shadowRoot as ShadowRoot | null;
        if (shadowRoot?.adoptedStyleSheets) {
          shadowRoot.adoptedStyleSheets = [css];
        }
      }

      createProps() {
        const that = this;
        for (const prop of config.properties) {
          this[PROP_VALS][prop.name] =
            this[prop.name] ?? this.getAttribute(prop.name) ?? prop.default;

          Object.defineProperty(this, prop.name, {
            get() {
              return that[PROP_VALS][prop.name];
            },
            set(v) {
              this[PROP_VALS][prop.name] = v;
              prop.onChanged && this[DISPATCH]?.(prop.onChanged, v);
            },
          });
        }
      }

      start() {
        const that = this;
        const initialState = config.init(this[PROP_VALS]);
        const root = document.createElement('div');
        this.shadowRoot?.appendChild(root);
        const emit = (type: string, payload: unknown = {}) =>
          that.dispatchEvent(
            new CustomEvent(type, {
              detail: payload,
              bubbles: true,
              composed: true,
            })
          );
        this[DISPATCH] = app(
          {
            view: config.view,
            init: () => ({ ...initialState, emit }),
            subscriptions: config.subscriptions,
          },
          root
        );
      }

      attributeChangedCallback(
        name: string,
        oldValue: unknown,
        newValue: unknown
      ) {
        if (propKeys.indexOf(name) >= 0 && oldValue !== newValue) {
          this[name] = newValue;
        }
      }
    }
  );
}

export * from '@snazzyui/snazzyui';
