
### disconnect <a name="disconnect"></a>
Disconnect your conferencing application



**API Endpoint**: `DELETE /v2/conferencing/{app}/disconnect`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.conferencing.disconnect({ app: "google-meet" });
```

### list <a name="list"></a>
List your conferencing applications



**API Endpoint**: `GET /v2/conferencing`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.conferencing.list();
```

### list_1 <a name="list_1"></a>
Get your default conferencing application



**API Endpoint**: `GET /v2/conferencing/default`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.conferencing.list1();
```

### connect <a name="connect"></a>
Connect your conferencing application



**API Endpoint**: `POST /v2/conferencing/{app}/connect`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.conferencing.connect({ app: "google-meet" });
```

### default <a name="default"></a>
Set your default conferencing application



**API Endpoint**: `POST /v2/conferencing/{app}/default`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.conferencing.defaultFn({ app: "daily-video" });
```
