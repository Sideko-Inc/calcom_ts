
### refresh <a name="refresh"></a>
Refresh managed user tokens

If managed user access token is expired then get a new one using this endpoint. Each access token is valid for 60 minutes and 
    each refresh token for 1 year. Make sure to store them later in your database, for example, by updating the User model to have `calAccessToken` and `calRefreshToken` columns.

**API Endpoint**: `POST /v2/oauth/{clientId}/refresh`

#### Example Snippet

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
const res = await client.oauth.refresh({
  refreshToken: "string",
  clientId: "string",
  xCalSecretKey: "string",
});
```
