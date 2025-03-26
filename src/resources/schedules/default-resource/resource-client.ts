import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/schedules/default-resource/request-types";
import { Schemas$GetDefaultScheduleOutput20240611 } from "calcom_ts/types/get-default-schedule-output20240611";

export class DefaultClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Get default schedule
   *
   * Get the default schedule of the authenticated user.
   *
   * GET /v2/schedules/default
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetDefaultScheduleOutput20240611> {
    return this._client.makeRequest({
      method: "get",
      path: "/v2/schedules/default",
      auth: ["bearerAuth"],
      headers: { "cal-api-version": request.calApiVersion },
      responseSchema: Schemas$GetDefaultScheduleOutput20240611.in,
      opts,
    });
  }
}
