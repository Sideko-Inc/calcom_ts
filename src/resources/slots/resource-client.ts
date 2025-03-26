import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
  zodRequiredAny,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/slots/request-types";
import { ReservationsClient } from "calcom_ts/resources/slots/reservations";
import { Schemas$SlotsListResponseObj0 } from "calcom_ts/types/slots-list-response-obj0";
import { Schemas$SlotsListResponseObj1 } from "calcom_ts/types/slots-list-response-obj1";
import * as z from "zod";

export class SlotsClient extends CoreResourceClient {
  reservations: ReservationsClient;

  constructor(client: CoreClient) {
    super(client);

    this.reservations = new ReservationsClient(this._client);
  }
  /**
   * Find out when is an event type ready to be booked.
   *
   *
   *       There are 4 ways to get available slots:
   *
   *       1. By event type id. Event type id can be of user and team event types. Example '/v2/slots?eventTypeId=10&start=2050-09-05&end=2050-09-06&timeZone=Europe/Rome'
   *
   *       2. By event type slug + username. Example '/v2/slots?eventTypeSlug=intro&username=bob&start=2050-09-05&end=2050-09-06'
   *
   *       3. By event type slug + username + organization slug when searching within an organization. Example '/v2/slots?organizationSlug=org-slug&eventTypeSlug=intro&username=bob&start=2050-09-05&end=2050-09-06'
   *
   *       4. By usernames only (used for dynamic event type - there is no specific event but you want to know when 2 or more people are available). Example '/v2/slots?usernames=alice,bob&username=bob&organizationSlug=org-slug&start=2050-09-05&end=2050-09-06'. As you see you also need to provide the slug of the organization to which each user in the 'usernames' array belongs.
   *
   *       All of them require "start" and "end" query parameters which define the time range for which available slots should be checked.
   *       Optional parameters are:
   *       - timeZone: Time zone in which the available slots should be returned. Defaults to UTC.
   *       - duration: Only use for event types that allow multiple durations or for dynamic event types. If not passed for multiple duration event types defaults to default duration. For dynamic event types defaults to 30 aka each returned slot is 30 minutes long. So duration=60 means that returned slots will be each 60 minutes long.
   *       - slotFormat: Format of the slots. By default return is an object where each key is date and value is array of slots as string. If you want to get start and end of each slot use "range" as value.
   *
   *
   * GET /v2/slots
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.SlotsListResponseObj0 | types.SlotsListResponseObj1> {
    return this._client.makeRequest({
      method: "get",
      path: "/v2/slots",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "end",
          value: zodRequiredAny.parse(request.end),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "start",
          value: zodRequiredAny.parse(request.start),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "duration",
          value: z.any().optional().parse(request.duration),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "eventTypeId",
          value: z.any().optional().parse(request.eventTypeId),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "eventTypeSlug",
          value: z.any().optional().parse(request.eventTypeSlug),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "slotFormat",
          value: z.any().optional().parse(request.slotFormat),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "timeZone",
          value: z.any().optional().parse(request.timeZone),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "username",
          value: z.any().optional().parse(request.username),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "usernames",
          value: z.any().optional().parse(request.usernames),
          style: "form",
          explode: true,
        }),
      ],
      headers: { "cal-api-version": request.calApiVersion },
      responseSchema: z.union([
        Schemas$SlotsListResponseObj0.in,
        Schemas$SlotsListResponseObj1.in,
      ]),
      opts,
    });
  }
}
