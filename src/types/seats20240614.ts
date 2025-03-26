import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * Seats20240614
 */
export type Seats20240614 = {
  /**
   * Number of seats available per time slot
   */
  seatsPerTimeSlot: number;
  /**
   * Show attendee information to other guests
   */
  showAttendeeInfo: boolean;
  /**
   * Display the count of available seats
   */
  showAvailabilityCount: boolean;
};

/**
 * @internal
 * Seats20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Seats20240614 = {
  seatsPerTimeSlot: number;
  showAttendeeInfo: boolean;
  showAvailabilityCount: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Seats20240614
 */
const SchemaIn$Seats20240614: z.ZodType<
  Seats20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    seatsPerTimeSlot: z.number(),
    showAttendeeInfo: z.boolean(),
    showAvailabilityCount: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      seatsPerTimeSlot: "seatsPerTimeSlot",
      showAttendeeInfo: "showAttendeeInfo",
      showAvailabilityCount: "showAvailabilityCount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Seats20240614
 */
const SchemaOut$Seats20240614: z.ZodType<
  External$Seats20240614, // output type of this zod object
  z.ZodTypeDef,
  Seats20240614 // the object to be transformed
> = z
  .object({
    seatsPerTimeSlot: z.number(),
    showAttendeeInfo: z.boolean(),
    showAvailabilityCount: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      seatsPerTimeSlot: "seatsPerTimeSlot",
      showAttendeeInfo: "showAttendeeInfo",
      showAvailabilityCount: "showAvailabilityCount",
    });
  });

export const Schemas$Seats20240614 = {
  in: SchemaIn$Seats20240614,
  out: SchemaOut$Seats20240614,
};
