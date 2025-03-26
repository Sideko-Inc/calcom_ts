import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/event-types/request-types";
import { WebhooksClient } from "calcom_ts/resources/event-types/webhooks";
import { Schemas$CreateEventTypeInput20240614 } from "calcom_ts/types/create-event-type-input20240614";
import { Schemas$CreateEventTypeOutput20240614 } from "calcom_ts/types/create-event-type-output20240614";
import { Schemas$DeleteEventTypeOutput20240614 } from "calcom_ts/types/delete-event-type-output20240614";
import { Schemas$GetEventTypeOutput20240614 } from "calcom_ts/types/get-event-type-output20240614";
import { Schemas$GetEventTypesOutput20240614 } from "calcom_ts/types/get-event-types-output20240614";
import { Schemas$UpdateEventTypeInput20240614 } from "calcom_ts/types/update-event-type-input20240614";
import { Schemas$UpdateEventTypeOutput20240614 } from "calcom_ts/types/update-event-type-output20240614";
import * as z from "zod";

export class EventTypesClient extends CoreResourceClient {
  webhooks: WebhooksClient;

  constructor(client: CoreClient) {
    super(client);

    this.webhooks = new WebhooksClient(this._client);
  }
  /**
   * Create an event type
   *
   * POST /v2/event-types
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreateEventTypeOutput20240614> {
    return this._client.makeRequest({
      method: "post",
      path: "/v2/event-types",
      auth: ["bearerAuth"],
      headers: { "cal-api-version": request.calApiVersion },
      contentType: "application/json",
      body: Schemas$CreateEventTypeInput20240614.out.parse(request),
      responseSchema: Schemas$CreateEventTypeOutput20240614.in,
      opts,
    });
  }
  /**
   * Update an event type
   *
   * PATCH /v2/event-types/{eventTypeId}
   */
  patch(
    request: requests.PatchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.UpdateEventTypeOutput20240614> {
    return this._client.makeRequest({
      method: "patch",
      path: `/v2/event-types/${request.eventTypeId}`,
      auth: ["bearerAuth"],
      headers: { "cal-api-version": request.calApiVersion },
      contentType: "application/json",
      body: Schemas$UpdateEventTypeInput20240614.out.parse(request),
      responseSchema: Schemas$UpdateEventTypeOutput20240614.in,
      opts,
    });
  }
  /**
   * Get an event type
   *
   * GET /v2/event-types/{eventTypeId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetEventTypeOutput20240614> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/event-types/${request.eventTypeId}`,
      auth: ["bearerAuth"],
      headers: { "cal-api-version": request.calApiVersion },
      responseSchema: Schemas$GetEventTypeOutput20240614.in,
      opts,
    });
  }
  /**
   * Get all event types
   *
   * GET /v2/event-types
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetEventTypesOutput20240614> {
    return this._client.makeRequest({
      method: "get",
      path: "/v2/event-types",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "eventSlug",
          value: z.string().optional().parse(request.eventSlug),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "orgId",
          value: z.number().optional().parse(request.orgId),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "orgSlug",
          value: z.string().optional().parse(request.orgSlug),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "username",
          value: z.string().optional().parse(request.username),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "usernames",
          value: z.string().optional().parse(request.usernames),
          style: "form",
          explode: true,
        }),
      ],
      headers: { "cal-api-version": request.calApiVersion },
      responseSchema: Schemas$GetEventTypesOutput20240614.in,
      opts,
    });
  }
  /**
   * Delete an event type
   *
   * DELETE /v2/event-types/{eventTypeId}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeleteEventTypeOutput20240614> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/event-types/${request.eventTypeId}`,
      auth: ["bearerAuth"],
      headers: { "cal-api-version": request.calApiVersion },
      responseSchema: Schemas$DeleteEventTypeOutput20240614.in,
      opts,
    });
  }
}
