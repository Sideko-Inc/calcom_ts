import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/stripe/check/request-types";
import { Schemas$StripCredentialsCheckOutputResponseDto } from "calcom_ts/types/strip-credentials-check-output-response-dto";

export class CheckClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Check team stripe connection
   *
   * GET /v2/stripe/check/{teamId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.StripCredentialsCheckOutputResponseDto> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/stripe/check/${request.teamId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$StripCredentialsCheckOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Check stripe connection
   *
   * GET /v2/stripe/check
   */
  check(
    opts?: RequestOptions,
  ): ApiPromise<types.StripCredentialsCheckOutputResponseDto> {
    return this._client.makeRequest({
      method: "get",
      path: "/v2/stripe/check",
      auth: ["bearerAuth"],
      responseSchema: Schemas$StripCredentialsCheckOutputResponseDto.in,
      opts,
    });
  }
}
