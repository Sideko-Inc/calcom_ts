
### check <a name="check"></a>
Check an ICS feed



**API Endpoint**: `GET /v2/calendars/ics-feed/check`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.calendars.icsFeed.check();
```

### save <a name="save"></a>
Save an ICS feed



**API Endpoint**: `POST /v2/calendars/ics-feed/save`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.calendars.icsFeed.save({
  urls: ["https://cal.com/ics/feed.ics", "http://cal.com/ics/feed.ics"],
});
```
