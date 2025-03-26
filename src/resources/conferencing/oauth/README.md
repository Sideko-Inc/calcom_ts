
### auth_url <a name="auth_url"></a>
Get OAuth conferencing app auth url



**API Endpoint**: `GET /v2/conferencing/{app}/oauth/auth-url`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.conferencing.oauth.authUrl({
  app: "msteams",
  onErrorReturnTo: "string",
  returnTo: "string",
});
```

### callback <a name="callback"></a>
conferencing apps oauths callback



**API Endpoint**: `GET /v2/conferencing/{app}/oauth/callback`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.conferencing.oauth.callback({
  app: "msteams",
  code: "string",
  state: "string",
});
```
