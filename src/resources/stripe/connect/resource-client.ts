import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "calcom_ts/core";
import { Schemas$StripConnectOutputResponseDto } from "calcom_ts/types/strip-connect-output-response-dto";

export class ConnectClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Get stripe connect URL
   *
   * GET /v2/stripe/connect
   */
  redirect(
    opts?: RequestOptions,
  ): ApiPromise<types.StripConnectOutputResponseDto> {
    return this._client.makeRequest({
      method: "get",
      path: "/v2/stripe/connect",
      auth: ["bearerAuth"],
      responseSchema: Schemas$StripConnectOutputResponseDto.in,
      opts,
    });
  }
}
