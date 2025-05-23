# contaazul-pinst [![Checks](https://github.com/ContaAzul/pinst/actions/workflows/ci.yml/badge.svg)](https://github.com/ContaAzul/pinst/actions) [![npm](https://img.shields.io/npm/v/contaazul-pinst.svg)](https://www.npmjs.com/package/contaazul-pinst)

> `pinst` lets you have `preinstall` and `postinstall` hooks that runs only in dev 🍺

**Important** if your project is using npm or pnpm, you can achieve the desired effect by setting a `prepare` hook instead. `ca-pinst` is mainly useful for Yarn 2+ since it doesn't support `prepare` hook. See https://yarnpkg.com/advanced/lifecycle-scripts

## Usage

```js
// package.json
{
  "scripts": {
    "preinstall": "<some dev only command>",
    "postinstall": "<some dev only command>",
    "prepack": "ca-pinst --disable",
    "postpack": "ca-pinst --enable"
  }
}
```

**On `prepack`, `(pre|post)install` will be renamed to `_(pre|post)install` (disabled)**

**On `postpack`, it will be renamed back to `(pre|post)install` (enabled)**

## CLI

`ca-pinst` accepts the following flags:

```txt
--enable, -e   Enable postinstall hook
--disable, -d  Disable postinstall hook
--silent, -s
```

## Tips

By inverting commands, you can also use `ca-pinst` to enable `preinstall` and `postinstall` for your users only and not yourself.

`ca-pinst` also supports `install` alias.

## License

MIT - [ContaAzul :cactus:](https://github.com/ContaAzul)
