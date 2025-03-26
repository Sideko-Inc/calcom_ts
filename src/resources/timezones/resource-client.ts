import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "calcom_ts/core";
import * as z from "zod";

export class TimezonesClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Get all timezones
   *
   * GET /v2/timezones
   */
  list(opts?: RequestOptions): ApiPromise<Record<string, any>> {
    return this._client.makeRequest({
      method: "get",
      path: "/v2/timezones",
      auth: ["bearerAuth"],
      responseSchema: z.record(z.string(), z.any()),
      opts,
    });
  }
}
