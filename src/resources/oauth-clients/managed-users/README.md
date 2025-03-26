
### list <a name="list"></a>
GET /v2/oauth-clients/{clientId}/managed-users



**API Endpoint**: `GET /v2/oauth-clients/{clientId}/managed-users`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.oauthClients.managedUsers.list({ clientId: "string" });
```
