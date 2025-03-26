import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * RescheduleSeatedBookingInput20240813
 */
export type RescheduleSeatedBookingInput20240813 = {
  /**
   * Email of the person who is rescheduling the booking - only needed when rescheduling a booking that requires a confirmation.
   * If event type owner email is provided then rescheduled booking will be automatically confirmed. If attendee email or no email is passed then the event type
   * owner will have to confirm the rescheduled booking.
   */
  rescheduledBy?: string | undefined;
  /**
   * Uid of the specific seat within booking.
   */
  seatUid: string;
  /**
   * Start time in ISO 8601 format for the new booking
   */
  start: string;
};

/**
 * @internal
 * RescheduleSeatedBookingInput20240813 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RescheduleSeatedBookingInput20240813 = {
  rescheduledBy?: string | undefined;
  seatUid: string;
  start: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RescheduleSeatedBookingInput20240813
 */
const SchemaIn$RescheduleSeatedBookingInput20240813: z.ZodType<
  RescheduleSeatedBookingInput20240813, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    rescheduledBy: z.string().optional(),
    seatUid: z.string(),
    start: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      rescheduledBy: "rescheduledBy",
      seatUid: "seatUid",
      start: "start",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RescheduleSeatedBookingInput20240813
 */
const SchemaOut$RescheduleSeatedBookingInput20240813: z.ZodType<
  External$RescheduleSeatedBookingInput20240813, // output type of this zod object
  z.ZodTypeDef,
  RescheduleSeatedBookingInput20240813 // the object to be transformed
> = z
  .object({
    rescheduledBy: z.string().optional(),
    seatUid: z.string(),
    start: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      rescheduledBy: "rescheduledBy",
      seatUid: "seatUid",
      start: "start",
    });
  });

export const Schemas$RescheduleSeatedBookingInput20240813 = {
  in: SchemaIn$RescheduleSeatedBookingInput20240813,
  out: SchemaOut$RescheduleSeatedBookingInput20240813,
};
