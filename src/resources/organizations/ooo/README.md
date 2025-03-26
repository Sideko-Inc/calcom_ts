
### get <a name="get"></a>
Get all OOO entries of org users



**API Endpoint**: `GET /v2/organizations/{orgId}/ooo`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.ooo.get({ orgId: 123.45 });
```
