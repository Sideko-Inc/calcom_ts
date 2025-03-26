import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "calcom_ts/core";
import { OooClient } from "calcom_ts/resources/organizations/users/ooo";
import * as requests from "calcom_ts/resources/organizations/users/request-types";
import { SchedulesClient } from "calcom_ts/resources/organizations/users/schedules";
import { Schemas$CreateOrganizationUserInput } from "calcom_ts/types/create-organization-user-input";
import { Schemas$GetOrganizationUserOutput } from "calcom_ts/types/get-organization-user-output";
import { Schemas$GetOrganizationUsersResponseDto } from "calcom_ts/types/get-organization-users-response-dto";
import * as z from "zod";

export class UsersClient extends CoreResourceClient {
  ooo: OooClient;
  schedules: SchedulesClient;

  constructor(client: CoreClient) {
    super(client);

    this.ooo = new OooClient(this._client);
    this.schedules = new SchedulesClient(this._client);
  }
  /**
   * Create a user
   *
   * POST /v2/organizations/{orgId}/users
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetOrganizationUserOutput> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/organizations/${request.orgId}/users`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$CreateOrganizationUserInput.out.parse(request),
      responseSchema: Schemas$GetOrganizationUserOutput.in,
      opts,
    });
  }
  /**
   * Update a user
   *
   * PATCH /v2/organizations/{orgId}/users/{userId}
   */
  patch(
    request: requests.PatchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetOrganizationUserOutput> {
    return this._client.makeRequest({
      method: "patch",
      path: `/v2/organizations/${request.orgId}/users/${request.userId}`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: Schemas$GetOrganizationUserOutput.in,
      opts,
    });
  }
  /**
   * Get all users
   *
   * GET /v2/organizations/{orgId}/users
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetOrganizationUsersResponseDto> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/organizations/${request.orgId}/users`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "emails",
          value: z.array(z.string()).optional().parse(request.emails),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "skip",
          value: z.number().optional().parse(request.skip),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "take",
          value: z.number().optional().parse(request.take),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: Schemas$GetOrganizationUsersResponseDto.in,
      opts,
    });
  }
  /**
   * Delete a user
   *
   * DELETE /v2/organizations/{orgId}/users/{userId}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetOrganizationUserOutput> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/organizations/${request.orgId}/users/${request.userId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$GetOrganizationUserOutput.in,
      opts,
    });
  }
}
