
### delete_all <a name="delete_all"></a>
Delete all webhooks



**API Endpoint**: `DELETE /v2/oauth-clients/{clientId}/webhooks`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.oauthClients.webhooks.deleteAll({
  clientId: "string",
});
```

### delete <a name="delete"></a>
Delete a webhook



**API Endpoint**: `DELETE /v2/oauth-clients/{clientId}/webhooks/{webhookId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.oauthClients.webhooks.delete({
  clientId: "string",
  webhookId: "string",
});
```

### list <a name="list"></a>
Get all webhooks



**API Endpoint**: `GET /v2/oauth-clients/{clientId}/webhooks`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.oauthClients.webhooks.list({ clientId: "string" });
```

### get <a name="get"></a>
Get a webhook



**API Endpoint**: `GET /v2/oauth-clients/{clientId}/webhooks/{webhookId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.oauthClients.webhooks.get({
  clientId: "string",
  webhookId: "string",
});
```

### patch <a name="patch"></a>
Update a webhook



**API Endpoint**: `PATCH /v2/oauth-clients/{clientId}/webhooks/{webhookId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.oauthClients.webhooks.patch({
  clientId: "string",
  webhookId: "string",
});
```

### create <a name="create"></a>
Create a webhook



**API Endpoint**: `POST /v2/oauth-clients/{clientId}/webhooks`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.oauthClients.webhooks.create({
  active: true,
  subscriberUrl: "string",
  triggers: "AFTER_GUESTS_CAL_VIDEO_NO_SHOW",
  clientId: "string",
});
```
