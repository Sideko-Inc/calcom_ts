
### get <a name="get"></a>
Get teams membership for user



**API Endpoint**: `GET /v2/organizations/{orgId}/teams/me`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.teams.me.get({ orgId: 123.45 });
```
