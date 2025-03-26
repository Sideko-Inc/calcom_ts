
### create <a name="create"></a>
Sync credentials



**API Endpoint**: `POST /v2/calendars/{calendar}/credentials`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.calendars.credentials.create({ calendar: "apple" });
```
