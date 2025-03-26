import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "calcom_ts/core";
import { ForceRefreshClient } from "calcom_ts/resources/oauth-clients/users/force-refresh";
import * as requests from "calcom_ts/resources/oauth-clients/users/request-types";
import { Schemas$CreateManagedUserInput } from "calcom_ts/types/create-managed-user-input";
import { Schemas$CreateManagedUserOutput } from "calcom_ts/types/create-managed-user-output";
import { Schemas$GetManagedUserOutput } from "calcom_ts/types/get-managed-user-output";
import { Schemas$GetManagedUsersOutput } from "calcom_ts/types/get-managed-users-output";
import { Schemas$UpdateManagedUserInput } from "calcom_ts/types/update-managed-user-input";
import * as z from "zod";

export class UsersClient extends CoreResourceClient {
  forceRefresh: ForceRefreshClient;

  constructor(client: CoreClient) {
    super(client);

    this.forceRefresh = new ForceRefreshClient(this._client);
  }
  /**
   * Create a managed user
   *
   * POST /v2/oauth-clients/{clientId}/users
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreateManagedUserOutput> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/oauth-clients/${request.clientId}/users`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$CreateManagedUserInput.out.parse(request),
      responseSchema: Schemas$CreateManagedUserOutput.in,
      opts,
    });
  }
  /**
   * Update a managed user
   *
   * PATCH /v2/oauth-clients/{clientId}/users/{userId}
   */
  patch(
    request: requests.PatchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetManagedUserOutput> {
    return this._client.makeRequest({
      method: "patch",
      path: `/v2/oauth-clients/${request.clientId}/users/${request.userId}`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$UpdateManagedUserInput.out.parse(request),
      responseSchema: Schemas$GetManagedUserOutput.in,
      opts,
    });
  }
  /**
   * Get a managed user
   *
   * GET /v2/oauth-clients/{clientId}/users/{userId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetManagedUserOutput> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/oauth-clients/${request.clientId}/users/${request.userId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$GetManagedUserOutput.in,
      opts,
    });
  }
  /**
   * Get all managed users
   *
   * GET /v2/oauth-clients/{clientId}/users
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetManagedUsersOutput> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/oauth-clients/${request.clientId}/users`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "emails",
          value: z.array(z.string()).optional().parse(request.emails),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "limit",
          value: z.number().optional().parse(request.limit),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "offset",
          value: z.number().optional().parse(request.offset),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: Schemas$GetManagedUsersOutput.in,
      opts,
    });
  }
  /**
   * Delete a managed user
   *
   * DELETE /v2/oauth-clients/{clientId}/users/{userId}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetManagedUserOutput> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/oauth-clients/${request.clientId}/users/${request.userId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$GetManagedUserOutput.in,
      opts,
    });
  }
}
