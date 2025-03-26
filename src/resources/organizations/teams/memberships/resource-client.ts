import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/organizations/teams/memberships/request-types";
import { Schemas$CreateOrgTeamMembershipDto } from "calcom_ts/types/create-org-team-membership-dto";
import { Schemas$OrgTeamMembershipOutputResponseDto } from "calcom_ts/types/org-team-membership-output-response-dto";
import { Schemas$OrgTeamMembershipsOutputResponseDto } from "calcom_ts/types/org-team-memberships-output-response-dto";
import { Schemas$UpdateOrgTeamMembershipDto } from "calcom_ts/types/update-org-team-membership-dto";
import * as z from "zod";

export class MembershipsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Create a membership
   *
   * POST /v2/organizations/{orgId}/teams/{teamId}/memberships
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.OrgTeamMembershipOutputResponseDto> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/organizations/${request.orgId}/teams/${request.teamId}/memberships`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$CreateOrgTeamMembershipDto.out.parse(request),
      responseSchema: Schemas$OrgTeamMembershipOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Update a membership
   *
   * PATCH /v2/organizations/{orgId}/teams/{teamId}/memberships/{membershipId}
   */
  patch(
    request: requests.PatchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.OrgTeamMembershipOutputResponseDto> {
    return this._client.makeRequest({
      method: "patch",
      path: `/v2/organizations/${request.orgId}/teams/${request.teamId}/memberships/${request.membershipId}`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$UpdateOrgTeamMembershipDto.out.parse(request),
      responseSchema: Schemas$OrgTeamMembershipOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Get a membership
   *
   * GET /v2/organizations/{orgId}/teams/{teamId}/memberships/{membershipId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.OrgTeamMembershipOutputResponseDto> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/organizations/${request.orgId}/teams/${request.teamId}/memberships/${request.membershipId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$OrgTeamMembershipOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Get all memberships
   *
   * GET /v2/organizations/{orgId}/teams/{teamId}/memberships
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.OrgTeamMembershipsOutputResponseDto> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/organizations/${request.orgId}/teams/${request.teamId}/memberships`,
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
      responseSchema: Schemas$OrgTeamMembershipsOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Delete a membership
   *
   * DELETE /v2/organizations/{orgId}/teams/{teamId}/memberships/{membershipId}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.OrgTeamMembershipOutputResponseDto> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/organizations/${request.orgId}/teams/${request.teamId}/memberships/${request.membershipId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$OrgTeamMembershipOutputResponseDto.in,
      opts,
    });
  }
}
