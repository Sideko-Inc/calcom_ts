
### create <a name="create"></a>
Refresh API Key

Generate a new API key and delete the current one. Provide API key to refresh as a Bearer token in the Authorization header (e.g. "Authorization: Bearer <apiKey>").

**API Endpoint**: `POST /v2/api-keys/refresh`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.apiKeys.refresh.create();
```
