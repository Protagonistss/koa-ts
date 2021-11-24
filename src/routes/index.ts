import Koa from 'koa'
import { useUserRouter } from './user'

const registRouter = (app: Koa) => {
  app.use(useUserRouter)
}

export { registRouter }