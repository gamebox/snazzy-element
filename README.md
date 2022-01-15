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

<p class="codepen" data-height="500" data-theme-id="dark" data-default-tab="js,result" data-slug-hash="d216f284f4bcab8a6e2a919dd557ad75" data-preview="true" data-user="anthonybullard" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/anthonybullard/pen/d216f284f4bcab8a6e2a919dd557ad75">
  Snazzy Elements</a> by Anthony Bullard (<a href="https://codepen.io/anthonybullard">@anthonybullard</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Contributing

Snazzy Element is not currently accepting PRs. If you do happen to use this package and find bugs, _please_ open an issue. There is no SLA on issue resolution, and the software contained herein is provided AS IS with no guarantees.

Once the library matures enough to reach v1.0, we will weigh the option to switch to an open contribution model.
