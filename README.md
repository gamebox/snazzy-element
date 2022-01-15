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

<iframe height="500" style="width: 100%;" scrolling="no" title="Snazzy Elements" src="https://codepen.io/anthonybullard/embed/preview/d216f284f4bcab8a6e2a919dd557ad75?default-tab=js%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/anthonybullard/pen/d216f284f4bcab8a6e2a919dd557ad75">
  Snazzy Elements</a> by Anthony Bullard (<a href="https://codepen.io/anthonybullard">@anthonybullard</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Contributing

Snazzy Element is not currently accepting PRs. If you do happen to use this package and find bugs, _please_ open an issue. There is no SLA on issue resolution, and the software contained herein is provided AS IS with no guarantees.

Once the library matures enough to reach v1.0, we will weigh the option to switch to an open contribution model.
