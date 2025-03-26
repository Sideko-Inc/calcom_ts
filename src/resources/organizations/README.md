
### delete <a name="delete"></a>
Delete an organization within an organization

Requires the user to have at least the 'ORG_ADMIN' role within the organization. Additionally, for platform, the plan must be 'SCALE' or higher to access this endpoint.

**API Endpoint**: `DELETE /v2/organizations/{orgId}/organizations/{managedOrganizationId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.delete({
  managedOrganizationId: 123.45,
  orgId: 123.45,
});
```

### list <a name="list"></a>
Get all organizations within an organization

Requires the user to have at least the 'ORG_ADMIN' role within the organization. Additionally, for platform, the plan must be 'SCALE' or higher to access this endpoint.

**API Endpoint**: `GET /v2/organizations/{orgId}/organizations`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.list({ orgId: 123.45 });
```

### get <a name="get"></a>
Get an organization within an organization

Requires the user to have at least the 'ORG_ADMIN' role within the organization. Additionally, for platform, the plan must be 'SCALE' or higher to access this endpoint.

**API Endpoint**: `GET /v2/organizations/{orgId}/organizations/{managedOrganizationId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.get({
  managedOrganizationId: 123.45,
  orgId: 123.45,
});
```

### patch <a name="patch"></a>
Update an organization within an organization

Requires the user to have at least the 'ORG_ADMIN' role within the organization. Additionally, for platform, the plan must be 'SCALE' or higher to access this endpoint.

**API Endpoint**: `PATCH /v2/organizations/{orgId}/organizations/{managedOrganizationId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.patch({
  managedOrganizationId: 123.45,
  orgId: 123.45,
});
```

### create <a name="create"></a>
Create an organization within an organization

Requires the user to have at least the 'ORG_ADMIN' role within the organization. Additionally, for platform, the plan must be 'SCALE' or higher to access this endpoint.

**API Endpoint**: `POST /v2/organizations/{orgId}/organizations`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.create({
  name: "CalTeam",
  orgId: 123.45,
});
```
