var express = require('express');
const jsonServer = require('json-server')
// const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
var server = express();
server.use(express.json());
server.use(middlewares)
server.use(router)
server.listen(3010, () => {
  console.log('JSON Server is running')
})