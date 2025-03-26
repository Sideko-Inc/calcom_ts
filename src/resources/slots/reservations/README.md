
### delete <a name="delete"></a>
DELETE /v2/slots/reservations/{uid}



**API Endpoint**: `DELETE /v2/slots/reservations/{uid}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.slots.reservations.delete({
  uid: "string",
  calApiVersion: "string",
});
```

### get <a name="get"></a>
Get reserved slot



**API Endpoint**: `GET /v2/slots/reservations/{uid}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.slots.reservations.get({
  uid: "string",
  calApiVersion: "string",
});
```

### patch <a name="patch"></a>
Updated reserved a slot



**API Endpoint**: `PATCH /v2/slots/reservations/{uid}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.slots.reservations.patch({
  eventTypeId: 1.0,
  slotStart: "2024-09-04T09:00:00Z",
  uid: "string",
  calApiVersion: "string",
});
```

### create <a name="create"></a>
Reserve a slot

Make a slot not available for others to book for a certain period of time.

**API Endpoint**: `POST /v2/slots/reservations`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.slots.reservations.create({
  eventTypeId: 1.0,
  slotStart: "2024-09-04T09:00:00Z",
  calApiVersion: "string",
});
```
