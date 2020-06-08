## about

Provides HTML mirroring of browser console logs. Intrusively somewhat `console.log()` is redeclared in order to echo the original output inside of a `<pre>` tag that's then added at the very top of the `document.body` containing the script carrying out the logging. Ties in nicely with [tapeless](https://www.npmjs.com/package/tapeless) and [kpow](https://www.npmjs.com/package/kpow).

## setup

Download to get started:

```sh
# Add to 'package.json' dependencies
npm install cutaway
```

## usage

Include for side effects only:

```js
// Just an iife
import 'cutaway'

// Say hi in HTML
console.log('coucou')
```
