
### delete_from_user <a name="delete_from_user"></a>
Unassign an attribute from a user



**API Endpoint**: `DELETE /v2/organizations/{orgId}/attributes/options/{userId}/{attributeOptionId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.attributes.options.deleteFromUser({
  attributeOptionId: "string",
  orgId: 123.45,
  userId: 123.45,
});
```

### delete <a name="delete"></a>
Delete an attribute option



**API Endpoint**: `DELETE /v2/organizations/{orgId}/attributes/{attributeId}/options/{optionId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.attributes.options.delete({
  attributeId: "string",
  optionId: "string",
  orgId: 123.45,
});
```

### get <a name="get"></a>
Get all attribute options for a user



**API Endpoint**: `GET /v2/organizations/{orgId}/attributes/options/{userId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.attributes.options.get({
  orgId: 123.45,
  userId: 123.45,
});
```

### list <a name="list"></a>
Get all attribute options



**API Endpoint**: `GET /v2/organizations/{orgId}/attributes/{attributeId}/options`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.attributes.options.list({
  attributeId: "string",
  orgId: 123.45,
});
```

### patch <a name="patch"></a>
Update an attribute option



**API Endpoint**: `PATCH /v2/organizations/{orgId}/attributes/{attributeId}/options/{optionId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.attributes.options.patch({
  attributeId: "string",
  optionId: "string",
  orgId: 123.45,
});
```

### create_to_user <a name="create_to_user"></a>
Assign an attribute to a user



**API Endpoint**: `POST /v2/organizations/{orgId}/attributes/options/{userId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.attributes.options.createToUser({
  attributeId: "string",
  orgId: 123.45,
  userId: 123.45,
});
```

### create <a name="create"></a>
Create an attribute option



**API Endpoint**: `POST /v2/organizations/{orgId}/attributes/{attributeId}/options`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.attributes.options.create({
  slug: "string",
  value: "string",
  attributeId: "string",
  orgId: 123.45,
});
```
