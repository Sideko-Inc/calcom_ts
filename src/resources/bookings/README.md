
### list <a name="list"></a>
Get all bookings



**API Endpoint**: `GET /v2/bookings`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.bookings.list({ calApiVersion: "string" });
```

### get <a name="get"></a>
Get a booking

`:bookingUid` can be

      1. uid of a normal booking

      2. uid of one of the recurring booking recurrences

      3. uid of recurring booking which will return an array of all recurring booking recurrences (stored as recurringBookingUid on one of the individual recurrences).

**API Endpoint**: `GET /v2/bookings/{bookingUid}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.bookings.get({
  bookingUid: "string",
  calApiVersion: "string",
});
```

### create <a name="create"></a>
Create a booking


      POST /v2/bookings is used to create regular bookings, recurring bookings and instant bookings. The request bodies for all 3 are almost the same except:
      If eventTypeId in the request body is id of a regular event, then regular booking is created.

      If it is an id of a recurring event type, then recurring booking is created.

      Meaning that the request bodies are equal but the outcome depends on what kind of event type it is with the goal of making it as seamless for developers as possible.

      For team event types it is possible to create instant meeting. To do that just pass `"instant": true` to the request body.

      The start needs to be in UTC aka if the timezone is GMT+2 in Rome and meeting should start at 11, then UTC time should have hours 09:00 aka without time zone.
      

**API Endpoint**: `POST /v2/bookings`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.bookings.create({
  data: {
    attendee: { name: "John Doe", timeZone: "America/New_York" },
    eventTypeId: 123.0,
    start: "2024-08-13T09:00:00Z",
  },
  calApiVersion: "string",
});
```

### cancel <a name="cancel"></a>
Cancel a booking

:bookingUid can be :bookingUid of an usual booking, individual recurrence or recurring booking to cancel all recurrences.
    For seated bookings to cancel one individual booking provide :bookingUid and :seatUid in the request body. For recurring seated bookings it is not possible to cancel all of them with 1 call
    like with non-seated recurring bookings by providing recurring bookind uid - you have to cancel each recurrence booking by its bookingUid + seatUid.

**API Endpoint**: `POST /v2/bookings/{bookingUid}/cancel`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.bookings.cancel({
  data: {},
  bookingUid: "string",
  calApiVersion: "string",
});
```

### confirm <a name="confirm"></a>
Confirm booking that requires a confirmation



**API Endpoint**: `POST /v2/bookings/{bookingUid}/confirm`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.bookings.confirm({
  bookingUid: "string",
  calApiVersion: "string",
});
```

### decline <a name="decline"></a>
Decline booking that requires a confirmation



**API Endpoint**: `POST /v2/bookings/{bookingUid}/decline`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.bookings.decline({
  bookingUid: "string",
  calApiVersion: "string",
});
```

### mark_absent <a name="mark_absent"></a>
Mark a booking absence



**API Endpoint**: `POST /v2/bookings/{bookingUid}/mark-absent`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.bookings.markAbsent({
  bookingUid: "string",
  calApiVersion: "string",
});
```

### reassign <a name="reassign"></a>
Automatically reassign booking to a new host



**API Endpoint**: `POST /v2/bookings/{bookingUid}/reassign`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.bookings.reassign({
  bookingUid: "string",
  calApiVersion: "string",
});
```

### reassign_to_user <a name="reassign_to_user"></a>
Reassign a booking to a specific user



**API Endpoint**: `POST /v2/bookings/{bookingUid}/reassign/{userId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.bookings.reassignToUser({
  bookingUid: "string",
  userId: 123.45,
  calApiVersion: "string",
});
```

### reschedule <a name="reschedule"></a>
Reschedule a booking

Reschedule a booking or seated booking

**API Endpoint**: `POST /v2/bookings/{bookingUid}/reschedule`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.bookings.reschedule({
  data: { start: "2024-08-13T10:00:00Z" },
  bookingUid: "string",
  calApiVersion: "string",
});
```
