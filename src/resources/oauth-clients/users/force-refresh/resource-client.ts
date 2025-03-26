import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/oauth-clients/users/force-refresh/request-types";
import { Schemas$KeysResponseDto } from "calcom_ts/types/keys-response-dto";

export class ForceRefreshClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Force refresh tokens
   *
   * If you have lost managed user access or refresh token, then you can get new ones by using OAuth credentials.
   *     Each access token is valid for 60 minutes and each refresh token for 1 year. Make sure to store them later in your database, for example, by updating the User model to have `calAccessToken` and `calRefreshToken` columns.
   *
   * POST /v2/oauth-clients/{clientId}/users/{userId}/force-refresh
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.KeysResponseDto> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/oauth-clients/${request.clientId}/users/${request.userId}/force-refresh`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$KeysResponseDto.in,
      opts,
    });
  }
}
