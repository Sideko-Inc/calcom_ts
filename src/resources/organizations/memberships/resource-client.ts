import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/organizations/memberships/request-types";
import { Schemas$CreateOrgMembershipDto } from "calcom_ts/types/create-org-membership-dto";
import { Schemas$CreateOrgMembershipOutput } from "calcom_ts/types/create-org-membership-output";
import { Schemas$DeleteOrgMembership } from "calcom_ts/types/delete-org-membership";
import { Schemas$GetAllOrgMemberships } from "calcom_ts/types/get-all-org-memberships";
import { Schemas$GetOrgMembership } from "calcom_ts/types/get-org-membership";
import { Schemas$UpdateOrgMembership } from "calcom_ts/types/update-org-membership";
import { Schemas$UpdateOrgMembershipDto } from "calcom_ts/types/update-org-membership-dto";
import * as z from "zod";

export class MembershipsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Create a membership
   *
   * POST /v2/organizations/{orgId}/memberships
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreateOrgMembershipOutput> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/organizations/${request.orgId}/memberships`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$CreateOrgMembershipDto.out.parse(request),
      responseSchema: Schemas$CreateOrgMembershipOutput.in,
      opts,
    });
  }
  /**
   * Update a membership
   *
   * PATCH /v2/organizations/{orgId}/memberships/{membershipId}
   */
  patch(
    request: requests.PatchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.UpdateOrgMembership> {
    return this._client.makeRequest({
      method: "patch",
      path: `/v2/organizations/${request.orgId}/memberships/${request.membershipId}`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$UpdateOrgMembershipDto.out.parse(request),
      responseSchema: Schemas$UpdateOrgMembership.in,
      opts,
    });
  }
  /**
   * Get a membership
   *
   * GET /v2/organizations/{orgId}/memberships/{membershipId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetOrgMembership> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/organizations/${request.orgId}/memberships/${request.membershipId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$GetOrgMembership.in,
      opts,
    });
  }
  /**
   * Get all memberships
   *
   * GET /v2/organizations/{orgId}/memberships
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetAllOrgMemberships> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/organizations/${request.orgId}/memberships`,
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
      responseSchema: Schemas$GetAllOrgMemberships.in,
      opts,
    });
  }
  /**
   * Delete a membership
   *
   * DELETE /v2/organizations/{orgId}/memberships/{membershipId}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeleteOrgMembership> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/organizations/${request.orgId}/memberships/${request.membershipId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$DeleteOrgMembership.in,
      opts,
    });
  }
}
