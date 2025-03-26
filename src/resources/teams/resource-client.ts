import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "calcom_ts/core";
import { EventTypesClient } from "calcom_ts/resources/teams/event-types";
import { MembershipsClient } from "calcom_ts/resources/teams/memberships";
import * as requests from "calcom_ts/resources/teams/request-types";
import { Schemas$CreateTeamInput } from "calcom_ts/types/create-team-input";
import { Schemas$CreateTeamOutput } from "calcom_ts/types/create-team-output";
import { Schemas$GetTeamOutput } from "calcom_ts/types/get-team-output";
import { Schemas$GetTeamsOutput } from "calcom_ts/types/get-teams-output";
import { Schemas$OrgTeamOutputResponseDto } from "calcom_ts/types/org-team-output-response-dto";
import { Schemas$UpdateOrgTeamDto } from "calcom_ts/types/update-org-team-dto";
import { Schemas$UpdateTeamOutput } from "calcom_ts/types/update-team-output";

export class TeamsClient extends CoreResourceClient {
  eventTypes: EventTypesClient;
  memberships: MembershipsClient;

  constructor(client: CoreClient) {
    super(client);

    this.eventTypes = new EventTypesClient(this._client);
    this.memberships = new MembershipsClient(this._client);
  }
  /**
   * Create a team
   *
   * POST /v2/teams
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreateTeamOutput> {
    return this._client.makeRequest({
      method: "post",
      path: "/v2/teams",
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$CreateTeamInput.out.parse(request),
      responseSchema: Schemas$CreateTeamOutput.in,
      opts,
    });
  }
  /**
   * Update a team
   *
   * PATCH /v2/teams/{teamId}
   */
  patch(
    request: requests.PatchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.UpdateTeamOutput> {
    return this._client.makeRequest({
      method: "patch",
      path: `/v2/teams/${request.teamId}`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$UpdateOrgTeamDto.out.parse(request),
      responseSchema: Schemas$UpdateTeamOutput.in,
      opts,
    });
  }
  /**
   * Get a team
   *
   * GET /v2/teams/{teamId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetTeamOutput> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/teams/${request.teamId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$GetTeamOutput.in,
      opts,
    });
  }
  /**
   * Get teams
   *
   * GET /v2/teams
   */
  list(opts?: RequestOptions): ApiPromise<types.GetTeamsOutput> {
    return this._client.makeRequest({
      method: "get",
      path: "/v2/teams",
      auth: ["bearerAuth"],
      responseSchema: Schemas$GetTeamsOutput.in,
      opts,
    });
  }
  /**
   * Delete a team
   *
   * DELETE /v2/teams/{teamId}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.OrgTeamOutputResponseDto> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/teams/${request.teamId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$OrgTeamOutputResponseDto.in,
      opts,
    });
  }
}
