import { zodTransform } from "calcom_ts/core";
import {
  Attendee,
  External$Attendee,
  Schemas$Attendee,
} from "calcom_ts/types/attendee";
import {
  CancelBookingInput20240813,
  External$CancelBookingInput20240813,
  Schemas$CancelBookingInput20240813,
} from "calcom_ts/types/cancel-booking-input20240813";
import {
  CancelSeatedBookingInput20240813,
  External$CancelSeatedBookingInput20240813,
  Schemas$CancelSeatedBookingInput20240813,
} from "calcom_ts/types/cancel-seated-booking-input20240813";
import {
  CreateBookingInput20240813,
  External$CreateBookingInput20240813,
  Schemas$CreateBookingInput20240813,
} from "calcom_ts/types/create-booking-input20240813";
import {
  CreateInstantBookingInput20240813,
  External$CreateInstantBookingInput20240813,
  Schemas$CreateInstantBookingInput20240813,
} from "calcom_ts/types/create-instant-booking-input20240813";
import {
  CreateRecurringBookingInput20240813,
  External$CreateRecurringBookingInput20240813,
  Schemas$CreateRecurringBookingInput20240813,
} from "calcom_ts/types/create-recurring-booking-input20240813";
import {
  External$RescheduleBookingInput20240813,
  RescheduleBookingInput20240813,
  Schemas$RescheduleBookingInput20240813,
} from "calcom_ts/types/reschedule-booking-input20240813";
import {
  External$RescheduleSeatedBookingInput20240813,
  RescheduleSeatedBookingInput20240813,
  Schemas$RescheduleSeatedBookingInput20240813,
} from "calcom_ts/types/reschedule-seated-booking-input20240813";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Filter bookings that have been created after this date string.
   */
  afterCreatedAt?: string | undefined;
  /**
   * Filter bookings with start after this date string.
   */
  afterStart?: string | undefined;
  /**
   * Filter bookings that have been updated after this date string.
   */
  afterUpdatedAt?: string | undefined;
  /**
   * Filter bookings by the attendee's email address.
   */
  attendeeEmail?: string | undefined;
  /**
   * Filter bookings by the attendee's name.
   */
  attendeeName?: string | undefined;
  /**
   * Filter bookings that have been created before this date string.
   */
  beforeCreatedAt?: string | undefined;
  /**
   * Filter bookings with end before this date string.
   */
  beforeEnd?: string | undefined;
  /**
   * Filter bookings that have been updated before this date string.
   */
  beforeUpdatedAt?: string | undefined;
  /**
   * Filter bookings by event type id belonging to the user.
   */
  eventTypeId?: string | undefined;
  /**
   * Filter bookings by event type ids belonging to the user. Event type ids must be separated by a comma.
   */
  eventTypeIds?: string | undefined;
  /**
   * The number of items to skip
   */
  skip?: number | undefined;
  /**
   * Sort results by their creation time (when booking was made) in ascending or descending order.
   */
  sortCreated?: ("asc" | "desc") | undefined;
  /**
   * Sort results by their end time in ascending or descending order.
   */
  sortEnd?: ("asc" | "desc") | undefined;
  /**
   * Sort results by their start time in ascending or descending order.
   */
  sortStart?: ("asc" | "desc") | undefined;
  /**
   * Sort results by their updated time (for example when booking status changes) in ascending or descending order.
   */
  sortUpdatedAt?: ("asc" | "desc") | undefined;
  /**
   * Filter bookings by status. If you want to filter by multiple statuses, separate them with a comma.
   */
  status?:
    | ("cancelled" | "past" | "recurring" | "unconfirmed" | "upcoming")[]
    | undefined;
  /**
   * The number of items to return
   */
  take?: number | undefined;
  /**
   * Filter bookings by team id that user is part of
   */
  teamId?: string | undefined;
  /**
   * Filter bookings by team ids that user is part of. Team ids must be separated by a comma.
   */
  teamsIds?: string | undefined;
  /**
   * Must be set to 2024-08-13
   */
  calApiVersion: string;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  afterCreatedAt?: string | undefined;
  afterStart?: string | undefined;
  afterUpdatedAt?: string | undefined;
  attendeeEmail?: string | undefined;
  attendeeName?: string | undefined;
  beforeCreatedAt?: string | undefined;
  beforeEnd?: string | undefined;
  beforeUpdatedAt?: string | undefined;
  eventTypeId?: string | undefined;
  eventTypeIds?: string | undefined;
  skip?: number | undefined;
  sortCreated?: ("asc" | "desc") | undefined;
  sortEnd?: ("asc" | "desc") | undefined;
  sortStart?: ("asc" | "desc") | undefined;
  sortUpdatedAt?: ("asc" | "desc") | undefined;
  status?:
    | ("cancelled" | "past" | "recurring" | "unconfirmed" | "upcoming")[]
    | undefined;
  take?: number | undefined;
  teamId?: string | undefined;
  teamsIds?: string | undefined;
  "cal-api-version": string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    afterCreatedAt: z.string().optional(),
    afterStart: z.string().optional(),
    afterUpdatedAt: z.string().optional(),
    attendeeEmail: z.string().optional(),
    attendeeName: z.string().optional(),
    beforeCreatedAt: z.string().optional(),
    beforeEnd: z.string().optional(),
    beforeUpdatedAt: z.string().optional(),
    eventTypeId: z.string().optional(),
    eventTypeIds: z.string().optional(),
    skip: z.number().optional(),
    sortCreated: z.enum(["asc", "desc"]).optional(),
    sortEnd: z.enum(["asc", "desc"]).optional(),
    sortStart: z.enum(["asc", "desc"]).optional(),
    sortUpdatedAt: z.enum(["asc", "desc"]).optional(),
    status: z
      .array(
        z.enum(["cancelled", "past", "recurring", "unconfirmed", "upcoming"]),
      )
      .optional(),
    take: z.number().optional(),
    teamId: z.string().optional(),
    teamsIds: z.string().optional(),
    "cal-api-version": z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      afterCreatedAt: "afterCreatedAt",
      afterStart: "afterStart",
      afterUpdatedAt: "afterUpdatedAt",
      attendeeEmail: "attendeeEmail",
      attendeeName: "attendeeName",
      beforeCreatedAt: "beforeCreatedAt",
      beforeEnd: "beforeEnd",
      beforeUpdatedAt: "beforeUpdatedAt",
      eventTypeId: "eventTypeId",
      eventTypeIds: "eventTypeIds",
      skip: "skip",
      sortCreated: "sortCreated",
      sortEnd: "sortEnd",
      sortStart: "sortStart",
      sortUpdatedAt: "sortUpdatedAt",
      status: "status",
      take: "take",
      teamId: "teamId",
      teamsIds: "teamsIds",
      "cal-api-version": "calApiVersion",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    afterCreatedAt: z.string().optional(),
    afterStart: z.string().optional(),
    afterUpdatedAt: z.string().optional(),
    attendeeEmail: z.string().optional(),
    attendeeName: z.string().optional(),
    beforeCreatedAt: z.string().optional(),
    beforeEnd: z.string().optional(),
    beforeUpdatedAt: z.string().optional(),
    eventTypeId: z.string().optional(),
    eventTypeIds: z.string().optional(),
    skip: z.number().optional(),
    sortCreated: z.enum(["asc", "desc"]).optional(),
    sortEnd: z.enum(["asc", "desc"]).optional(),
    sortStart: z.enum(["asc", "desc"]).optional(),
    sortUpdatedAt: z.enum(["asc", "desc"]).optional(),
    status: z
      .array(
        z.enum(["cancelled", "past", "recurring", "unconfirmed", "upcoming"]),
      )
      .optional(),
    take: z.number().optional(),
    teamId: z.string().optional(),
    teamsIds: z.string().optional(),
    calApiVersion: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      afterCreatedAt: "afterCreatedAt",
      afterStart: "afterStart",
      afterUpdatedAt: "afterUpdatedAt",
      attendeeEmail: "attendeeEmail",
      attendeeName: "attendeeName",
      beforeCreatedAt: "beforeCreatedAt",
      beforeEnd: "beforeEnd",
      beforeUpdatedAt: "beforeUpdatedAt",
      eventTypeId: "eventTypeId",
      eventTypeIds: "eventTypeIds",
      skip: "skip",
      sortCreated: "sortCreated",
      sortEnd: "sortEnd",
      sortStart: "sortStart",
      sortUpdatedAt: "sortUpdatedAt",
      status: "status",
      take: "take",
      teamId: "teamId",
      teamsIds: "teamsIds",
      calApiVersion: "cal-api-version",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  bookingUid: string;
  /**
   * Must be set to 2024-08-13
   */
  calApiVersion: string;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  bookingUid: string;
  "cal-api-version": string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bookingUid: z.string(),
    "cal-api-version": z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bookingUid: "bookingUid",
      "cal-api-version": "calApiVersion",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    bookingUid: z.string(),
    calApiVersion: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bookingUid: "bookingUid",
      calApiVersion: "cal-api-version",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
  data:
    | CreateBookingInput20240813
    | CreateInstantBookingInput20240813
    | CreateRecurringBookingInput20240813;
  /**
   * Must be set to 2024-08-13
   */
  calApiVersion: string;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  data:
    | External$CreateBookingInput20240813
    | External$CreateInstantBookingInput20240813
    | External$CreateRecurringBookingInput20240813;
  "cal-api-version": string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.union([
      Schemas$CreateBookingInput20240813.in,
      Schemas$CreateInstantBookingInput20240813.in,
      Schemas$CreateRecurringBookingInput20240813.in,
    ]),
    "cal-api-version": z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      "cal-api-version": "calApiVersion",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
> = z
  .object({
    data: z.union([
      Schemas$CreateBookingInput20240813.out,
      Schemas$CreateInstantBookingInput20240813.out,
      Schemas$CreateRecurringBookingInput20240813.out,
    ]),
    calApiVersion: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      calApiVersion: "cal-api-version",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * CancelRequest
 */
export type CancelRequest = {
  data: CancelBookingInput20240813 | CancelSeatedBookingInput20240813;
  bookingUid: string;
  /**
   * Must be set to 2024-08-13
   */
  calApiVersion: string;
};

/**
 * @internal
 * CancelRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CancelRequest = {
  data:
    | External$CancelBookingInput20240813
    | External$CancelSeatedBookingInput20240813;
  bookingUid: string;
  "cal-api-version": string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CancelRequest
 */
const SchemaIn$CancelRequest: z.ZodType<
  CancelRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.union([
      Schemas$CancelBookingInput20240813.in,
      Schemas$CancelSeatedBookingInput20240813.in,
    ]),
    bookingUid: z.string(),
    "cal-api-version": z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      bookingUid: "bookingUid",
      "cal-api-version": "calApiVersion",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CancelRequest
 */
const SchemaOut$CancelRequest: z.ZodType<
  External$CancelRequest, // output type of this zod object
  z.ZodTypeDef,
  CancelRequest // the object to be transformed
> = z
  .object({
    data: z.union([
      Schemas$CancelBookingInput20240813.out,
      Schemas$CancelSeatedBookingInput20240813.out,
    ]),
    bookingUid: z.string(),
    calApiVersion: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      bookingUid: "bookingUid",
      calApiVersion: "cal-api-version",
    });
  });

export const Schemas$CancelRequest = {
  in: SchemaIn$CancelRequest,
  out: SchemaOut$CancelRequest,
};

/**
 * ConfirmRequest
 */
export type ConfirmRequest = {
  bookingUid: string;
  /**
   * Must be set to 2024-08-13
   */
  calApiVersion: string;
};

/**
 * @internal
 * ConfirmRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConfirmRequest = {
  bookingUid: string;
  "cal-api-version": string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConfirmRequest
 */
const SchemaIn$ConfirmRequest: z.ZodType<
  ConfirmRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bookingUid: z.string(),
    "cal-api-version": z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bookingUid: "bookingUid",
      "cal-api-version": "calApiVersion",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConfirmRequest
 */
const SchemaOut$ConfirmRequest: z.ZodType<
  External$ConfirmRequest, // output type of this zod object
  z.ZodTypeDef,
  ConfirmRequest // the object to be transformed
> = z
  .object({
    bookingUid: z.string(),
    calApiVersion: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bookingUid: "bookingUid",
      calApiVersion: "cal-api-version",
    });
  });

export const Schemas$ConfirmRequest = {
  in: SchemaIn$ConfirmRequest,
  out: SchemaOut$ConfirmRequest,
};

/**
 * DeclineRequest
 */
export type DeclineRequest = {
  /**
   * Reason for declining a booking that requires a confirmation
   */
  reason?: string | undefined;
  bookingUid: string;
  /**
   * Must be set to 2024-08-13
   */
  calApiVersion: string;
};

/**
 * @internal
 * DeclineRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeclineRequest = {
  reason?: string | undefined;
  bookingUid: string;
  "cal-api-version": string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeclineRequest
 */
const SchemaIn$DeclineRequest: z.ZodType<
  DeclineRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    reason: z.string().optional(),
    bookingUid: z.string(),
    "cal-api-version": z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reason: "reason",
      bookingUid: "bookingUid",
      "cal-api-version": "calApiVersion",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeclineRequest
 */
const SchemaOut$DeclineRequest: z.ZodType<
  External$DeclineRequest, // output type of this zod object
  z.ZodTypeDef,
  DeclineRequest // the object to be transformed
> = z
  .object({
    reason: z.string().optional(),
    bookingUid: z.string(),
    calApiVersion: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reason: "reason",
      bookingUid: "bookingUid",
      calApiVersion: "cal-api-version",
    });
  });

export const Schemas$DeclineRequest = {
  in: SchemaIn$DeclineRequest,
  out: SchemaOut$DeclineRequest,
};

/**
 * MarkAbsentRequest
 */
export type MarkAbsentRequest = {
  attendees?: Attendee[] | undefined;
  /**
   * Whether the host was absent
   */
  host?: boolean | undefined;
  bookingUid: string;
  /**
   * Must be set to 2024-08-13
   */
  calApiVersion: string;
};

/**
 * @internal
 * MarkAbsentRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$MarkAbsentRequest = {
  attendees?: External$Attendee[] | undefined;
  host?: boolean | undefined;
  bookingUid: string;
  "cal-api-version": string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object MarkAbsentRequest
 */
const SchemaIn$MarkAbsentRequest: z.ZodType<
  MarkAbsentRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    attendees: z.array(Schemas$Attendee.in).optional(),
    host: z.boolean().optional(),
    bookingUid: z.string(),
    "cal-api-version": z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attendees: "attendees",
      host: "host",
      bookingUid: "bookingUid",
      "cal-api-version": "calApiVersion",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$MarkAbsentRequest
 */
const SchemaOut$MarkAbsentRequest: z.ZodType<
  External$MarkAbsentRequest, // output type of this zod object
  z.ZodTypeDef,
  MarkAbsentRequest // the object to be transformed
> = z
  .object({
    attendees: z.array(Schemas$Attendee.out).optional(),
    host: z.boolean().optional(),
    bookingUid: z.string(),
    calApiVersion: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attendees: "attendees",
      host: "host",
      bookingUid: "bookingUid",
      calApiVersion: "cal-api-version",
    });
  });

export const Schemas$MarkAbsentRequest = {
  in: SchemaIn$MarkAbsentRequest,
  out: SchemaOut$MarkAbsentRequest,
};

/**
 * ReassignRequest
 */
export type ReassignRequest = {
  bookingUid: string;
  /**
   * Must be set to 2024-08-13
   */
  calApiVersion: string;
};

/**
 * @internal
 * ReassignRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ReassignRequest = {
  bookingUid: string;
  "cal-api-version": string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ReassignRequest
 */
const SchemaIn$ReassignRequest: z.ZodType<
  ReassignRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bookingUid: z.string(),
    "cal-api-version": z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bookingUid: "bookingUid",
      "cal-api-version": "calApiVersion",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ReassignRequest
 */
const SchemaOut$ReassignRequest: z.ZodType<
  External$ReassignRequest, // output type of this zod object
  z.ZodTypeDef,
  ReassignRequest // the object to be transformed
> = z
  .object({
    bookingUid: z.string(),
    calApiVersion: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bookingUid: "bookingUid",
      calApiVersion: "cal-api-version",
    });
  });

export const Schemas$ReassignRequest = {
  in: SchemaIn$ReassignRequest,
  out: SchemaOut$ReassignRequest,
};

/**
 * ReassignToUserRequest
 */
export type ReassignToUserRequest = {
  /**
   * Reason for reassigning the booking
   */
  reason?: string | undefined;
  bookingUid: string;
  userId: number;
  /**
   * Must be set to 2024-08-13
   */
  calApiVersion: string;
};

/**
 * @internal
 * ReassignToUserRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ReassignToUserRequest = {
  reason?: string | undefined;
  bookingUid: string;
  userId: number;
  "cal-api-version": string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ReassignToUserRequest
 */
const SchemaIn$ReassignToUserRequest: z.ZodType<
  ReassignToUserRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    reason: z.string().optional(),
    bookingUid: z.string(),
    userId: z.number(),
    "cal-api-version": z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reason: "reason",
      bookingUid: "bookingUid",
      userId: "userId",
      "cal-api-version": "calApiVersion",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ReassignToUserRequest
 */
const SchemaOut$ReassignToUserRequest: z.ZodType<
  External$ReassignToUserRequest, // output type of this zod object
  z.ZodTypeDef,
  ReassignToUserRequest // the object to be transformed
> = z
  .object({
    reason: z.string().optional(),
    bookingUid: z.string(),
    userId: z.number(),
    calApiVersion: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reason: "reason",
      bookingUid: "bookingUid",
      userId: "userId",
      calApiVersion: "cal-api-version",
    });
  });

export const Schemas$ReassignToUserRequest = {
  in: SchemaIn$ReassignToUserRequest,
  out: SchemaOut$ReassignToUserRequest,
};

/**
 * RescheduleRequest
 */
export type RescheduleRequest = {
  data: RescheduleBookingInput20240813 | RescheduleSeatedBookingInput20240813;
  bookingUid: string;
  /**
   * Must be set to 2024-08-13
   */
  calApiVersion: string;
};

/**
 * @internal
 * RescheduleRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RescheduleRequest = {
  data:
    | External$RescheduleBookingInput20240813
    | External$RescheduleSeatedBookingInput20240813;
  bookingUid: string;
  "cal-api-version": string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RescheduleRequest
 */
const SchemaIn$RescheduleRequest: z.ZodType<
  RescheduleRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.union([
      Schemas$RescheduleBookingInput20240813.in,
      Schemas$RescheduleSeatedBookingInput20240813.in,
    ]),
    bookingUid: z.string(),
    "cal-api-version": z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      bookingUid: "bookingUid",
      "cal-api-version": "calApiVersion",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RescheduleRequest
 */
const SchemaOut$RescheduleRequest: z.ZodType<
  External$RescheduleRequest, // output type of this zod object
  z.ZodTypeDef,
  RescheduleRequest // the object to be transformed
> = z
  .object({
    data: z.union([
      Schemas$RescheduleBookingInput20240813.out,
      Schemas$RescheduleSeatedBookingInput20240813.out,
    ]),
    bookingUid: z.string(),
    calApiVersion: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      bookingUid: "bookingUid",
      calApiVersion: "cal-api-version",
    });
  });

export const Schemas$RescheduleRequest = {
  in: SchemaIn$RescheduleRequest,
  out: SchemaOut$RescheduleRequest,
};
