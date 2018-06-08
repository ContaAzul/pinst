# pinst [![Build Status](https://travis-ci.org/typicode/pinst.svg?branch=master)](https://travis-ci.org/typicode/pinst) [![npm](https://img.shields.io/npm/v/pinst.svg)](https://www.npmjs.com/package/pinst)

> `pinst` lets you have `postinstall` hook that runs only in development 🍺

This can be useful if you want to automatically run commands just after `npm install`, but don't want your package users to be affected.

## Usage

```sh
$ npm install pinst --save-dev
```

```js
// package.json
{
  "scripts": {
    "postinstall": "...",
    // Add pinst to npm publish hooks
    "prepublishOnly": "pinst --disable",
    "postpublish": "pinst --enable"
  }
}
```

```sh
$ npm publish
```

_On prepublishOnly, `postinstall` will be renamed to `_postinstall` (disabled), on postpublish, `_postinstall` will be renamed back to `postinstall` (enabled)_

## CLI

`pinst` accepts the following flags

```
--enable, -e   Enable postinstall hook
--disable, -d  Disable postinstall hook
```

## Try it

You can test that everything works, without actually publishing your package, by manually running the following commands

```sh
npm run prepublishOnly # Check package.json
npm run postpublish    # Check package.json
```

## License

MIT - [Typicode :cactus:](https://github.com/typicode) - [Patreon](https://www.patreon.com/typicode)
