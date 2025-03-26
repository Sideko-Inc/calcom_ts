
### delete <a name="delete"></a>
Delete a team



**API Endpoint**: `DELETE /v2/organizations/{orgId}/teams/{teamId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.teams.delete({
  orgId: 123.45,
  teamId: 123.45,
});
```

### list <a name="list"></a>
Get all teams



**API Endpoint**: `GET /v2/organizations/{orgId}/teams`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.teams.list({ orgId: 123.45 });
```

### get <a name="get"></a>
Get a team



**API Endpoint**: `GET /v2/organizations/{orgId}/teams/{teamId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.teams.get({
  orgId: 123.45,
  teamId: 123.45,
});
```

### patch <a name="patch"></a>
Update a team



**API Endpoint**: `PATCH /v2/organizations/{orgId}/teams/{teamId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.teams.patch({
  orgId: 123.45,
  teamId: 123.45,
});
```

### create <a name="create"></a>
Create a team



**API Endpoint**: `POST /v2/organizations/{orgId}/teams`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.teams.create({
  name: "CalTeam",
  orgId: 123.45,
  xCalClientId: "string",
});
```
