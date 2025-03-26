
### check <a name="check"></a>
Check stripe connection



**API Endpoint**: `GET /v2/stripe/check`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.stripe.check.check();
```

### get <a name="get"></a>
Check team stripe connection



**API Endpoint**: `GET /v2/stripe/check/{teamId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.stripe.check.get({ teamId: "string" });
```
