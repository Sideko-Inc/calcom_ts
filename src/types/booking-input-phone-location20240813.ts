import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * BookingInputPhoneLocation20240813
 */
export type BookingInputPhoneLocation20240813 = {
  /**
   * only allowed value for type is `phone` - it refers to phone defined by the organizer.
   */
  type: string;
};

/**
 * @internal
 * BookingInputPhoneLocation20240813 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BookingInputPhoneLocation20240813 = {
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BookingInputPhoneLocation20240813
 */
const SchemaIn$BookingInputPhoneLocation20240813: z.ZodType<
  BookingInputPhoneLocation20240813, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BookingInputPhoneLocation20240813
 */
const SchemaOut$BookingInputPhoneLocation20240813: z.ZodType<
  External$BookingInputPhoneLocation20240813, // output type of this zod object
  z.ZodTypeDef,
  BookingInputPhoneLocation20240813 // the object to be transformed
> = z
  .object({
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$BookingInputPhoneLocation20240813 = {
  in: SchemaIn$BookingInputPhoneLocation20240813,
  out: SchemaOut$BookingInputPhoneLocation20240813,
};
