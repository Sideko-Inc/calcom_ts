
### list <a name="list"></a>
Get organization team bookings



**API Endpoint**: `GET /v2/organizations/{orgId}/teams/{teamId}/bookings`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.teams.bookings.list({
  orgId: 123.45,
  teamId: 123.45,
});
```
