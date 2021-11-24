import Koa from 'koa'
import { createConnection, ConnectionOptions } from 'typeorm'
import { registRouter } from './src/routes'


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
  registRouter(app)
  app.listen(3000)
})
.catch((error: string) => {
  console.log('TypeORM connection error: ', error)
})

