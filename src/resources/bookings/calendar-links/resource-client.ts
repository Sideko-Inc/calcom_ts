import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/bookings/calendar-links/request-types";
import { Schemas$CalendarLinksOutput20240813 } from "calcom_ts/types/calendar-links-output20240813";

export class CalendarLinksClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Get 'Add to Calendar' links for a booking
   *
   * Retrieve calendar links for a booking that can be used to add the event to various calendar services. Returns links for Google Calendar, Microsoft Office, Microsoft Outlook, and a downloadable ICS file.
   *
   * GET /v2/bookings/{bookingUid}/calendar-links
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CalendarLinksOutput20240813> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/bookings/${request.bookingUid}/calendar-links`,
      auth: ["bearerAuth"],
      headers: { "cal-api-version": request.calApiVersion },
      responseSchema: Schemas$CalendarLinksOutput20240813.in,
      opts,
    });
  }
}
