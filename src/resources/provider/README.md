
### get <a name="get"></a>
Get a provider



**API Endpoint**: `GET /v2/provider/{clientId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.provider.get({ clientId: "string" });
```

### verify_token <a name="verify_token"></a>
Verify an access token



**API Endpoint**: `GET /v2/provider/{clientId}/access-token`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.provider.verifyToken({ clientId: "string" });
```
