import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/provider/request-types";
import { Schemas$ProviderVerifyAccessTokenOutput } from "calcom_ts/types/provider-verify-access-token-output";
import { Schemas$ProviderVerifyClientOutput } from "calcom_ts/types/provider-verify-client-output";

export class ProviderClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Verify an access token
   *
   * GET /v2/provider/{clientId}/access-token
   */
  verifyToken(
    request: requests.VerifyTokenRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ProviderVerifyAccessTokenOutput> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/provider/${request.clientId}/access-token`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$ProviderVerifyAccessTokenOutput.in,
      opts,
    });
  }
  /**
   * Get a provider
   *
   * GET /v2/provider/{clientId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ProviderVerifyClientOutput> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/provider/${request.clientId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$ProviderVerifyClientOutput.in,
      opts,
    });
  }
}
