const jsonServer = require('json-server')
const express = require('express')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3001

server.use(express.static('build'))
server.use(middlewares)
server.use(router)
server.listen(port, () => {
  console.log('JSON Server is running')
})