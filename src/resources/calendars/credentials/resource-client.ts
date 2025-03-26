import {
  ApiPromise,
  ApiResponse,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  zodRequiredAny,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/calendars/credentials/request-types";

export class CredentialsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Sync credentials
   *
   * POST /v2/calendars/{calendar}/credentials
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<ApiResponse> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/calendars/${request.calendar}/credentials`,
      auth: ["bearerAuth"],
      responseRaw: true,
      responseSchema: zodRequiredAny,
      opts,
    });
  }
}
