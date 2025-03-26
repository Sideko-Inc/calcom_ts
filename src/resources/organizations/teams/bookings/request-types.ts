import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  orgId: number;
  teamId: number;
  /**
   * Filter bookings with start after this date string.
   */
  afterStart?: string | undefined;
  /**
   * Filter bookings by the attendee's email address.
   */
  attendeeEmail?: string | undefined;
  /**
   * Filter bookings by the attendee's name.
   */
  attendeeName?: string | undefined;
  /**
   * Filter bookings with end before this date string.
   */
  beforeEnd?: string | undefined;
  /**
   * Filter bookings by event type id belonging to the team.
   */
  eventTypeId?: string | undefined;
  /**
   * Filter bookings by event type ids belonging to the team. Event type ids must be separated by a comma.
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
   * Filter bookings by status. If you want to filter by multiple statuses, separate them with a comma.
   */
  status?:
    | ("cancelled" | "past" | "recurring" | "unconfirmed" | "upcoming")[]
    | undefined;
  /**
   * The number of items to return
   */
  take?: number | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  orgId: number;
  teamId: number;
  afterStart?: string | undefined;
  attendeeEmail?: string | undefined;
  attendeeName?: string | undefined;
  beforeEnd?: string | undefined;
  eventTypeId?: string | undefined;
  eventTypeIds?: string | undefined;
  skip?: number | undefined;
  sortCreated?: ("asc" | "desc") | undefined;
  sortEnd?: ("asc" | "desc") | undefined;
  sortStart?: ("asc" | "desc") | undefined;
  status?:
    | ("cancelled" | "past" | "recurring" | "unconfirmed" | "upcoming")[]
    | undefined;
  take?: number | undefined;
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
    orgId: z.number(),
    teamId: z.number(),
    afterStart: z.string().optional(),
    attendeeEmail: z.string().optional(),
    attendeeName: z.string().optional(),
    beforeEnd: z.string().optional(),
    eventTypeId: z.string().optional(),
    eventTypeIds: z.string().optional(),
    skip: z.number().optional(),
    sortCreated: z.enum(["asc", "desc"]).optional(),
    sortEnd: z.enum(["asc", "desc"]).optional(),
    sortStart: z.enum(["asc", "desc"]).optional(),
    status: z
      .array(
        z.enum(["cancelled", "past", "recurring", "unconfirmed", "upcoming"]),
      )
      .optional(),
    take: z.number().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      teamId: "teamId",
      afterStart: "afterStart",
      attendeeEmail: "attendeeEmail",
      attendeeName: "attendeeName",
      beforeEnd: "beforeEnd",
      eventTypeId: "eventTypeId",
      eventTypeIds: "eventTypeIds",
      skip: "skip",
      sortCreated: "sortCreated",
      sortEnd: "sortEnd",
      sortStart: "sortStart",
      status: "status",
      take: "take",
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
    orgId: z.number(),
    teamId: z.number(),
    afterStart: z.string().optional(),
    attendeeEmail: z.string().optional(),
    attendeeName: z.string().optional(),
    beforeEnd: z.string().optional(),
    eventTypeId: z.string().optional(),
    eventTypeIds: z.string().optional(),
    skip: z.number().optional(),
    sortCreated: z.enum(["asc", "desc"]).optional(),
    sortEnd: z.enum(["asc", "desc"]).optional(),
    sortStart: z.enum(["asc", "desc"]).optional(),
    status: z
      .array(
        z.enum(["cancelled", "past", "recurring", "unconfirmed", "upcoming"]),
      )
      .optional(),
    take: z.number().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      teamId: "teamId",
      afterStart: "afterStart",
      attendeeEmail: "attendeeEmail",
      attendeeName: "attendeeName",
      beforeEnd: "beforeEnd",
      eventTypeId: "eventTypeId",
      eventTypeIds: "eventTypeIds",
      skip: "skip",
      sortCreated: "sortCreated",
      sortEnd: "sortEnd",
      sortStart: "sortStart",
      status: "status",
      take: "take",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};
