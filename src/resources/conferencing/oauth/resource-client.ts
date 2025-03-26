import { types } from "calcom_ts";
import {
  ApiPromise,
  ApiResponse,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
  zodRequiredAny,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/conferencing/oauth/request-types";
import { Schemas$GetConferencingAppsOauthUrlResponseDto } from "calcom_ts/types/get-conferencing-apps-oauth-url-response-dto";
import * as z from "zod";

export class OauthClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * conferencing apps oauths callback
   *
   * GET /v2/conferencing/{app}/oauth/callback
   */
  callback(
    request: requests.CallbackRequest,
    opts?: RequestOptions,
  ): ApiPromise<ApiResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/conferencing/${request.app}/oauth/callback`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "code",
          value: z.string().parse(request.code),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "state",
          value: z.string().parse(request.state),
          style: "form",
          explode: true,
        }),
      ],
      responseRaw: true,
      responseSchema: zodRequiredAny,
      opts,
    });
  }
  /**
   * Get OAuth conferencing app auth url
   *
   * GET /v2/conferencing/{app}/oauth/auth-url
   */
  authUrl(
    request: requests.AuthUrlRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetConferencingAppsOauthUrlResponseDto> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/conferencing/${request.app}/oauth/auth-url`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "onErrorReturnTo",
          value: z.string().parse(request.onErrorReturnTo),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "returnTo",
          value: z.string().parse(request.returnTo),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: Schemas$GetConferencingAppsOauthUrlResponseDto.in,
      opts,
    });
  }
}
