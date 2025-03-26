import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "calcom_ts/core";
import { CheckClient } from "calcom_ts/resources/stripe/check";
import { ConnectClient } from "calcom_ts/resources/stripe/connect";
import * as requests from "calcom_ts/resources/stripe/request-types";
import { Schemas$StripCredentialsSaveOutputResponseDto } from "calcom_ts/types/strip-credentials-save-output-response-dto";
import * as z from "zod";

export class StripeClient extends CoreResourceClient {
  check: CheckClient;
  connect: ConnectClient;

  constructor(client: CoreClient) {
    super(client);

    this.check = new CheckClient(this._client);
    this.connect = new ConnectClient(this._client);
  }
  /**
   * Save stripe credentials
   *
   * GET /v2/stripe/save
   */
  save(
    request: requests.SaveRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.StripCredentialsSaveOutputResponseDto> {
    return this._client.makeRequest({
      method: "get",
      path: "/v2/stripe/save",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "code",
          value: z.string().parse(request.code),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "state",
          value: z.string().parse(request.state),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: Schemas$StripCredentialsSaveOutputResponseDto.in,
      opts,
    });
  }
}
