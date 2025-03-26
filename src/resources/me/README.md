
### get <a name="get"></a>
Get my profile



**API Endpoint**: `GET /v2/me`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.me.get();
```

### patch <a name="patch"></a>
Update my profile



**API Endpoint**: `PATCH /v2/me`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.me.patch();
```
