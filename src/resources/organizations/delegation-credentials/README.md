
### patch <a name="patch"></a>
Update delegation credentials of your organization.



**API Endpoint**: `PATCH /v2/organizations/{orgId}/delegation-credentials/{credentialId}`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.delegationCredentials.patch({
  credentialId: "string",
  orgId: 123.45,
});
```

### create <a name="create"></a>
Save delegation credentials for your organization.



**API Endpoint**: `POST /v2/organizations/{orgId}/delegation-credentials`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.organizations.delegationCredentials.create({
  domain: "string",
  serviceAccountKey: [
    { clientEmail: "string", clientId: "string", privateKey: "string" },
  ],
  workspacePlatformSlug: "string",
  orgId: 123.45,
});
```
