
### delete <a name="delete"></a>
Delete a user



**API Endpoint**: `DELETE /v2/organizations/{orgId}/users/{userId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.users.delete({
  orgId: 123.45,
  userId: 123.45,
});
```

### list <a name="list"></a>
Get all users



**API Endpoint**: `GET /v2/organizations/{orgId}/users`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.users.list({ orgId: 123.45 });
```

### patch <a name="patch"></a>
Update a user



**API Endpoint**: `PATCH /v2/organizations/{orgId}/users/{userId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.users.patch({
  data: {},
  orgId: 123.45,
  userId: 123.45,
});
```

### create <a name="create"></a>
Create a user



**API Endpoint**: `POST /v2/organizations/{orgId}/users`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.users.create({
  email: "user@example.com",
  orgId: 123.45,
});
```
