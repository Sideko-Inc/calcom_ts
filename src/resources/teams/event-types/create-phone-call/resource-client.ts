import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/teams/event-types/create-phone-call/request-types";
import { Schemas$CreatePhoneCallInput } from "calcom_ts/types/create-phone-call-input";
import { Schemas$CreatePhoneCallOutput } from "calcom_ts/types/create-phone-call-output";

export class CreatePhoneCallClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Create a phone call
   *
   * POST /v2/teams/{teamId}/event-types/{eventTypeId}/create-phone-call
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreatePhoneCallOutput> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/teams/${request.teamId}/event-types/${request.eventTypeId}/create-phone-call`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$CreatePhoneCallInput.out.parse(request),
      responseSchema: Schemas$CreatePhoneCallOutput.in,
      opts,
    });
  }
}
