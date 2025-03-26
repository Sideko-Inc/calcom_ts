import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/calendars/ics-feed/request-types";
import { Schemas$CreateIcsFeedInputDto } from "calcom_ts/types/create-ics-feed-input-dto";
import { Schemas$CreateIcsFeedOutputResponseDto } from "calcom_ts/types/create-ics-feed-output-response-dto";
import * as z from "zod";

export class IcsFeedClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Save an ICS feed
   *
   * POST /v2/calendars/ics-feed/save
   */
  save(
    request: requests.SaveRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreateIcsFeedOutputResponseDto> {
    return this._client.makeRequest({
      method: "post",
      path: "/v2/calendars/ics-feed/save",
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$CreateIcsFeedInputDto.out.parse(request),
      responseSchema: Schemas$CreateIcsFeedOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Check an ICS feed
   *
   * GET /v2/calendars/ics-feed/check
   */
  check(opts?: RequestOptions): ApiPromise<Record<string, any>> {
    return this._client.makeRequest({
      method: "get",
      path: "/v2/calendars/ics-feed/check",
      auth: ["bearerAuth"],
      responseSchema: z.record(z.string(), z.any()),
      opts,
    });
  }
}
