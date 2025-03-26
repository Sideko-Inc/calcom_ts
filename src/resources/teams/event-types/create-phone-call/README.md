
### create <a name="create"></a>
Create a phone call



**API Endpoint**: `POST /v2/teams/{teamId}/event-types/{eventTypeId}/create-phone-call`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.teams.eventTypes.createPhoneCall.create({
  calApiKey: "string",
  enabled: {},
  numberToCall: "string",
  templateType: "CHECK_IN_APPOINTMENT",
  yourPhoneNumber: "string",
  eventTypeId: 123.45,
  teamId: 123.45,
});
```
