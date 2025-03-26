import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CancelBookingInput20240813
 */
export type CancelBookingInput20240813 = {
  /**
   * For recurring non-seated booking - if true, cancel booking with the bookingUid of the individual recurrence and all recurrences that come after it.
   */
  cancelSubsequentBookings?: boolean | undefined;
  cancellationReason?: string | undefined;
};

/**
 * @internal
 * CancelBookingInput20240813 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CancelBookingInput20240813 = {
  cancelSubsequentBookings?: boolean | undefined;
  cancellationReason?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CancelBookingInput20240813
 */
const SchemaIn$CancelBookingInput20240813: z.ZodType<
  CancelBookingInput20240813, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cancelSubsequentBookings: z.boolean().optional(),
    cancellationReason: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cancelSubsequentBookings: "cancelSubsequentBookings",
      cancellationReason: "cancellationReason",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CancelBookingInput20240813
 */
const SchemaOut$CancelBookingInput20240813: z.ZodType<
  External$CancelBookingInput20240813, // output type of this zod object
  z.ZodTypeDef,
  CancelBookingInput20240813 // the object to be transformed
> = z
  .object({
    cancelSubsequentBookings: z.boolean().optional(),
    cancellationReason: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cancelSubsequentBookings: "cancelSubsequentBookings",
      cancellationReason: "cancellationReason",
    });
  });

export const Schemas$CancelBookingInput20240813 = {
  in: SchemaIn$CancelBookingInput20240813,
  out: SchemaOut$CancelBookingInput20240813,
};
