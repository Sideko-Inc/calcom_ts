import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/oauth-clients/webhooks/request-types";
import { Schemas$CreateWebhookInputDto } from "calcom_ts/types/create-webhook-input-dto";
import { Schemas$DeleteManyWebhooksOutputResponseDto } from "calcom_ts/types/delete-many-webhooks-output-response-dto";
import { Schemas$OAuthClientWebhookOutputResponseDto } from "calcom_ts/types/o-auth-client-webhook-output-response-dto";
import { Schemas$OAuthClientWebhooksOutputResponseDto } from "calcom_ts/types/o-auth-client-webhooks-output-response-dto";
import { Schemas$UpdateWebhookInputDto } from "calcom_ts/types/update-webhook-input-dto";
import * as z from "zod";

export class WebhooksClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Create a webhook
   *
   * POST /v2/oauth-clients/{clientId}/webhooks
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.OAuthClientWebhookOutputResponseDto> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/oauth-clients/${request.clientId}/webhooks`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$CreateWebhookInputDto.out.parse(request),
      responseSchema: Schemas$OAuthClientWebhookOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Update a webhook
   *
   * PATCH /v2/oauth-clients/{clientId}/webhooks/{webhookId}
   */
  patch(
    request: requests.PatchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.OAuthClientWebhookOutputResponseDto> {
    return this._client.makeRequest({
      method: "patch",
      path: `/v2/oauth-clients/${request.clientId}/webhooks/${request.webhookId}`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$UpdateWebhookInputDto.out.parse(request),
      responseSchema: Schemas$OAuthClientWebhookOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Get a webhook
   *
   * GET /v2/oauth-clients/{clientId}/webhooks/{webhookId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.OAuthClientWebhookOutputResponseDto> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/oauth-clients/${request.clientId}/webhooks/${request.webhookId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$OAuthClientWebhookOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Get all webhooks
   *
   * GET /v2/oauth-clients/{clientId}/webhooks
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.OAuthClientWebhooksOutputResponseDto> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/oauth-clients/${request.clientId}/webhooks`,
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
      responseSchema: Schemas$OAuthClientWebhooksOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Delete a webhook
   *
   * DELETE /v2/oauth-clients/{clientId}/webhooks/{webhookId}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.OAuthClientWebhookOutputResponseDto> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/oauth-clients/${request.clientId}/webhooks/${request.webhookId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$OAuthClientWebhookOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Delete all webhooks
   *
   * DELETE /v2/oauth-clients/{clientId}/webhooks
   */
  deleteAll(
    request: requests.DeleteAllRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeleteManyWebhooksOutputResponseDto> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/oauth-clients/${request.clientId}/webhooks`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$DeleteManyWebhooksOutputResponseDto.in,
      opts,
    });
  }
}
