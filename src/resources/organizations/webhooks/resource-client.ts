import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/organizations/webhooks/request-types";
import { Schemas$CreateWebhookInputDto } from "calcom_ts/types/create-webhook-input-dto";
import { Schemas$TeamWebhookOutputResponseDto } from "calcom_ts/types/team-webhook-output-response-dto";
import { Schemas$TeamWebhooksOutputResponseDto } from "calcom_ts/types/team-webhooks-output-response-dto";
import { Schemas$UpdateWebhookInputDto } from "calcom_ts/types/update-webhook-input-dto";
import * as z from "zod";

export class WebhooksClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Create a webhook
   *
   * POST /v2/organizations/{orgId}/webhooks
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TeamWebhookOutputResponseDto> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/organizations/${request.orgId}/webhooks`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$CreateWebhookInputDto.out.parse(request),
      responseSchema: Schemas$TeamWebhookOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Update a webhook
   *
   * PATCH /v2/organizations/{orgId}/webhooks/{webhookId}
   */
  patch(
    request: requests.PatchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TeamWebhookOutputResponseDto> {
    return this._client.makeRequest({
      method: "patch",
      path: `/v2/organizations/${request.orgId}/webhooks/${request.webhookId}`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$UpdateWebhookInputDto.out.parse(request),
      responseSchema: Schemas$TeamWebhookOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Get a webhook
   *
   * GET /v2/organizations/{orgId}/webhooks/{webhookId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TeamWebhookOutputResponseDto> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/organizations/${request.orgId}/webhooks/${request.webhookId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$TeamWebhookOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Get all webhooks
   *
   * GET /v2/organizations/{orgId}/webhooks
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TeamWebhooksOutputResponseDto> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/organizations/${request.orgId}/webhooks`,
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
      responseSchema: Schemas$TeamWebhooksOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Delete a webhook
   *
   * DELETE /v2/organizations/{orgId}/webhooks/{webhookId}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TeamWebhookOutputResponseDto> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/organizations/${request.orgId}/webhooks/${request.webhookId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$TeamWebhookOutputResponseDto.in,
      opts,
    });
  }
}
