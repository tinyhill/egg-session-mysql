'use strict';

const assert = require('assert');
const MysqlStore = require('koa-mysql-session');

module.exports = app => {

  const config = app.config.sessionMysql;

  assert(config.database, 'no database specified');

  app.sessionStore = new MysqlStore(config);
};
