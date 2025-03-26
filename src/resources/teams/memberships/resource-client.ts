import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/teams/memberships/request-types";
import { Schemas$CreateTeamMembershipInput } from "calcom_ts/types/create-team-membership-input";
import { Schemas$CreateTeamMembershipOutput } from "calcom_ts/types/create-team-membership-output";
import { Schemas$DeleteTeamMembershipOutput } from "calcom_ts/types/delete-team-membership-output";
import { Schemas$GetTeamMembershipOutput } from "calcom_ts/types/get-team-membership-output";
import { Schemas$GetTeamMembershipsOutput } from "calcom_ts/types/get-team-memberships-output";
import { Schemas$UpdateTeamMembershipInput } from "calcom_ts/types/update-team-membership-input";
import { Schemas$UpdateTeamMembershipOutput } from "calcom_ts/types/update-team-membership-output";
import * as z from "zod";

export class MembershipsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Create a membership
   *
   * POST /v2/teams/{teamId}/memberships
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreateTeamMembershipOutput> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/teams/${request.teamId}/memberships`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$CreateTeamMembershipInput.out.parse(request),
      responseSchema: Schemas$CreateTeamMembershipOutput.in,
      opts,
    });
  }
  /**
   * Create a membership
   *
   * PATCH /v2/teams/{teamId}/memberships/{membershipId}
   */
  patch(
    request: requests.PatchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.UpdateTeamMembershipOutput> {
    return this._client.makeRequest({
      method: "patch",
      path: `/v2/teams/${request.teamId}/memberships/${request.membershipId}`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$UpdateTeamMembershipInput.out.parse(request),
      responseSchema: Schemas$UpdateTeamMembershipOutput.in,
      opts,
    });
  }
  /**
   * Get a membership
   *
   * GET /v2/teams/{teamId}/memberships/{membershipId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetTeamMembershipOutput> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/teams/${request.teamId}/memberships/${request.membershipId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$GetTeamMembershipOutput.in,
      opts,
    });
  }
  /**
   * Get all memberships
   *
   * GET /v2/teams/{teamId}/memberships
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetTeamMembershipsOutput> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/teams/${request.teamId}/memberships`,
      auth: ["bearerAuth"],
      query: [
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
      responseSchema: Schemas$GetTeamMembershipsOutput.in,
      opts,
    });
  }
  /**
   * Delete a membership
   *
   * DELETE /v2/teams/{teamId}/memberships/{membershipId}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeleteTeamMembershipOutput> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/teams/${request.teamId}/memberships/${request.membershipId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$DeleteTeamMembershipOutput.in,
      opts,
    });
  }
}
