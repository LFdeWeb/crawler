'use strict'
const router = require('koa-router')()
const crawlers = require('../controller/crawlers')
const login = require('../controller/login')
const upload = require('../controller/upload')

module.exports = (app) => {
  router.get('/', (ctx, next) => {
    ctx.body = '<a href="https://github.com/yangcecode/crawler">Github</a>'
  });
  router.get('/getphoto', crawlers.index);

  // 登录
  router.post('/login', login.login);
  router.get('/userin', login.userin);

  router.get('/upload', upload.upload);
  

  app
    .use(router.routes())
    .use(router.allowedMethods())
}
