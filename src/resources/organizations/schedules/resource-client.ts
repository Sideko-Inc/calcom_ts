import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/organizations/schedules/request-types";
import { Schemas$GetSchedulesOutput20240611 } from "calcom_ts/types/get-schedules-output20240611";
import * as z from "zod";

export class SchedulesClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Get all schedules
   *
   * GET /v2/organizations/{orgId}/schedules
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetSchedulesOutput20240611> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/organizations/${request.orgId}/schedules`,
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
      responseSchema: Schemas$GetSchedulesOutput20240611.in,
      opts,
    });
  }
}
