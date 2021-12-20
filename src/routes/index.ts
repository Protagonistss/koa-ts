import { SwaggerRouter } from 'koa-swagger-decorator'
import { useUserRouter } from './user'
import { useAuthRouter } from './auth'
import { resolve } from 'path'

const router = new SwaggerRouter()

router.use('/api/user', useUserRouter)
router.use('/api/auth', useAuthRouter)

router.swagger({
  title: 'Koa Api',
  description: 'Api',
  version: '1.0.0',
  // prefix: '/api',
  // swaggerHtmlEndpoint: '/swagger',
  // swaggerJsonEndpoint: '/swagger-json'
})

router.mapDir(resolve(__dirname, '../controllers'))


export { router }