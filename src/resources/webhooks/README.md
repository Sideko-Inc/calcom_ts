
### delete <a name="delete"></a>
Delete a webhook



**API Endpoint**: `DELETE /v2/webhooks/{webhookId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.webhooks.delete({ webhookId: "string" });
```

### list <a name="list"></a>
Get all webooks

Gets a paginated list of webhooks for the authenticated user.

**API Endpoint**: `GET /v2/webhooks`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.webhooks.list();
```

### get <a name="get"></a>
Get a webhook



**API Endpoint**: `GET /v2/webhooks/{webhookId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.webhooks.get({ webhookId: "string" });
```

### patch <a name="patch"></a>
Update a webhook



**API Endpoint**: `PATCH /v2/webhooks/{webhookId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.webhooks.patch({ webhookId: "string" });
```

### create <a name="create"></a>
Create a webhook



**API Endpoint**: `POST /v2/webhooks`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.webhooks.create({
  active: true,
  subscriberUrl: "string",
  triggers: "AFTER_GUESTS_CAL_VIDEO_NO_SHOW",
});
```
