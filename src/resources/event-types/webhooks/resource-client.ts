import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/event-types/webhooks/request-types";
import { Schemas$CreateWebhookInputDto } from "calcom_ts/types/create-webhook-input-dto";
import { Schemas$DeleteManyWebhooksOutputResponseDto } from "calcom_ts/types/delete-many-webhooks-output-response-dto";
import { Schemas$EventTypeWebhookOutputResponseDto } from "calcom_ts/types/event-type-webhook-output-response-dto";
import { Schemas$EventTypeWebhooksOutputResponseDto } from "calcom_ts/types/event-type-webhooks-output-response-dto";
import { Schemas$UpdateWebhookInputDto } from "calcom_ts/types/update-webhook-input-dto";
import * as z from "zod";

export class WebhooksClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Create a webhook
   *
   * POST /v2/event-types/{eventTypeId}/webhooks
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.EventTypeWebhookOutputResponseDto> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/event-types/${request.eventTypeId}/webhooks`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$CreateWebhookInputDto.out.parse(request),
      responseSchema: Schemas$EventTypeWebhookOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Update a webhook
   *
   * PATCH /v2/event-types/{eventTypeId}/webhooks/{webhookId}
   */
  patch(
    request: requests.PatchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.EventTypeWebhookOutputResponseDto> {
    return this._client.makeRequest({
      method: "patch",
      path: `/v2/event-types/${request.eventTypeId}/webhooks/${request.webhookId}`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$UpdateWebhookInputDto.out.parse(request),
      responseSchema: Schemas$EventTypeWebhookOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Get a webhook
   *
   * GET /v2/event-types/{eventTypeId}/webhooks/{webhookId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.EventTypeWebhookOutputResponseDto> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/event-types/${request.eventTypeId}/webhooks/${request.webhookId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$EventTypeWebhookOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Get all webhooks
   *
   * GET /v2/event-types/{eventTypeId}/webhooks
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.EventTypeWebhooksOutputResponseDto> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/event-types/${request.eventTypeId}/webhooks`,
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
      responseSchema: Schemas$EventTypeWebhooksOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Delete a webhook
   *
   * DELETE /v2/event-types/{eventTypeId}/webhooks/{webhookId}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.EventTypeWebhookOutputResponseDto> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/event-types/${request.eventTypeId}/webhooks/${request.webhookId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$EventTypeWebhookOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Delete all webhooks
   *
   * DELETE /v2/event-types/{eventTypeId}/webhooks
   */
  deleteAll(
    request: requests.DeleteAllRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeleteManyWebhooksOutputResponseDto> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/event-types/${request.eventTypeId}/webhooks`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$DeleteManyWebhooksOutputResponseDto.in,
      opts,
    });
  }
}
