import Koa from 'koa'
import { createConnection, ConnectionOptions } from 'typeorm'
import { router } from './src/routes'
import { config as reloadEnv } from 'dotenv'
import { catchError } from './src/handlers/errorHandler'

reloadEnv()

const connectionOptions:ConnectionOptions = {
  type: 'mysql',
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "koa",
  entities: ["src/models/**/*.ts"],
  synchronize: true,
  logging: false,
}

createConnection(connectionOptions)
  .then(async () => {
  const app = new Koa()
  process.env.RUN_TIME === 'dev' && catchError(app)
  app.use(router.routes())
  app.listen(3000)
})
.catch((error: string) => {
  console.log('TypeORM connection error: ', error)
})

