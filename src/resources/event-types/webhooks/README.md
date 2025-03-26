
### delete_all <a name="delete_all"></a>
Delete all webhooks



**API Endpoint**: `DELETE /v2/event-types/{eventTypeId}/webhooks`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.eventTypes.webhooks.deleteAll({ eventTypeId: 123.45 });
```

### delete <a name="delete"></a>
Delete a webhook



**API Endpoint**: `DELETE /v2/event-types/{eventTypeId}/webhooks/{webhookId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.eventTypes.webhooks.delete({
  eventTypeId: 123.45,
  webhookId: "string",
});
```

### list <a name="list"></a>
Get all webhooks



**API Endpoint**: `GET /v2/event-types/{eventTypeId}/webhooks`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.eventTypes.webhooks.list({ eventTypeId: 123.45 });
```

### get <a name="get"></a>
Get a webhook



**API Endpoint**: `GET /v2/event-types/{eventTypeId}/webhooks/{webhookId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.eventTypes.webhooks.get({
  eventTypeId: 123.45,
  webhookId: "string",
});
```

### patch <a name="patch"></a>
Update a webhook



**API Endpoint**: `PATCH /v2/event-types/{eventTypeId}/webhooks/{webhookId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.eventTypes.webhooks.patch({
  eventTypeId: 123.45,
  webhookId: "string",
});
```

### create <a name="create"></a>
Create a webhook



**API Endpoint**: `POST /v2/event-types/{eventTypeId}/webhooks`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.eventTypes.webhooks.create({
  active: true,
  subscriberUrl: "string",
  triggers: "AFTER_GUESTS_CAL_VIDEO_NO_SHOW",
  eventTypeId: 123.45,
});
```
