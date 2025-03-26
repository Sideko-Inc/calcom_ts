import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * ReassignToUserBookingInput20240813
 */
export type ReassignToUserBookingInput20240813 = {
  /**
   * Reason for reassigning the booking
   */
  reason?: string | undefined;
};

/**
 * @internal
 * ReassignToUserBookingInput20240813 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ReassignToUserBookingInput20240813 = {
  reason?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ReassignToUserBookingInput20240813
 */
const SchemaIn$ReassignToUserBookingInput20240813: z.ZodType<
  ReassignToUserBookingInput20240813, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ReassignToUserBookingInput20240813
 */
const SchemaOut$ReassignToUserBookingInput20240813: z.ZodType<
  External$ReassignToUserBookingInput20240813, // output type of this zod object
  z.ZodTypeDef,
  ReassignToUserBookingInput20240813 // the object to be transformed
> = z
  .object({
    reason: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reason: "reason",
    });
  });

export const Schemas$ReassignToUserBookingInput20240813 = {
  in: SchemaIn$ReassignToUserBookingInput20240813,
  out: SchemaOut$ReassignToUserBookingInput20240813,
};
