
export default {
  async fetch(request, env, ctx) {
    var url = new URL(request.url)
    if (url.pathname == '/' + env.SECRET) {
      var headers = new Headers({
        Authorization: 'Bearer ' + env.CF_API_KEY,
        'Content-Type': 'application/json',
      })

      return fetch(
        'https://api.cloudflare.com/client/v4/zones/' + env.CF_ZONE + '/purge_cache',
        {
          headers: headers,
          method: 'DELETE',
          body: '{"purge_everything": true}',
        },
      )
    } else {
      return new Response('Unauthorized', {
        status: 401,
        headers: { 'content-type': 'text/plain' },
      })
    }
  }
}
