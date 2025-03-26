
### delete <a name="delete"></a>
Delete an attribute



**API Endpoint**: `DELETE /v2/organizations/{orgId}/attributes/{attributeId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.attributes.delete({
  attributeId: "string",
  orgId: 123.45,
});
```

### list <a name="list"></a>
Get all attributes



**API Endpoint**: `GET /v2/organizations/{orgId}/attributes`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.attributes.list({ orgId: 123.45 });
```

### get <a name="get"></a>
Get an attribute



**API Endpoint**: `GET /v2/organizations/{orgId}/attributes/{attributeId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.attributes.get({
  attributeId: "string",
  orgId: 123.45,
});
```

### patch <a name="patch"></a>
Update an attribute



**API Endpoint**: `PATCH /v2/organizations/{orgId}/attributes/{attributeId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.attributes.patch({
  attributeId: "string",
  orgId: 123.45,
});
```

### create <a name="create"></a>
Create an attribute



**API Endpoint**: `POST /v2/organizations/{orgId}/attributes`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.attributes.create({
  name: "string",
  options: [{ slug: "string", value: "string" }],
  slug: "string",
  type: "MULTI_SELECT",
  orgId: 123.45,
});
```
