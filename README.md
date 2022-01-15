# Snazzy Element

A lightweight wrapper of @snazzyui/snazzyui to create tiny custom web components.

## Why?

The original snazzyui library was created as a personal challenge to create a clean-room implementation of [hyperapp](https://github.com/jorgebucaran/hyperapp) based on [snabbdom](https://github.com/snabbdom/snabbom). It has henceforth been used to rearchitect a side-project of mine, moving away from React.

The hyperapp API is great for developing applications, but there are points where you want just a _smidge_ of local state, mostly for performance. Turns out, the hyperapp API is also great for making small little stateful components. So, since I was looking to leverage the same technology throughout, I created @snazzyui/element.

## Install

Snazzy UI is a dependency of Snazzy Element, and it is assumed you are either only using Snazzy Element, or are embedding Snazzy Elements in a Snazzy UI application.

We recommend playing with this library through Skypack to start (if you are using Snazzy UI, make sure it is pinned at the same version):

```js
import { registerSnazzyElement } from 'https://cdn.skypack.dev/@snazzyui/element';
```

Once you find you like it, install it through npm (or your preferred package manager):

```sh
npm install @snazzyui/element
```

## Usage

Here's a small example that shows 90% of the API surface of the library:

<div class="codepen" data-height="500" data-theme-id="dark" data-default-tab="js,result" data-slug-hash="d216f284f4bcab8a6e2a919dd557ad75" data-preview="true" data-user="anthonybullard"  data-prefill='{"title":"Snazzy Elements","tags":[],"scripts":[],"stylesheets":[]}'>
  <pre data-lang="html">&lt;se-test-component name="Name">&lt;/se-test-component></pre>
  <pre data-lang="js">import { registerSnazzyElement, h } from "https://cdn.skypack.dev/@snazzyui/element@0.2.0";

const NameChanged = (state, name) => ({ ...state, name });

registerSnazzyElement({
tagName: 'se-test-component',
view: (state) => h('div', {}, [`Hello, ${state.name}`, h('button', { on: { click: (e) => state.emit('SE_TEST_COMPONENT#BUTTON_CLICKED', {})}}, 'Click')]),
init: (props) => ({ name: props.name }),
subscriptions: (state) => [
[(dispatch, emit) => {
const interval = setInterval(() => emit('SE_TEST_COMPONENT#TICK'), 1000);
return () => clearInterval(interval);
}, state.emit]
],
properties: [
{ name: 'name', default: 'Foo', onChanged: NameChanged }
],
styles: ` div { color: red; } `
});

window.addEventListener('SE_TEST_COMPONENT#BUTTON_CLICKED', () => {
console.log('Got the event!');
});

window.addEventListener('SE_TEST_COMPONENT#TICK', () => {
console.log('Got a tick!');
});

setTimeout(() => {
document.querySelector('se-test-component')?.setAttribute('name', 'Tony');
}, 3000);</pre></div>

<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Contributing

Snazzy Element is not currently accepting PRs. If you do happen to use this package and find bugs, _please_ open an issue. There is no SLA on issue resolution, and the software contained herein is provided AS IS with no guarantees.

Once the library matures enough to reach v1.0, we will weigh the option to switch to an open contribution model.
