# Clear cache worker webhook

Cloudflare Worker that clears all cache in a given zone when called. Designed to be used as a webhook.

## Setup

Cloudflare Workers:
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