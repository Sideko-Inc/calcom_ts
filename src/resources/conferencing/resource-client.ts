import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "calcom_ts/core";
import { OauthClient } from "calcom_ts/resources/conferencing/oauth";
import * as requests from "calcom_ts/resources/conferencing/request-types";
import { Schemas$ConferencingAppOutputResponseDto } from "calcom_ts/types/conferencing-app-output-response-dto";
import { Schemas$ConferencingAppsOutputResponseDto } from "calcom_ts/types/conferencing-apps-output-response-dto";
import { Schemas$DisconnectConferencingAppOutputResponseDto } from "calcom_ts/types/disconnect-conferencing-app-output-response-dto";
import { Schemas$GetDefaultConferencingAppOutputResponseDto } from "calcom_ts/types/get-default-conferencing-app-output-response-dto";
import { Schemas$SetDefaultConferencingAppOutputResponseDto } from "calcom_ts/types/set-default-conferencing-app-output-response-dto";

export class ConferencingClient extends CoreResourceClient {
  oauth: OauthClient;

  constructor(client: CoreClient) {
    super(client);

    this.oauth = new OauthClient(this._client);
  }
  /**
   * Set your default conferencing application
   *
   * POST /v2/conferencing/{app}/default
   */
  defaultFn(
    request: requests.DefaultRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.SetDefaultConferencingAppOutputResponseDto> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/conferencing/${request.app}/default`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$SetDefaultConferencingAppOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Connect your conferencing application
   *
   * POST /v2/conferencing/{app}/connect
   */
  connect(
    request: requests.ConnectRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ConferencingAppOutputResponseDto> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/conferencing/${request.app}/connect`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$ConferencingAppOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Get your default conferencing application
   *
   * GET /v2/conferencing/default
   */
  list1(
    opts?: RequestOptions,
  ): ApiPromise<types.GetDefaultConferencingAppOutputResponseDto> {
    return this._client.makeRequest({
      method: "get",
      path: "/v2/conferencing/default",
      auth: ["bearerAuth"],
      responseSchema: Schemas$GetDefaultConferencingAppOutputResponseDto.in,
      opts,
    });
  }
  /**
   * List your conferencing applications
   *
   * GET /v2/conferencing
   */
  list(
    opts?: RequestOptions,
  ): ApiPromise<types.ConferencingAppsOutputResponseDto> {
    return this._client.makeRequest({
      method: "get",
      path: "/v2/conferencing",
      auth: ["bearerAuth"],
      responseSchema: Schemas$ConferencingAppsOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Disconnect your conferencing application
   *
   * DELETE /v2/conferencing/{app}/disconnect
   */
  disconnect(
    request: requests.DisconnectRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DisconnectConferencingAppOutputResponseDto> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/conferencing/${request.app}/disconnect`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$DisconnectConferencingAppOutputResponseDto.in,
      opts,
    });
  }
}
