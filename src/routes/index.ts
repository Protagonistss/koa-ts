import Koa from 'koa'
import { userRouter } from './user'

const registRouter = (app: Koa) => {
  app.use(userRouter.routes())
}

export { registRouter }