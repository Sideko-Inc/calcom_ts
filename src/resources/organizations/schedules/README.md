
### list <a name="list"></a>
Get all schedules



**API Endpoint**: `GET /v2/organizations/{orgId}/schedules`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.schedules.list({ orgId: 123.45 });
```
