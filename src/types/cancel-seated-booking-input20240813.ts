import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CancelSeatedBookingInput20240813
 */
export type CancelSeatedBookingInput20240813 = {
  /**
   * Uid of the specific seat within booking.
   */
  seatUid: string;
};

/**
 * @internal
 * CancelSeatedBookingInput20240813 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CancelSeatedBookingInput20240813 = {
  seatUid: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CancelSeatedBookingInput20240813
 */
const SchemaIn$CancelSeatedBookingInput20240813: z.ZodType<
  CancelSeatedBookingInput20240813, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    seatUid: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      seatUid: "seatUid",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CancelSeatedBookingInput20240813
 */
const SchemaOut$CancelSeatedBookingInput20240813: z.ZodType<
  External$CancelSeatedBookingInput20240813, // output type of this zod object
  z.ZodTypeDef,
  CancelSeatedBookingInput20240813 // the object to be transformed
> = z
  .object({
    seatUid: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      seatUid: "seatUid",
    });
  });

export const Schemas$CancelSeatedBookingInput20240813 = {
  in: SchemaIn$CancelSeatedBookingInput20240813,
  out: SchemaOut$CancelSeatedBookingInput20240813,
};
