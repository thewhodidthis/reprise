## about

Provides HTML mirroring of browser console logs. Intrusively somewhat `console.log()` is redeclared in order to echo the original output inside of a `<pre>` tag added at the very top of the `document.body` containing the script carrying out the logging. Ties in nicely with [tapeless](https://npm.im/tapeless) and [kpow](https://npm.im/kpow) for client side TAP reporting.

## setup

Download the [latest stable version](https://npm.im/cutaway) from the _npm_ registry to get started:

```sh
# Add to 'package.json' dependencies
npm install cutaway
```

## usage

Include for side effects only. For example,

```js
// Just an iife
import 'cutaway'

// Say hi in HTML
console.log('coucou')
```
