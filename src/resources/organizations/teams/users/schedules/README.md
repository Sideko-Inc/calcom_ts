
### list <a name="list"></a>
Get schedules of a team member



**API Endpoint**: `GET /v2/organizations/{orgId}/teams/{teamId}/users/{userId}/schedules`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.teams.users.schedules.list({
  orgId: 123.45,
  teamId: 123.45,
  userId: 123.45,
});
```
