import Koa from 'koa'
import winston from 'winston'
import { createConnection, ConnectionOptions } from 'typeorm'

const app = new Koa()

app.use(ctx => {
  ctx.body = 'Hello World'
})

app.listen(3000)