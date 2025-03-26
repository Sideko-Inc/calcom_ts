
### delete <a name="delete"></a>
Delete a selected calendar



**API Endpoint**: `DELETE /v2/selected-calendars`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.selectedCalendars.delete({
  credentialId: "string",
  externalId: "string",
  integration: "string",
});
```

### create <a name="create"></a>
Add a selected calendar



**API Endpoint**: `POST /v2/selected-calendars`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.selectedCalendars.create({
  credentialId: 123.45,
  externalId: "string",
  integration: "string",
});
```
