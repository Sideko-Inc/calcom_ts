
### delete <a name="delete"></a>
Delete a team



**API Endpoint**: `DELETE /v2/teams/{teamId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.teams.delete({ teamId: 123.45 });
```

### list <a name="list"></a>
Get teams



**API Endpoint**: `GET /v2/teams`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.teams.list();
```

### get <a name="get"></a>
Get a team



**API Endpoint**: `GET /v2/teams/{teamId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.teams.get({ teamId: 123.45 });
```

### patch <a name="patch"></a>
Update a team



**API Endpoint**: `PATCH /v2/teams/{teamId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.teams.patch({ teamId: 123.45 });
```

### create <a name="create"></a>
Create a team



**API Endpoint**: `POST /v2/teams`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.teams.create({ name: "CalTeam" });
```
