import { SwaggerRouter } from 'koa-swagger-decorator'
import { auth } from '../controllers'
import { resolve } from 'path'

const useAuth = new SwaggerRouter()

useAuth.get('/auth', auth.auth)

useAuth.swagger({
  title: 'auth',
  description: 'auth module',
  version: '1',
  prefix: '/api/auth',
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

useAuth.mapDir(resolve(__dirname, '../controllers'))

const useAuthRouter = useAuth.routes()

export { useAuthRouter }



