import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/selected-calendars/request-types";
import { Schemas$SelectedCalendarOutputResponseDto } from "calcom_ts/types/selected-calendar-output-response-dto";
import { Schemas$SelectedCalendarsInputDto } from "calcom_ts/types/selected-calendars-input-dto";
import * as z from "zod";

export class SelectedCalendarsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Add a selected calendar
   *
   * POST /v2/selected-calendars
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.SelectedCalendarOutputResponseDto> {
    return this._client.makeRequest({
      method: "post",
      path: "/v2/selected-calendars",
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$SelectedCalendarsInputDto.out.parse(request),
      responseSchema: Schemas$SelectedCalendarOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Delete a selected calendar
   *
   * DELETE /v2/selected-calendars
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.SelectedCalendarOutputResponseDto> {
    return this._client.makeRequest({
      method: "delete",
      path: "/v2/selected-calendars",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "credentialId",
          value: z.string().parse(request.credentialId),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "externalId",
          value: z.string().parse(request.externalId),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "integration",
          value: z.string().parse(request.integration),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "delegationCredentialId",
          value: z.string().optional().parse(request.delegationCredentialId),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: Schemas$SelectedCalendarOutputResponseDto.in,
      opts,
    });
  }
}
