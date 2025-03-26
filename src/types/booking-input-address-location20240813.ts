import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * BookingInputAddressLocation20240813
 */
export type BookingInputAddressLocation20240813 = {
  /**
   * only allowed value for type is `address` - it refers to address defined by the organizer.
   */
  type: string;
};

/**
 * @internal
 * BookingInputAddressLocation20240813 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BookingInputAddressLocation20240813 = {
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BookingInputAddressLocation20240813
 */
const SchemaIn$BookingInputAddressLocation20240813: z.ZodType<
  BookingInputAddressLocation20240813, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BookingInputAddressLocation20240813
 */
const SchemaOut$BookingInputAddressLocation20240813: z.ZodType<
  External$BookingInputAddressLocation20240813, // output type of this zod object
  z.ZodTypeDef,
  BookingInputAddressLocation20240813 // the object to be transformed
> = z
  .object({
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$BookingInputAddressLocation20240813 = {
  in: SchemaIn$BookingInputAddressLocation20240813,
  out: SchemaOut$BookingInputAddressLocation20240813,
};
