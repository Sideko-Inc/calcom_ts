import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/organizations/teams/routing-forms/responses/request-types";
import { Schemas$GetRoutingFormResponsesOutput } from "calcom_ts/types/get-routing-form-responses-output";

export class ResponsesClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Get routing form responses
   *
   * GET /v2/organizations/{orgId}/teams/{teamId}/routing-forms/{routingFormId}/responses
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetRoutingFormResponsesOutput> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/organizations/${request.orgId}/teams/${request.teamId}/routing-forms/${request.routingFormId}/responses`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$GetRoutingFormResponsesOutput.in,
      opts,
    });
  }
}
