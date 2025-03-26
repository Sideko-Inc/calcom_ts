import {
  ApiPromise,
  ApiResponse,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
  zodRequiredAny,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/organizations/users/ooo/request-types";
import { Schemas$CreateOutOfOfficeEntryDto } from "calcom_ts/types/create-out-of-office-entry-dto";
import { Schemas$UpdateOutOfOfficeEntryDto } from "calcom_ts/types/update-out-of-office-entry-dto";
import * as z from "zod";

export class OooClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Create an ooo entry for user
   *
   * POST /v2/organizations/{orgId}/users/{userId}/ooo
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<ApiResponse> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/organizations/${request.orgId}/users/${request.userId}/ooo`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$CreateOutOfOfficeEntryDto.out.parse(request),
      responseRaw: true,
      responseSchema: zodRequiredAny,
      opts,
    });
  }
  /**
   * Update ooo entry of a user
   *
   * PATCH /v2/organizations/{orgId}/users/{userId}/ooo/{oooId}
   */
  patch(
    request: requests.PatchRequest,
    opts?: RequestOptions,
  ): ApiPromise<ApiResponse> {
    return this._client.makeRequest({
      method: "patch",
      path: `/v2/organizations/${request.orgId}/users/${request.userId}/ooo/${request.oooId}`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$UpdateOutOfOfficeEntryDto.out.parse(request),
      responseRaw: true,
      responseSchema: zodRequiredAny,
      opts,
    });
  }
  /**
   * Get all ooo entries of a user
   *
   * GET /v2/organizations/{orgId}/users/{userId}/ooo
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<ApiResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/organizations/${request.orgId}/users/${request.userId}/ooo`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "skip",
          value: z.number().optional().parse(request.skip),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "sortEnd",
          value: z.enum(["asc", "desc"]).optional().parse(request.sortEnd),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "sortStart",
          value: z.enum(["asc", "desc"]).optional().parse(request.sortStart),
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
      responseRaw: true,
      responseSchema: zodRequiredAny,
      opts,
    });
  }
  /**
   * Delete ooo entry of a user
   *
   * DELETE /v2/organizations/{orgId}/users/{userId}/ooo/{oooId}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<ApiResponse> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/organizations/${request.orgId}/users/${request.userId}/ooo/${request.oooId}`,
      auth: ["bearerAuth"],
      responseRaw: true,
      responseSchema: zodRequiredAny,
      opts,
    });
  }
}
