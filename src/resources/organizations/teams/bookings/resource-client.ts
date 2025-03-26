import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/organizations/teams/bookings/request-types";
import { Schemas$GetBookingsOutput20240813 } from "calcom_ts/types/get-bookings-output20240813";
import * as z from "zod";

export class BookingsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Get organization team bookings
   *
   * GET /v2/organizations/{orgId}/teams/{teamId}/bookings
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetBookingsOutput20240813> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/organizations/${request.orgId}/teams/${request.teamId}/bookings`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "afterStart",
          value: z.string().optional().parse(request.afterStart),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "attendeeEmail",
          value: z.string().optional().parse(request.attendeeEmail),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "attendeeName",
          value: z.string().optional().parse(request.attendeeName),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "beforeEnd",
          value: z.string().optional().parse(request.beforeEnd),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "eventTypeId",
          value: z.string().optional().parse(request.eventTypeId),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "eventTypeIds",
          value: z.string().optional().parse(request.eventTypeIds),
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
          name: "sortCreated",
          value: z.enum(["asc", "desc"]).optional().parse(request.sortCreated),
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
          name: "status",
          value: z
            .array(
              z.enum([
                "cancelled",
                "past",
                "recurring",
                "unconfirmed",
                "upcoming",
              ]),
            )
            .optional()
            .parse(request.status),
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
      responseSchema: Schemas$GetBookingsOutput20240813.in,
      opts,
    });
  }
}
