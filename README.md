<p align="center">
  <a href="http://ant.design">
    <img width="200" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg">
  </a>
</p>

<h1 align="center">Ant Design</h1>

<div align="center">

An enterprise-class UI design language and React-based implementation.

[![CircleCI branch](https://img.shields.io/circleci/project/github/ant-design/ant-design/master.svg?style=flat-square)](https://circleci.com/gh/ant-design/ant-design)
[![Codecov](https://img.shields.io/codecov/c/github/ant-design/ant-design/master.svg?style=flat-square)](https://codecov.io/gh/ant-design/ant-design/branch/master)
[![Dependencies](https://img.shields.io/david/ant-design/ant-design.svg)](https://david-dm.org/ant-design/ant-design)
[![DevDependencies](https://img.shields.io/david/dev/ant-design/ant-design.svg)](https://david-dm.org/ant-design/ant-design?type=dev)

[![npm package](https://img.shields.io/npm/v/antd.svg?style=flat-square)](https://www.npmjs.org/package/antd)
[![NPM downloads](http://img.shields.io/npm/dm/antd.svg?style=flat-square)](http://npmjs.com/antd)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/ant-design/ant-design.svg)](http://isitmaintained.com/project/ant-design/ant-design "Percentage of issues still open")
[![Gitter](https://badges.gitter.im/ant-design/ant-design-english.svg)](https://gitter.im/ant-design/ant-design-english?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)(🇺🇸)
[![Join the chat at https://gitter.im/ant-design/ant-design](https://img.shields.io/gitter/room/ant-design/ant-design.svg?style=flat-square)](https://gitter.im/ant-design/ant-design?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)(🇨🇳)

</div>

[![](https://cdn-images-1.medium.com/max/2000/1*NIlj0-TdLMbo_hzSBP8tmg.png)](http://ant.design)

English | [简体中文](./README-zh_CN.md)

## ✨ Features

- An enterprise-class UI design system for web applications.
- A set of high-quality React components out of the box.
- Written in TypeScript with predictable static types.
- The whole package of development and design resources and tools.

## 🖥 Environment Support

* Modern browsers and Internet Explorer 9+ (with [polyfills](https://ant.design/docs/react/getting-started#Compatibility))
* Server-side Rendering
* [Electron](http://electron.atom.io/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Electron |
| --------- | --------- | --------- | --------- | --------- | --------- |
| IE9, IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions

## 📦 Install

```bash
npm install antd --save
```

## 🔨 Usage

```jsx
import { DatePicker } from 'antd';
ReactDOM.render(<DatePicker />, mountNode);
```

And import style manually:

```jsx
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
```

Or [import components on demand](https://ant.design/docs/react/getting-started#Import-on-Demand).

### TypeScript

See [Use in TypeScript](https://ant.design/docs/react/use-in-typescript).

## 🌍 Internationalization

See [i18n](http://ant.design/docs/react/i18n).

## 🔗 Links

- [Home page](http://ant.design/)
- [Components](http://ant.design/docs/react/introduce)
- [Ant Design Pro](http://pro.ant.design/)
- [Change Log](CHANGELOG.en-US.md)
- [Scaffold Market](http://scaffold.ant.design)
- [rc-components](http://react-component.github.io/)
- [Mobile UI](http://mobile.ant.design)
- [Motion](https://motion.ant.design)
- [Landing Templates](https://landing.ant.design)
- [Developer Instruction](https://github.com/ant-design/ant-design/wiki/Development)
- [Versioning Release Note](https://github.com/ant-design/ant-design/wiki/%E8%BD%AE%E5%80%BC%E8%A7%84%E5%88%99%E5%92%8C%E7%89%88%E6%9C%AC%E5%8F%91%E5%B8%83%E6%B5%81%E7%A8%8B)
- [FAQ](https://ant.design/docs/react/faq)
- [CodeSandbox Template](https://u.ant.design/codesandbox-repro) for bug reports
- [Awesome Ant Design](https://github.com/websemantics/awesome-ant-design)
- [Customize Theme](http://ant.design/docs/react/customize-theme)

## ⌨️ Development

```bash
$ git clone git@github.com:ant-design/ant-design.git
$ cd ant-design
$ npm install
$ npm start
```

Open your browser and visit http://127.0.0.1:8001 , see more at [Development](https://github.com/ant-design/ant-design/wiki/Development).

## 🤝 Contributing [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Read our [contributing guide](https://ant.design/docs/react/contributing) and let's build a better antd together.

We welcome all contributions. Please read our [CONTRIBUTING.md](https://github.com/ant-design/ant-design/blob/master/.github/CONTRIBUTING.md) first. You can submit any ideas as [pull requests](https://github.com/ant-design/ant-design/pulls) or as [GitHub issues](https://github.com/ant-design/ant-design/issues). If you'd like to improve code, check out the [Development Instructions](https://github.com/ant-design/ant-design/wiki/Development) and have a good time! :)
