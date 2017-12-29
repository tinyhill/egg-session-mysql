# egg-session-mysql

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-session-mysql.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-session-mysql
[travis-image]: https://img.shields.io/travis/eggjs/egg-session-mysql.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-session-mysql
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-session-mysql.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-session-mysql?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-session-mysql.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-session-mysql
[snyk-image]: https://snyk.io/test/npm/egg-session-mysql/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-session-mysql
[download-image]: https://img.shields.io/npm/dm/egg-session-mysql.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-session-mysql

<!--
Description here.
-->

## Install

```bash
$ npm i egg-session-mysql --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.sessionMysql = {
  enable: true,
  package: 'egg-session-mysql',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.sessionMysql = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
