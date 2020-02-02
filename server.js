'use strict'
const { Ignitor } = require('@adonisjs/ignitor')
new Ignitor(require('@adonisjs/fold'))
  .appRoot(__dirname)
  .preLoad('start/acl')
  .fireHttpServer()
  .catch(console.error)
