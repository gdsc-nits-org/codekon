<p align="center">
  <picture>
    <source
      media="(prefers-color-scheme: dark)"
      srcset="./.github/assets/light.svg"
    />
    <img src="./.github/assets/dark.svg" alt="Logo for codekon" />
  </picture>
</p>

<h1 align="center">codekon</h1>

<p align="center">
  Entirety of GDSC NITS project templates at your fingertips.
</p>

<p align="center">
  Get started with the
  <a
    rel="noopener noreferrer"
    target="_blank"
    href="https://github.com/orgs/gdsc-nits-org/repositories?q=template%3Atrue+archived%3Afalse"
    >GDSC NITS project templates</a
  >
  by running <code>pnpx codekon</code>
</p>

<div align="center">

  [![install size][packagephobia-image]][packagephobia-url] [![NPM version][npm-image]][npm-url]

</div>

## About

[GDSC NITS](https://gdscnits.in) has a set of templates to streamline the development of web based projects by having **opiniated** configs and settings. The various templates available are -

- [react-js-app](https://github.com/gdsc-nits-org/react-js-app) - ReactJS + SASS app in JavaScript
- [next-js-app](https://github.com/gdsc-nits-org/next-js-app) - NextJS pages router + SASS app in JavaScript
- [menp-t](https://github.com/gdsc-nits-org/menp-t) - MongoDB + Express + Node + Prisma + TypeScript API Template
- [penp-t](https://github.com/gdsc-nits-org/penp-t) - PostgreSQL + Express + Node + Prisma + TypeScript API Template
- [menpal-t](https://github.com/gdsc-nits-org/MENPAL-T) - MongoDB + Express + Node + Prisma + AWS Lambda + TypeScript API Template
- [penpal-t](https://github.com/gdsc-nits-org/PENPAL-T) - PostgreSQL + Express + Node + Prisma + AWS Lambda + TypeScript API Template

## Getting Started

> To scaffold a template using `codekon`, make sure you have `git` and `pnpm` installed. We use `pnpm` in our projects and strongly recommend you to do so too. For now, `codekon` only supports `pnpm`.

- To use `codekon` interactively:

Using npm:

```bash
npx codekon
```

Using pnpm:

```bash
pnpx codekon
```

- Follow the prompts. The project will be created in the directory.

- You can also directly create projects by passing the arguments:

```bash
npx codekon [projectName] [templateName]
```

```bash
pnpx codekon [projectName] [templateName]
```

For example:

```bash
pnpx codekon my-app react-js-app
```

- To get the help message run `codekon --help`

<img src="./.github/screenshots/help.png" alt="help picture" align="center">

## Credits -

- [create-t3-app](https://github.com/t3-oss/create-t3-app)
- [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite)

### TODO

- [x] Publish to NPM.
- [x] Test in Linux.
- [x] ~~Test `pnpm create codekon`.~~ My bad. For this to work, the package name should have been `create-codekon`.
- [ ] Add screenshots and video.
- [x] Fix `pnpm dlx codekon`.
- [x] Remove `execa` and test with `child-process`. Reduced install size by 55%. Brought node support to `>=18` from `>= 20.5.0`.

[packagephobia-image]: https://packagephobia.com/badge?p=codekon
[packagephobia-url]: https://packagephobia.com/result?p=codekon
[npm-url]: https://www.npmjs.com/package/codekon
[npm-image]: https://img.shields.io/npm/v/codekon?color=0b7285&logoColor=0b7285
