import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "calcom_ts/core";
import { BookingsClient } from "calcom_ts/resources/organizations/teams/bookings";
import { EventTypesClient } from "calcom_ts/resources/organizations/teams/event-types";
import { MeClient } from "calcom_ts/resources/organizations/teams/me";
import { MembershipsClient } from "calcom_ts/resources/organizations/teams/memberships";
import * as requests from "calcom_ts/resources/organizations/teams/request-types";
import { RoutingFormsClient } from "calcom_ts/resources/organizations/teams/routing-forms";
import { UsersClient } from "calcom_ts/resources/organizations/teams/users";
import { Schemas$CreateOrgTeamDto } from "calcom_ts/types/create-org-team-dto";
import { Schemas$OrgTeamOutputResponseDto } from "calcom_ts/types/org-team-output-response-dto";
import { Schemas$OrgTeamsOutputResponseDto } from "calcom_ts/types/org-teams-output-response-dto";
import { Schemas$UpdateOrgTeamDto } from "calcom_ts/types/update-org-team-dto";
import * as z from "zod";

export class TeamsClient extends CoreResourceClient {
  eventTypes: EventTypesClient;
  memberships: MembershipsClient;
  me: MeClient;
  bookings: BookingsClient;
  routingForms: RoutingFormsClient;
  users: UsersClient;

  constructor(client: CoreClient) {
    super(client);

    this.eventTypes = new EventTypesClient(this._client);
    this.memberships = new MembershipsClient(this._client);
    this.me = new MeClient(this._client);
    this.bookings = new BookingsClient(this._client);
    this.routingForms = new RoutingFormsClient(this._client);
    this.users = new UsersClient(this._client);
  }
  /**
   * Create a team
   *
   * POST /v2/organizations/{orgId}/teams
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.OrgTeamOutputResponseDto> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/organizations/${request.orgId}/teams`,
      auth: ["bearerAuth"],
      headers: { "x-cal-client-id": request.xCalClientId },
      contentType: "application/json",
      body: Schemas$CreateOrgTeamDto.out.parse(request),
      responseSchema: Schemas$OrgTeamOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Update a team
   *
   * PATCH /v2/organizations/{orgId}/teams/{teamId}
   */
  patch(
    request: requests.PatchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.OrgTeamOutputResponseDto> {
    return this._client.makeRequest({
      method: "patch",
      path: `/v2/organizations/${request.orgId}/teams/${request.teamId}`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$UpdateOrgTeamDto.out.parse(request),
      responseSchema: Schemas$OrgTeamOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Get a team
   *
   * GET /v2/organizations/{orgId}/teams/{teamId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.OrgTeamOutputResponseDto> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/organizations/${request.orgId}/teams/${request.teamId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$OrgTeamOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Get all teams
   *
   * GET /v2/organizations/{orgId}/teams
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.OrgTeamsOutputResponseDto> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/organizations/${request.orgId}/teams`,
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
      responseSchema: Schemas$OrgTeamsOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Delete a team
   *
   * DELETE /v2/organizations/{orgId}/teams/{teamId}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.OrgTeamOutputResponseDto> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/organizations/${request.orgId}/teams/${request.teamId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$OrgTeamOutputResponseDto.in,
      opts,
    });
  }
}
