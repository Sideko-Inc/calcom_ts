
### delete <a name="delete"></a>
Delete a team event type



**API Endpoint**: `DELETE /v2/organizations/{orgId}/teams/{teamId}/event-types/{eventTypeId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.teams.eventTypes.delete({
  eventTypeId: 123.45,
  orgId: 123.45,
  teamId: 123.45,
});
```

### list_for_team <a name="list_for_team"></a>
Get all team event types



**API Endpoint**: `GET /v2/organizations/{orgId}/teams/event-types`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.teams.eventTypes.listForTeam({
  orgId: 123.45,
});
```

### list <a name="list"></a>
Get a team event type



**API Endpoint**: `GET /v2/organizations/{orgId}/teams/{teamId}/event-types`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.teams.eventTypes.list({
  orgId: 123.45,
  teamId: 123.45,
});
```

### get_one <a name="get_one"></a>
Get an event type



**API Endpoint**: `GET /v2/organizations/{orgId}/teams/{teamId}/event-types/{eventTypeId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.teams.eventTypes.getOne({
  eventTypeId: 123.45,
  orgId: 123.45,
  teamId: 123.45,
});
```

### patch <a name="patch"></a>
Update a team event type



**API Endpoint**: `PATCH /v2/organizations/{orgId}/teams/{teamId}/event-types/{eventTypeId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.teams.eventTypes.patch({
  eventTypeId: 123.45,
  orgId: 123.45,
  teamId: 123.45,
});
```

### create <a name="create"></a>
Create an event type



**API Endpoint**: `POST /v2/organizations/{orgId}/teams/{teamId}/event-types`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.teams.eventTypes.create({
  hosts: [{ userId: 123.45 }],
  lengthInMinutes: 60.0,
  schedulingType: "collective",
  slug: "learn-the-secrets-of-masterchief",
  title: "Learn the secrets of masterchief!",
  orgId: 123.45,
  teamId: 123.45,
});
```

### create_phone_call <a name="create_phone_call"></a>
Create a phone call



**API Endpoint**: `POST /v2/organizations/{orgId}/teams/{teamId}/event-types/{eventTypeId}/create-phone-call`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.teams.eventTypes.createPhoneCall({
  calApiKey: "string",
  enabled: {},
  numberToCall: "string",
  templateType: "CHECK_IN_APPOINTMENT",
  yourPhoneNumber: "string",
  eventTypeId: 123.45,
  orgId: 123.45,
  teamId: 123.45,
});
```
