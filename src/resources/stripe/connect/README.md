
### redirect <a name="redirect"></a>
Get stripe connect URL



**API Endpoint**: `GET /v2/stripe/connect`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.stripe.connect.redirect();
```
