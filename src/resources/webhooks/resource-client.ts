import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/webhooks/request-types";
import { Schemas$CreateWebhookInputDto } from "calcom_ts/types/create-webhook-input-dto";
import { Schemas$UpdateWebhookInputDto } from "calcom_ts/types/update-webhook-input-dto";
import { Schemas$UserWebhookOutputResponseDto } from "calcom_ts/types/user-webhook-output-response-dto";
import { Schemas$UserWebhooksOutputResponseDto } from "calcom_ts/types/user-webhooks-output-response-dto";
import * as z from "zod";

export class WebhooksClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Create a webhook
   *
   * POST /v2/webhooks
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.UserWebhookOutputResponseDto> {
    return this._client.makeRequest({
      method: "post",
      path: "/v2/webhooks",
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$CreateWebhookInputDto.out.parse(request),
      responseSchema: Schemas$UserWebhookOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Update a webhook
   *
   * PATCH /v2/webhooks/{webhookId}
   */
  patch(
    request: requests.PatchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.UserWebhookOutputResponseDto> {
    return this._client.makeRequest({
      method: "patch",
      path: `/v2/webhooks/${request.webhookId}`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$UpdateWebhookInputDto.out.parse(request),
      responseSchema: Schemas$UserWebhookOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Get a webhook
   *
   * GET /v2/webhooks/{webhookId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.UserWebhookOutputResponseDto> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/webhooks/${request.webhookId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$UserWebhookOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Get all webooks
   *
   * Gets a paginated list of webhooks for the authenticated user.
   *
   * GET /v2/webhooks
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.UserWebhooksOutputResponseDto> {
    return this._client.makeRequest({
      method: "get",
      path: "/v2/webhooks",
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
      responseSchema: Schemas$UserWebhooksOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Delete a webhook
   *
   * DELETE /v2/webhooks/{webhookId}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.UserWebhookOutputResponseDto> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/webhooks/${request.webhookId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$UserWebhookOutputResponseDto.in,
      opts,
    });
  }
}
