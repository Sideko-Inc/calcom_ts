import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DeclineBookingInput20240813
 */
export type DeclineBookingInput20240813 = {
  /**
   * Reason for declining a booking that requires a confirmation
   */
  reason?: string | undefined;
};

/**
 * @internal
 * DeclineBookingInput20240813 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeclineBookingInput20240813 = {
  reason?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeclineBookingInput20240813
 */
const SchemaIn$DeclineBookingInput20240813: z.ZodType<
  DeclineBookingInput20240813, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    reason: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reason: "reason",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeclineBookingInput20240813
 */
const SchemaOut$DeclineBookingInput20240813: z.ZodType<
  External$DeclineBookingInput20240813, // output type of this zod object
  z.ZodTypeDef,
  DeclineBookingInput20240813 // the object to be transformed
> = z
  .object({
    reason: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reason: "reason",
    });
  });

export const Schemas$DeclineBookingInput20240813 = {
  in: SchemaIn$DeclineBookingInput20240813,
  out: SchemaOut$DeclineBookingInput20240813,
};
