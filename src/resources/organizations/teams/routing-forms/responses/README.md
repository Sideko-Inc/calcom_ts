
### list <a name="list"></a>
Get routing form responses



**API Endpoint**: `GET /v2/organizations/{orgId}/teams/{teamId}/routing-forms/{routingFormId}/responses`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.teams.routingForms.responses.list({
  orgId: 123.45,
  routingFormId: "string",
  teamId: 123.45,
});
```
