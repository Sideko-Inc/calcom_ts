import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * RescheduleBookingInput20240813
 */
export type RescheduleBookingInput20240813 = {
  /**
   * Email of the person who is rescheduling the booking - only needed when rescheduling a booking that requires a confirmation.
   * If event type owner email is provided then rescheduled booking will be automatically confirmed. If attendee email or no email is passed then the event type
   * owner will have to confirm the rescheduled booking.
   */
  rescheduledBy?: string | undefined;
  /**
   * Reason for rescheduling the booking
   */
  reschedulingReason?: string | undefined;
  /**
   * Start time in ISO 8601 format for the new booking
   */
  start: string;
};

/**
 * @internal
 * RescheduleBookingInput20240813 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RescheduleBookingInput20240813 = {
  rescheduledBy?: string | undefined;
  reschedulingReason?: string | undefined;
  start: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RescheduleBookingInput20240813
 */
const SchemaIn$RescheduleBookingInput20240813: z.ZodType<
  RescheduleBookingInput20240813, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    rescheduledBy: z.string().optional(),
    reschedulingReason: z.string().optional(),
    start: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      rescheduledBy: "rescheduledBy",
      reschedulingReason: "reschedulingReason",
      start: "start",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RescheduleBookingInput20240813
 */
const SchemaOut$RescheduleBookingInput20240813: z.ZodType<
  External$RescheduleBookingInput20240813, // output type of this zod object
  z.ZodTypeDef,
  RescheduleBookingInput20240813 // the object to be transformed
> = z
  .object({
    rescheduledBy: z.string().optional(),
    reschedulingReason: z.string().optional(),
    start: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      rescheduledBy: "rescheduledBy",
      reschedulingReason: "reschedulingReason",
      start: "start",
    });
  });

export const Schemas$RescheduleBookingInput20240813 = {
  in: SchemaIn$RescheduleBookingInput20240813,
  out: SchemaOut$RescheduleBookingInput20240813,
};
