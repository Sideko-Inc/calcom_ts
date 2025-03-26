import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/me/request-types";
import { Schemas$GetMeOutput } from "calcom_ts/types/get-me-output";
import { Schemas$UpdateManagedUserInput } from "calcom_ts/types/update-managed-user-input";
import { Schemas$UpdateMeOutput } from "calcom_ts/types/update-me-output";

export class MeClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Update my profile
   *
   * PATCH /v2/me
   */
  patch(
    request: requests.PatchRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.UpdateMeOutput> {
    return this._client.makeRequest({
      method: "patch",
      path: "/v2/me",
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$UpdateManagedUserInput.out.parse(request),
      responseSchema: Schemas$UpdateMeOutput.in,
      opts,
    });
  }
  /**
   * Get my profile
   *
   * GET /v2/me
   */
  get(opts?: RequestOptions): ApiPromise<types.GetMeOutput> {
    return this._client.makeRequest({
      method: "get",
      path: "/v2/me",
      auth: ["bearerAuth"],
      responseSchema: Schemas$GetMeOutput.in,
      opts,
    });
  }
}
