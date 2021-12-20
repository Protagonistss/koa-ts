import { request, responsesAll, tagsAll, summary } from 'koa-swagger-decorator'
import { Context } from 'koa'

@responsesAll({ 200: { description: 'success' } })
@tagsAll(['Auth'])
export default class AuthController {
  @request('get', '/auth')
  @summary('auth token')
  public static async auth(ctx: Context): Promise<void> {
    ctx.body = { auth: 'auth' }
  }
}