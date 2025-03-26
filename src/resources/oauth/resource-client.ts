import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/oauth/request-types";
import { Schemas$KeysResponseDto } from "calcom_ts/types/keys-response-dto";
import { Schemas$RefreshTokenInput } from "calcom_ts/types/refresh-token-input";

export class OauthClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Refresh managed user tokens
   *
   * If managed user access token is expired then get a new one using this endpoint. Each access token is valid for 60 minutes and
   *     each refresh token for 1 year. Make sure to store them later in your database, for example, by updating the User model to have `calAccessToken` and `calRefreshToken` columns.
   *
   * POST /v2/oauth/{clientId}/refresh
   */
  refresh(
    request: requests.RefreshRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.KeysResponseDto> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/oauth/${request.clientId}/refresh`,
      auth: ["bearerAuth"],
      headers: { "x-cal-secret-key": request.xCalSecretKey },
      contentType: "application/json",
      body: Schemas$RefreshTokenInput.out.parse(request),
      responseSchema: Schemas$KeysResponseDto.in,
      opts,
    });
  }
}
