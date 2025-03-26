import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * BookingInputAttendeePhoneLocation20240813
 */
export type BookingInputAttendeePhoneLocation20240813 = {
  phone: string;
  /**
   * only allowed value for type is `attendeePhone`
   */
  type: string;
};

/**
 * @internal
 * BookingInputAttendeePhoneLocation20240813 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BookingInputAttendeePhoneLocation20240813 = {
  phone: string;
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BookingInputAttendeePhoneLocation20240813
 */
const SchemaIn$BookingInputAttendeePhoneLocation20240813: z.ZodType<
  BookingInputAttendeePhoneLocation20240813, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    phone: z.string(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      phone: "phone",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BookingInputAttendeePhoneLocation20240813
 */
const SchemaOut$BookingInputAttendeePhoneLocation20240813: z.ZodType<
  External$BookingInputAttendeePhoneLocation20240813, // output type of this zod object
  z.ZodTypeDef,
  BookingInputAttendeePhoneLocation20240813 // the object to be transformed
> = z
  .object({
    phone: z.string(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      phone: "phone",
      type: "type",
    });
  });

export const Schemas$BookingInputAttendeePhoneLocation20240813 = {
  in: SchemaIn$BookingInputAttendeePhoneLocation20240813,
  out: SchemaOut$BookingInputAttendeePhoneLocation20240813,
};
