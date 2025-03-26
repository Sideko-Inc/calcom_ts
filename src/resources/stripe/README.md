
### save <a name="save"></a>
Save stripe credentials



**API Endpoint**: `GET /v2/stripe/save`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.stripe.save({ code: "string", state: "string" });
```
