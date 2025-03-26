
### list <a name="list"></a>
Get all timezones



**API Endpoint**: `GET /v2/timezones`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.timezones.list();
```
