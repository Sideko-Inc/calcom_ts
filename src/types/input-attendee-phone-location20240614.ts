import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * InputAttendeePhoneLocation20240614
 */
export type InputAttendeePhoneLocation20240614 = {
  /**
   * only allowed value for type is `attendeePhone`
   */
  type: string;
};

/**
 * @internal
 * InputAttendeePhoneLocation20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InputAttendeePhoneLocation20240614 = {
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InputAttendeePhoneLocation20240614
 */
const SchemaIn$InputAttendeePhoneLocation20240614: z.ZodType<
  InputAttendeePhoneLocation20240614, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InputAttendeePhoneLocation20240614
 */
const SchemaOut$InputAttendeePhoneLocation20240614: z.ZodType<
  External$InputAttendeePhoneLocation20240614, // output type of this zod object
  z.ZodTypeDef,
  InputAttendeePhoneLocation20240614 // the object to be transformed
> = z
  .object({
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$InputAttendeePhoneLocation20240614 = {
  in: SchemaIn$InputAttendeePhoneLocation20240614,
  out: SchemaOut$InputAttendeePhoneLocation20240614,
};
