import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/oauth-clients/managed-users/request-types";
import { Schemas$GetManagedUsersOutput } from "calcom_ts/types/get-managed-users-output";
import * as z from "zod";

export class ManagedUsersClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * GET /v2/oauth-clients/{clientId}/managed-users
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetManagedUsersOutput> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/oauth-clients/${request.clientId}/managed-users`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "limit",
          value: z.number().optional().parse(request.limit),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "offset",
          value: z.number().optional().parse(request.offset),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: Schemas$GetManagedUsersOutput.in,
      opts,
    });
  }
}
