
### delete <a name="delete"></a>
Delete a schedule



**API Endpoint**: `DELETE /v2/schedules/{scheduleId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.schedules.delete({
  scheduleId: 123.45,
  calApiVersion: "string",
});
```

### list <a name="list"></a>
Get all schedules

Get all schedules of the authenticated user.

**API Endpoint**: `GET /v2/schedules`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.schedules.list({ calApiVersion: "string" });
```

### get <a name="get"></a>
Get a schedule



**API Endpoint**: `GET /v2/schedules/{scheduleId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.schedules.get({
  scheduleId: 123.45,
  calApiVersion: "string",
});
```

### patch <a name="patch"></a>
Update a schedule



**API Endpoint**: `PATCH /v2/schedules/{scheduleId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.schedules.patch({
  scheduleId: "string",
  calApiVersion: "string",
});
```

### create <a name="create"></a>
Create a schedule


      Create a schedule for the authenticated user.

      The point of creating schedules is for event types to be available at specific times.

      The first goal of schedules is to have a default schedule. If you are platform customer and created managed users, then it is important to note that each managed user should have a default schedule.
      1. If you passed `timeZone` when creating managed user, then the default schedule from Monday to Friday from 9AM to 5PM will be created with that timezone. The managed user can then change the default schedule via the `AvailabilitySettings` atom.
      2. If you did not, then we assume you want the user to have this specific schedule right away. You should create a default schedule by specifying
      `"isDefault": true` in the request body. Until the user has a default schedule the user can't be booked nor manage their schedule via the AvailabilitySettings atom.

      The second goal of schedules is to create another schedule that event types can point to. This is useful for when an event is booked because availability is not checked against the default schedule but instead against that specific schedule.
      After creating a non-default schedule, you can update an event type to point to that schedule via the PATCH `event-types/{eventTypeId}` endpoint.

      When specifying start time and end time for each day use the 24 hour format e.g. 08:00, 15:00 etc.
      

**API Endpoint**: `POST /v2/schedules`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.schedules.create({
  isDefault: true,
  name: "Catch up hours",
  timeZone: "Europe/Rome",
  calApiVersion: "string",
});
```
