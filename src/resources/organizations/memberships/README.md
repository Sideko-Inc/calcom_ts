
### delete <a name="delete"></a>
Delete a membership



**API Endpoint**: `DELETE /v2/organizations/{orgId}/memberships/{membershipId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.memberships.delete({
  membershipId: 123.45,
  orgId: 123.45,
});
```

### list <a name="list"></a>
Get all memberships



**API Endpoint**: `GET /v2/organizations/{orgId}/memberships`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.memberships.list({ orgId: 123.45 });
```

### get <a name="get"></a>
Get a membership



**API Endpoint**: `GET /v2/organizations/{orgId}/memberships/{membershipId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.memberships.get({
  membershipId: 123.45,
  orgId: 123.45,
});
```

### patch <a name="patch"></a>
Update a membership



**API Endpoint**: `PATCH /v2/organizations/{orgId}/memberships/{membershipId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.memberships.patch({
  membershipId: 123.45,
  orgId: 123.45,
});
```

### create <a name="create"></a>
Create a membership



**API Endpoint**: `POST /v2/organizations/{orgId}/memberships`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.memberships.create({
  role: "ADMIN",
  userId: 123.45,
  orgId: 123.45,
});
```
