
### create <a name="create"></a>
Force refresh tokens

If you have lost managed user access or refresh token, then you can get new ones by using OAuth credentials.
    Each access token is valid for 60 minutes and each refresh token for 1 year. Make sure to store them later in your database, for example, by updating the User model to have `calAccessToken` and `calRefreshToken` columns.

**API Endpoint**: `POST /v2/oauth-clients/{clientId}/users/{userId}/force-refresh`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.oauthClients.users.forceRefresh.create({
  clientId: "string",
  userId: 123.45,
});
```
