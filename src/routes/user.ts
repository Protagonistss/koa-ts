import { SwaggerRouter } from 'koa-swagger-decorator'
import { user } from '../controllers'
import { resolve } from 'path'

const userRouter = new SwaggerRouter()

userRouter.get('/user', user.getUsers)

userRouter.swagger({
  title: 'Koa Api',
  description: 'api doc',
  version: '1',
  prefix: '/api/user',
  swaggerHtmlEndpoint: '/swagger-html',
  swaggerJsonEndpoint: '/swagger-json',
  swaggerOptions: {
    securityDefinitions: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization'
      }
    }
  },
  swaggerConfiguration: {
    display: {
      defaultModelsExpandDepth: 4,
      defaultModelExpandDepth: 3,
      docExpansion: 'list',
      defaultModelRendering: 'model'
    }
  }
})

userRouter.mapDir(resolve(__dirname, '../controllers'))

const useUserRouter = userRouter.routes()

export { useUserRouter }



