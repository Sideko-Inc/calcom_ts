
### delete <a name="delete"></a>
Delete a team event type



**API Endpoint**: `DELETE /v2/teams/{teamId}/event-types/{eventTypeId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.teams.eventTypes.delete({
  eventTypeId: 123.45,
  teamId: 123.45,
});
```

### list <a name="list"></a>
Get a team event type



**API Endpoint**: `GET /v2/teams/{teamId}/event-types`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.teams.eventTypes.list({ teamId: 123.45 });
```

### get <a name="get"></a>
Get an event type



**API Endpoint**: `GET /v2/teams/{teamId}/event-types/{eventTypeId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.teams.eventTypes.get({
  eventTypeId: 123.45,
  teamId: 123.45,
});
```

### patch <a name="patch"></a>
Update a team event type



**API Endpoint**: `PATCH /v2/teams/{teamId}/event-types/{eventTypeId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.teams.eventTypes.patch({
  eventTypeId: 123.45,
  teamId: 123.45,
});
```

### create <a name="create"></a>
Create an event type



**API Endpoint**: `POST /v2/teams/{teamId}/event-types`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.teams.eventTypes.create({
  hosts: [{ userId: 123.45 }],
  lengthInMinutes: 60.0,
  schedulingType: "collective",
  slug: "learn-the-secrets-of-masterchief",
  title: "Learn the secrets of masterchief!",
  teamId: 123.45,
});
```
