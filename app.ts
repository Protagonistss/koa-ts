import Koa from 'koa'
import { createConnection, ConnectionOptions, getConnectionOptions } from 'typeorm'


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

// const connectionOptions: ConnectionOptions = await getConnectionOptions()

// const connectionOptions: ConnectionOptions = async () => {
//   const options = await getConnectionOptions()
//   return options
// }


createConnection(connectionOptions)
.then(async () => {
  const app = new Koa()
  app.use(ctx => {
    ctx.body = 'Hello World'
  })
  
  app.listen(3000)
})
.catch((error: string) => {
  console.log('TypeORM connection error: ', error)
})

