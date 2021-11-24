import { SwaggerRouter } from 'koa-swagger-decorator'
import { user } from '../controllers'
import { resolve } from 'path'

const userRouter = new SwaggerRouter()

userRouter.get('/user', user.getUsers)

userRouter.swagger({
  title: 'user',
  description: 'user module',
  version: '1'
})

userRouter.mapDir(resolve(__dirname, '../controllers'))

const useUserRouter = userRouter.routes()

export { useUserRouter }



