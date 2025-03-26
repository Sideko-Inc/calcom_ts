import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/organizations/teams/users/schedules/request-types";
import { Schemas$GetSchedulesOutput20240611 } from "calcom_ts/types/get-schedules-output20240611";

export class SchedulesClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Get schedules of a team member
   *
   * GET /v2/organizations/{orgId}/teams/{teamId}/users/{userId}/schedules
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetSchedulesOutput20240611> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/organizations/${request.orgId}/teams/${request.teamId}/users/${request.userId}/schedules`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$GetSchedulesOutput20240611.in,
      opts,
    });
  }
}
