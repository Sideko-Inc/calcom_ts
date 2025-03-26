
### list <a name="list"></a>
Get all calendars



**API Endpoint**: `GET /v2/calendars`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.calendars.list();
```

### get_busy <a name="get_busy"></a>
Get busy times

Get busy times from a calendar. Example request URL is `https://api.cal.com/v2/calendars/busy-times?loggedInUsersTz=Europe%2FMadrid&dateFrom=2024-12-18&dateTo=2024-12-18&calendarsToLoad[0][credentialId]=135&calendarsToLoad[0][externalId]=skrauciz%40gmail.com`

**API Endpoint**: `GET /v2/calendars/busy-times`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.calendars.getBusy({
  credentialId: 123.45,
  externalId: "string",
  loggedInUsersTz: "string",
});
```

### check <a name="check"></a>
Check a calendar connection



**API Endpoint**: `GET /v2/calendars/{calendar}/check`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.calendars.check({ calendar: "apple" });
```

### connect <a name="connect"></a>
Get oAuth connect URL



**API Endpoint**: `GET /v2/calendars/{calendar}/connect`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.calendars.connect({ calendar: "google" });
```

### save <a name="save"></a>
Save an oAuth calendar credentials



**API Endpoint**: `GET /v2/calendars/{calendar}/save`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.calendars.save({
  calendar: "google",
  code: "string",
  state: "string",
});
```

### disconnect <a name="disconnect"></a>
Disconnect a calendar



**API Endpoint**: `POST /v2/calendars/{calendar}/disconnect`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.calendars.disconnect({ id: 10, calendar: "apple" });
```
