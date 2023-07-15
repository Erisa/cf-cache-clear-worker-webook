# Clear cache worker webhook

Cloudflare Worker that clears all cache in a given zone when called. Designed to be used as a webhook.

## Setup

Cloudflare Workers:

[Create API token with this link](https://dash.cloudflare.com/profile/api-tokens?permissionGroupKeys=%5B%7B%22key%22%3A%22cache%22%2C%22type%22%3A%22purge%22%7D%5D&name=Cache+purge)

and then
```
wrangler secret put SECRET
wrangler secret put CF_ZONE
wrangler secret put CF_API_KEY
wrangler publish
```

Or local:
```
npm i -g miniflare
miniflare -b SECRET=secrethere -b CF_API_KEY=apikeyhere -b CF_ZONE=zoneidhere
```

## Usage
![](https://cdn.erisa.moe/firefox_Udg8kjUU6l.png)
