import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/api-keys/refresh/request-types";
import { Schemas$RefreshApiKeyInput } from "calcom_ts/types/refresh-api-key-input";
import { Schemas$RefreshApiKeyOutput } from "calcom_ts/types/refresh-api-key-output";

export class RefreshClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Refresh API Key
   *
   * Generate a new API key and delete the current one. Provide API key to refresh as a Bearer token in the Authorization header (e.g. "Authorization: Bearer <apiKey>").
   *
   * POST /v2/api-keys/refresh
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.RefreshApiKeyOutput> {
    return this._client.makeRequest({
      method: "post",
      path: "/v2/api-keys/refresh",
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$RefreshApiKeyInput.out.parse(request),
      responseSchema: Schemas$RefreshApiKeyOutput.in,
      opts,
    });
  }
}
