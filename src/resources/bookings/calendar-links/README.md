
### list <a name="list"></a>
Get 'Add to Calendar' links for a booking

Retrieve calendar links for a booking that can be used to add the event to various calendar services. Returns links for Google Calendar, Microsoft Office, Microsoft Outlook, and a downloadable ICS file.

**API Endpoint**: `GET /v2/bookings/{bookingUid}/calendar-links`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.bookings.calendarLinks.list({
  bookingUid: "string",
  calApiVersion: "string",
});
```
