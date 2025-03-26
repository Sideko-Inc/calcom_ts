
### delete <a name="delete"></a>
Delete a schedule



**API Endpoint**: `DELETE /v2/organizations/{orgId}/users/{userId}/schedules/{scheduleId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.users.schedules.delete({
  orgId: 123.45,
  scheduleId: 123.45,
  userId: 123.45,
});
```

### list <a name="list"></a>
Get all schedules



**API Endpoint**: `GET /v2/organizations/{orgId}/users/{userId}/schedules`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.users.schedules.list({
  orgId: 123.45,
  userId: 123.45,
});
```

### get <a name="get"></a>
Get a schedule



**API Endpoint**: `GET /v2/organizations/{orgId}/users/{userId}/schedules/{scheduleId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.users.schedules.get({
  orgId: 123.45,
  scheduleId: 123.45,
  userId: 123.45,
});
```

### patch <a name="patch"></a>
Update a schedule



**API Endpoint**: `PATCH /v2/organizations/{orgId}/users/{userId}/schedules/{scheduleId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.users.schedules.patch({
  orgId: 123.45,
  scheduleId: 123.45,
  userId: 123.45,
});
```

### create <a name="create"></a>
Create a schedule



**API Endpoint**: `POST /v2/organizations/{orgId}/users/{userId}/schedules`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.users.schedules.create({
  isDefault: true,
  name: "Catch up hours",
  timeZone: "Europe/Rome",
  orgId: 123.45,
  userId: 123.45,
});
```
