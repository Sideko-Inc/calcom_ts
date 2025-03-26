import {
  ApiPromise,
  ApiResponse,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
  zodRequiredAny,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/organizations/ooo/request-types";
import * as z from "zod";

export class OooClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Get all OOO entries of org users
   *
   * GET /v2/organizations/{orgId}/ooo
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<ApiResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/organizations/${request.orgId}/ooo`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "email",
          value: z.string().optional().parse(request.email),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "skip",
          value: z.number().optional().parse(request.skip),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "sortEnd",
          value: z.enum(["asc", "desc"]).optional().parse(request.sortEnd),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "sortStart",
          value: z.enum(["asc", "desc"]).optional().parse(request.sortStart),
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
      responseRaw: true,
      responseSchema: zodRequiredAny,
      opts,
    });
  }
}
