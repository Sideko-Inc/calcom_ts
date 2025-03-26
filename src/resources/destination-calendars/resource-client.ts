import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/destination-calendars/request-types";
import { Schemas$DestinationCalendarsInputBodyDto } from "calcom_ts/types/destination-calendars-input-body-dto";
import { Schemas$DestinationCalendarsOutputResponseDto } from "calcom_ts/types/destination-calendars-output-response-dto";

export class DestinationCalendarsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Update destination calendars
   *
   * PUT /v2/destination-calendars
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DestinationCalendarsOutputResponseDto> {
    return this._client.makeRequest({
      method: "put",
      path: "/v2/destination-calendars",
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$DestinationCalendarsInputBodyDto.out.parse(request),
      responseSchema: Schemas$DestinationCalendarsOutputResponseDto.in,
      opts,
    });
  }
}
