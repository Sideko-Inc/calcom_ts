
### delete <a name="delete"></a>
DELETE /v2/oauth-clients/{clientId}



**API Endpoint**: `DELETE /v2/oauth-clients/{clientId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.oauthClients.delete({ clientId: "string" });
```

### list <a name="list"></a>
GET /v2/oauth-clients



**API Endpoint**: `GET /v2/oauth-clients`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.oauthClients.list();
```

### get <a name="get"></a>
GET /v2/oauth-clients/{clientId}



**API Endpoint**: `GET /v2/oauth-clients/{clientId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.oauthClients.get({ clientId: "string" });
```

### patch <a name="patch"></a>
PATCH /v2/oauth-clients/{clientId}



**API Endpoint**: `PATCH /v2/oauth-clients/{clientId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.oauthClients.patch({ clientId: "string" });
```

### create <a name="create"></a>
POST /v2/oauth-clients



**API Endpoint**: `POST /v2/oauth-clients`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.oauthClients.create({
  name: "string",
  permissions: ["*"],
  redirectUris: ["string"],
});
```
