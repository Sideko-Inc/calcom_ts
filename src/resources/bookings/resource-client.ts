import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "calcom_ts/core";
import { CalendarLinksClient } from "calcom_ts/resources/bookings/calendar-links";
import * as requests from "calcom_ts/resources/bookings/request-types";
import { Schemas$CancelBookingInput20240813 } from "calcom_ts/types/cancel-booking-input20240813";
import { Schemas$CancelBookingOutput20240813 } from "calcom_ts/types/cancel-booking-output20240813";
import { Schemas$CancelSeatedBookingInput20240813 } from "calcom_ts/types/cancel-seated-booking-input20240813";
import { Schemas$CreateBookingInput20240813 } from "calcom_ts/types/create-booking-input20240813";
import { Schemas$CreateBookingOutput20240813 } from "calcom_ts/types/create-booking-output20240813";
import { Schemas$CreateInstantBookingInput20240813 } from "calcom_ts/types/create-instant-booking-input20240813";
import { Schemas$CreateRecurringBookingInput20240813 } from "calcom_ts/types/create-recurring-booking-input20240813";
import { Schemas$DeclineBookingInput20240813 } from "calcom_ts/types/decline-booking-input20240813";
import { Schemas$GetBookingOutput20240813 } from "calcom_ts/types/get-booking-output20240813";
import { Schemas$GetBookingsOutput20240813 } from "calcom_ts/types/get-bookings-output20240813";
import { Schemas$MarkAbsentBookingInput20240813 } from "calcom_ts/types/mark-absent-booking-input20240813";
import { Schemas$MarkAbsentBookingOutput20240813 } from "calcom_ts/types/mark-absent-booking-output20240813";
import { Schemas$ReassignBookingOutput20240813 } from "calcom_ts/types/reassign-booking-output20240813";
import { Schemas$ReassignToUserBookingInput20240813 } from "calcom_ts/types/reassign-to-user-booking-input20240813";
import { Schemas$RescheduleBookingInput20240813 } from "calcom_ts/types/reschedule-booking-input20240813";
import { Schemas$RescheduleBookingOutput20240813 } from "calcom_ts/types/reschedule-booking-output20240813";
import { Schemas$RescheduleSeatedBookingInput20240813 } from "calcom_ts/types/reschedule-seated-booking-input20240813";
import * as z from "zod";

export class BookingsClient extends CoreResourceClient {
  calendarLinks: CalendarLinksClient;

  constructor(client: CoreClient) {
    super(client);

    this.calendarLinks = new CalendarLinksClient(this._client);
  }
  /**
   * Reschedule a booking
   *
   * Reschedule a booking or seated booking
   *
   * POST /v2/bookings/{bookingUid}/reschedule
   */
  reschedule(
    request: requests.RescheduleRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.RescheduleBookingOutput20240813> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/bookings/${request.bookingUid}/reschedule`,
      auth: ["bearerAuth"],
      headers: { "cal-api-version": request.calApiVersion },
      contentType: "application/json",
      body: z
        .union([
          Schemas$RescheduleBookingInput20240813.out,
          Schemas$RescheduleSeatedBookingInput20240813.out,
        ])
        .parse(request.data),
      responseSchema: Schemas$RescheduleBookingOutput20240813.in,
      opts,
    });
  }
  /**
   * Reassign a booking to a specific user
   *
   * POST /v2/bookings/{bookingUid}/reassign/{userId}
   */
  reassignToUser(
    request: requests.ReassignToUserRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ReassignBookingOutput20240813> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/bookings/${request.bookingUid}/reassign/${request.userId}`,
      auth: ["bearerAuth"],
      headers: { "cal-api-version": request.calApiVersion },
      contentType: "application/json",
      body: Schemas$ReassignToUserBookingInput20240813.out.parse(request),
      responseSchema: Schemas$ReassignBookingOutput20240813.in,
      opts,
    });
  }
  /**
   * Automatically reassign booking to a new host
   *
   * POST /v2/bookings/{bookingUid}/reassign
   */
  reassign(
    request: requests.ReassignRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ReassignBookingOutput20240813> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/bookings/${request.bookingUid}/reassign`,
      auth: ["bearerAuth"],
      headers: { "cal-api-version": request.calApiVersion },
      responseSchema: Schemas$ReassignBookingOutput20240813.in,
      opts,
    });
  }
  /**
   * Mark a booking absence
   *
   * POST /v2/bookings/{bookingUid}/mark-absent
   */
  markAbsent(
    request: requests.MarkAbsentRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.MarkAbsentBookingOutput20240813> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/bookings/${request.bookingUid}/mark-absent`,
      auth: ["bearerAuth"],
      headers: { "cal-api-version": request.calApiVersion },
      contentType: "application/json",
      body: Schemas$MarkAbsentBookingInput20240813.out.parse(request),
      responseSchema: Schemas$MarkAbsentBookingOutput20240813.in,
      opts,
    });
  }
  /**
   * Decline booking that requires a confirmation
   *
   * POST /v2/bookings/{bookingUid}/decline
   */
  decline(
    request: requests.DeclineRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetBookingOutput20240813> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/bookings/${request.bookingUid}/decline`,
      auth: ["bearerAuth"],
      headers: { "cal-api-version": request.calApiVersion },
      contentType: "application/json",
      body: Schemas$DeclineBookingInput20240813.out.parse(request),
      responseSchema: Schemas$GetBookingOutput20240813.in,
      opts,
    });
  }
  /**
   * Confirm booking that requires a confirmation
   *
   * POST /v2/bookings/{bookingUid}/confirm
   */
  confirm(
    request: requests.ConfirmRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetBookingOutput20240813> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/bookings/${request.bookingUid}/confirm`,
      auth: ["bearerAuth"],
      headers: { "cal-api-version": request.calApiVersion },
      responseSchema: Schemas$GetBookingOutput20240813.in,
      opts,
    });
  }
  /**
   * Cancel a booking
   *
   * :bookingUid can be :bookingUid of an usual booking, individual recurrence or recurring booking to cancel all recurrences.
   *     For seated bookings to cancel one individual booking provide :bookingUid and :seatUid in the request body. For recurring seated bookings it is not possible to cancel all of them with 1 call
   *     like with non-seated recurring bookings by providing recurring bookind uid - you have to cancel each recurrence booking by its bookingUid + seatUid.
   *
   * POST /v2/bookings/{bookingUid}/cancel
   */
  cancel(
    request: requests.CancelRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CancelBookingOutput20240813> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/bookings/${request.bookingUid}/cancel`,
      auth: ["bearerAuth"],
      headers: { "cal-api-version": request.calApiVersion },
      contentType: "application/json",
      body: z
        .union([
          Schemas$CancelBookingInput20240813.out,
          Schemas$CancelSeatedBookingInput20240813.out,
        ])
        .parse(request.data),
      responseSchema: Schemas$CancelBookingOutput20240813.in,
      opts,
    });
  }
  /**
   * Create a booking
   *
   *
   *       POST /v2/bookings is used to create regular bookings, recurring bookings and instant bookings. The request bodies for all 3 are almost the same except:
   *       If eventTypeId in the request body is id of a regular event, then regular booking is created.
   *
   *       If it is an id of a recurring event type, then recurring booking is created.
   *
   *       Meaning that the request bodies are equal but the outcome depends on what kind of event type it is with the goal of making it as seamless for developers as possible.
   *
   *       For team event types it is possible to create instant meeting. To do that just pass `"instant": true` to the request body.
   *
   *       The start needs to be in UTC aka if the timezone is GMT+2 in Rome and meeting should start at 11, then UTC time should have hours 09:00 aka without time zone.
   *
   *
   * POST /v2/bookings
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreateBookingOutput20240813> {
    return this._client.makeRequest({
      method: "post",
      path: "/v2/bookings",
      auth: ["bearerAuth"],
      headers: { "cal-api-version": request.calApiVersion },
      contentType: "application/json",
      body: z
        .union([
          Schemas$CreateBookingInput20240813.out,
          Schemas$CreateInstantBookingInput20240813.out,
          Schemas$CreateRecurringBookingInput20240813.out,
        ])
        .parse(request.data),
      responseSchema: Schemas$CreateBookingOutput20240813.in,
      opts,
    });
  }
  /**
   * Get a booking
   *
   * `:bookingUid` can be
   *
   *       1. uid of a normal booking
   *
   *       2. uid of one of the recurring booking recurrences
   *
   *       3. uid of recurring booking which will return an array of all recurring booking recurrences (stored as recurringBookingUid on one of the individual recurrences).
   *
   * GET /v2/bookings/{bookingUid}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetBookingOutput20240813> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/bookings/${request.bookingUid}`,
      auth: ["bearerAuth"],
      headers: { "cal-api-version": request.calApiVersion },
      responseSchema: Schemas$GetBookingOutput20240813.in,
      opts,
    });
  }
  /**
   * Get all bookings
   *
   * GET /v2/bookings
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetBookingsOutput20240813> {
    return this._client.makeRequest({
      method: "get",
      path: "/v2/bookings",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "afterCreatedAt",
          value: z.string().optional().parse(request.afterCreatedAt),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "afterStart",
          value: z.string().optional().parse(request.afterStart),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "afterUpdatedAt",
          value: z.string().optional().parse(request.afterUpdatedAt),
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
          name: "beforeCreatedAt",
          value: z.string().optional().parse(request.beforeCreatedAt),
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
          name: "beforeUpdatedAt",
          value: z.string().optional().parse(request.beforeUpdatedAt),
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
          name: "sortUpdatedAt",
          value: z
            .enum(["asc", "desc"])
            .optional()
            .parse(request.sortUpdatedAt),
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
        encodeQueryParam({
          name: "teamId",
          value: z.string().optional().parse(request.teamId),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "teamsIds",
          value: z.string().optional().parse(request.teamsIds),
          style: "form",
          explode: true,
        }),
      ],
      headers: { "cal-api-version": request.calApiVersion },
      responseSchema: Schemas$GetBookingsOutput20240813.in,
      opts,
    });
  }
}
