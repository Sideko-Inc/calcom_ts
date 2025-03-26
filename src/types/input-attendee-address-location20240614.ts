import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * InputAttendeeAddressLocation20240614
 */
export type InputAttendeeAddressLocation20240614 = {
  /**
   * only allowed value for type is `attendeeAddress`
   */
  type: string;
};

/**
 * @internal
 * InputAttendeeAddressLocation20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InputAttendeeAddressLocation20240614 = {
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InputAttendeeAddressLocation20240614
 */
const SchemaIn$InputAttendeeAddressLocation20240614: z.ZodType<
  InputAttendeeAddressLocation20240614, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InputAttendeeAddressLocation20240614
 */
const SchemaOut$InputAttendeeAddressLocation20240614: z.ZodType<
  External$InputAttendeeAddressLocation20240614, // output type of this zod object
  z.ZodTypeDef,
  InputAttendeeAddressLocation20240614 // the object to be transformed
> = z
  .object({
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$InputAttendeeAddressLocation20240614 = {
  in: SchemaIn$InputAttendeeAddressLocation20240614,
  out: SchemaOut$InputAttendeeAddressLocation20240614,
};
