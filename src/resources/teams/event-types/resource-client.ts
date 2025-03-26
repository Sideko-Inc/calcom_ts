import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "calcom_ts/core";
import { CreatePhoneCallClient } from "calcom_ts/resources/teams/event-types/create-phone-call";
import * as requests from "calcom_ts/resources/teams/event-types/request-types";
import { Schemas$CreateTeamEventTypeInput20240614 } from "calcom_ts/types/create-team-event-type-input20240614";
import { Schemas$CreateTeamEventTypeOutput } from "calcom_ts/types/create-team-event-type-output";
import { Schemas$DeleteTeamEventTypeOutput } from "calcom_ts/types/delete-team-event-type-output";
import { Schemas$GetTeamEventTypeOutput } from "calcom_ts/types/get-team-event-type-output";
import { Schemas$GetTeamEventTypesOutput } from "calcom_ts/types/get-team-event-types-output";
import { Schemas$UpdateTeamEventTypeInput20240614 } from "calcom_ts/types/update-team-event-type-input20240614";
import { Schemas$UpdateTeamEventTypeOutput } from "calcom_ts/types/update-team-event-type-output";
import * as z from "zod";

export class EventTypesClient extends CoreResourceClient {
  createPhoneCall: CreatePhoneCallClient;

  constructor(client: CoreClient) {
    super(client);

    this.createPhoneCall = new CreatePhoneCallClient(this._client);
  }
  /**
   * Create an event type
   *
   * POST /v2/teams/{teamId}/event-types
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreateTeamEventTypeOutput> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/teams/${request.teamId}/event-types`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$CreateTeamEventTypeInput20240614.out.parse(request),
      responseSchema: Schemas$CreateTeamEventTypeOutput.in,
      opts,
    });
  }
  /**
   * Update a team event type
   *
   * PATCH /v2/teams/{teamId}/event-types/{eventTypeId}
   */
  patch(
    request: requests.PatchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.UpdateTeamEventTypeOutput> {
    return this._client.makeRequest({
      method: "patch",
      path: `/v2/teams/${request.teamId}/event-types/${request.eventTypeId}`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$UpdateTeamEventTypeInput20240614.out.parse(request),
      responseSchema: Schemas$UpdateTeamEventTypeOutput.in,
      opts,
    });
  }
  /**
   * Get an event type
   *
   * GET /v2/teams/{teamId}/event-types/{eventTypeId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetTeamEventTypeOutput> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/teams/${request.teamId}/event-types/${request.eventTypeId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$GetTeamEventTypeOutput.in,
      opts,
    });
  }
  /**
   * Get a team event type
   *
   * GET /v2/teams/{teamId}/event-types
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetTeamEventTypesOutput> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/teams/${request.teamId}/event-types`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "eventSlug",
          value: z.string().optional().parse(request.eventSlug),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "hostsLimit",
          value: z.number().optional().parse(request.hostsLimit),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: Schemas$GetTeamEventTypesOutput.in,
      opts,
    });
  }
  /**
   * Delete a team event type
   *
   * DELETE /v2/teams/{teamId}/event-types/{eventTypeId}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeleteTeamEventTypeOutput> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/teams/${request.teamId}/event-types/${request.eventTypeId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$DeleteTeamEventTypeOutput.in,
      opts,
    });
  }
}
