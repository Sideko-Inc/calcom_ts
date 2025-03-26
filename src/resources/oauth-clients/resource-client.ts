import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "calcom_ts/core";
import { ManagedUsersClient } from "calcom_ts/resources/oauth-clients/managed-users";
import * as requests from "calcom_ts/resources/oauth-clients/request-types";
import { UsersClient } from "calcom_ts/resources/oauth-clients/users";
import { WebhooksClient } from "calcom_ts/resources/oauth-clients/webhooks";
import { Schemas$CreateOAuthClientInput } from "calcom_ts/types/create-o-auth-client-input";
import { Schemas$CreateOAuthClientResponseDto } from "calcom_ts/types/create-o-auth-client-response-dto";
import { Schemas$GetOAuthClientResponseDto } from "calcom_ts/types/get-o-auth-client-response-dto";
import { Schemas$GetOAuthClientsResponseDto } from "calcom_ts/types/get-o-auth-clients-response-dto";
import { Schemas$UpdateOAuthClientInput } from "calcom_ts/types/update-o-auth-client-input";

export class OauthClientsClient extends CoreResourceClient {
  users: UsersClient;
  webhooks: WebhooksClient;
  managedUsers: ManagedUsersClient;

  constructor(client: CoreClient) {
    super(client);

    this.users = new UsersClient(this._client);
    this.webhooks = new WebhooksClient(this._client);
    this.managedUsers = new ManagedUsersClient(this._client);
  }
  /**
   * POST /v2/oauth-clients
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreateOAuthClientResponseDto> {
    return this._client.makeRequest({
      method: "post",
      path: "/v2/oauth-clients",
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$CreateOAuthClientInput.out.parse(request),
      responseSchema: Schemas$CreateOAuthClientResponseDto.in,
      opts,
    });
  }
  /**
   * PATCH /v2/oauth-clients/{clientId}
   */
  patch(
    request: requests.PatchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetOAuthClientResponseDto> {
    return this._client.makeRequest({
      method: "patch",
      path: `/v2/oauth-clients/${request.clientId}`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$UpdateOAuthClientInput.out.parse(request),
      responseSchema: Schemas$GetOAuthClientResponseDto.in,
      opts,
    });
  }
  /**
   * GET /v2/oauth-clients/{clientId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetOAuthClientResponseDto> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/oauth-clients/${request.clientId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$GetOAuthClientResponseDto.in,
      opts,
    });
  }
  /**
   * GET /v2/oauth-clients
   */
  list(opts?: RequestOptions): ApiPromise<types.GetOAuthClientsResponseDto> {
    return this._client.makeRequest({
      method: "get",
      path: "/v2/oauth-clients",
      auth: ["bearerAuth"],
      responseSchema: Schemas$GetOAuthClientsResponseDto.in,
      opts,
    });
  }
  /**
   * DELETE /v2/oauth-clients/{clientId}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetOAuthClientResponseDto> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/oauth-clients/${request.clientId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$GetOAuthClientResponseDto.in,
      opts,
    });
  }
}
