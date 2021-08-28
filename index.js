addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  var url = new URL(request.url)
  if (url.pathname == '/' + SECRET) {
    var headers = new Headers({
      Authorization: 'Bearer ' + CF_API_KEY,
      'Content-Type': 'application/json',
    })

    var cfReq = fetch(
      'https://api.cloudflare.com/client/v4/zones/' + CF_ZONE + '/purge_cache',
      {
        headers: headers,
        method: 'DELETE',
        body: '{"purge_everything": true}',
      },
    )

    return cfReq
  } else {
    return new Response('Unauthorized', {
      status: 401,
      headers: { 'content-type': 'text/plain' },
    })
  }
}
