
### delete <a name="delete"></a>
Delete a managed user



**API Endpoint**: `DELETE /v2/oauth-clients/{clientId}/users/{userId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.oauthClients.users.delete({
  clientId: "string",
  userId: 123.45,
});
```

### list <a name="list"></a>
Get all managed users



**API Endpoint**: `GET /v2/oauth-clients/{clientId}/users`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.oauthClients.users.list({ clientId: "string" });
```

### get <a name="get"></a>
Get a managed user



**API Endpoint**: `GET /v2/oauth-clients/{clientId}/users/{userId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.oauthClients.users.get({
  clientId: "string",
  userId: 123.45,
});
```

### patch <a name="patch"></a>
Update a managed user



**API Endpoint**: `PATCH /v2/oauth-clients/{clientId}/users/{userId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.oauthClients.users.patch({
  clientId: "string",
  userId: 123.45,
});
```

### create <a name="create"></a>
Create a managed user



**API Endpoint**: `POST /v2/oauth-clients/{clientId}/users`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.oauthClients.users.create({
  email: "alice@example.com",
  name: "Alice Smith",
  clientId: "string",
});
```
