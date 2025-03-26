
### delete <a name="delete"></a>
Delete ooo entry of a user



**API Endpoint**: `DELETE /v2/organizations/{orgId}/users/{userId}/ooo/{oooId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.users.ooo.delete({
  oooId: 123.45,
  orgId: 123.45,
  userId: 123.45,
});
```

### list <a name="list"></a>
Get all ooo entries of a user



**API Endpoint**: `GET /v2/organizations/{orgId}/users/{userId}/ooo`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.users.ooo.list({
  orgId: 123.45,
  userId: 123.45,
});
```

### patch <a name="patch"></a>
Update ooo entry of a user



**API Endpoint**: `PATCH /v2/organizations/{orgId}/users/{userId}/ooo/{oooId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.users.ooo.patch({
  oooId: 123.45,
  orgId: 123.45,
  userId: 123.45,
});
```

### create <a name="create"></a>
Create an ooo entry for user



**API Endpoint**: `POST /v2/organizations/{orgId}/users/{userId}/ooo`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.users.ooo.create({
  end: "2023-05-10T23:59:59.999Z",
  start: "2023-05-01T00:00:00.000Z",
  orgId: 123.45,
  userId: 123.45,
});
```
