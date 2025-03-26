
### update <a name="update"></a>
Update destination calendars



**API Endpoint**: `PUT /v2/destination-calendars`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.destinationCalendars.update({
  externalId:
    "https://caldav.icloud.com/26962146906/calendars/1644422A-1945-4438-BBC0-4F0Q23A57R7S/",
  integration: "apple_calendar",
});
```
