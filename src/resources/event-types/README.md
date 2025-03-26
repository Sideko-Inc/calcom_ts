
### delete <a name="delete"></a>
Delete an event type



**API Endpoint**: `DELETE /v2/event-types/{eventTypeId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.eventTypes.delete({
  eventTypeId: 123.45,
  calApiVersion: "string",
});
```

### list <a name="list"></a>
Get all event types



**API Endpoint**: `GET /v2/event-types`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.eventTypes.list({ calApiVersion: "string" });
```

### get <a name="get"></a>
Get an event type



**API Endpoint**: `GET /v2/event-types/{eventTypeId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.eventTypes.get({
  eventTypeId: "string",
  calApiVersion: "string",
});
```

### patch <a name="patch"></a>
Update an event type



**API Endpoint**: `PATCH /v2/event-types/{eventTypeId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.eventTypes.patch({
  eventTypeId: 123.45,
  calApiVersion: "string",
});
```

### create <a name="create"></a>
Create an event type



**API Endpoint**: `POST /v2/event-types`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.eventTypes.create({
  lengthInMinutes: 60.0,
  slug: "learn-the-secrets-of-masterchief",
  title: "Learn the secrets of masterchief!",
  calApiVersion: "string",
});
```
