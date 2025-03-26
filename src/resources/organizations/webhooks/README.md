
### delete <a name="delete"></a>
Delete a webhook



**API Endpoint**: `DELETE /v2/organizations/{orgId}/webhooks/{webhookId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.webhooks.delete({
  orgId: 123.45,
  webhookId: "string",
});
```

### list <a name="list"></a>
Get all webhooks



**API Endpoint**: `GET /v2/organizations/{orgId}/webhooks`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.webhooks.list({ orgId: 123.45 });
```

### get <a name="get"></a>
Get a webhook



**API Endpoint**: `GET /v2/organizations/{orgId}/webhooks/{webhookId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.webhooks.get({
  orgId: 123.45,
  webhookId: "string",
});
```

### patch <a name="patch"></a>
Update a webhook



**API Endpoint**: `PATCH /v2/organizations/{orgId}/webhooks/{webhookId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.webhooks.patch({
  orgId: 123.45,
  webhookId: "string",
});
```

### create <a name="create"></a>
Create a webhook



**API Endpoint**: `POST /v2/organizations/{orgId}/webhooks`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.webhooks.create({
  active: true,
  subscriberUrl: "string",
  triggers: "AFTER_GUESTS_CAL_VIDEO_NO_SHOW",
  orgId: 123.45,
});
```
