import Koa from 'koa'


export const catchError = (app: Koa) => {
  app.use(async (ctx, next) => {
    try {
      await next()
    } catch(err) {
      ctx.status = err.staus || 500
      ctx.type = 'json'
      ctx.body = {
        'test': 'test'
      }
      ctx.app.emit('error', err, ctx)
    }
  })
}