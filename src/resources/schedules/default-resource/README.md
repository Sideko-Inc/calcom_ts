
### list <a name="list"></a>
Get default schedule

Get the default schedule of the authenticated user.

**API Endpoint**: `GET /v2/schedules/default`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.schedules.default.list({ calApiVersion: "string" });
```
