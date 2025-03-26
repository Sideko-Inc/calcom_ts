import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * InputAttendeeDefinedLocation20240614
 */
export type InputAttendeeDefinedLocation20240614 = {
  /**
   * only allowed value for type is `attendeeDefined`
   */
  type: string;
};

/**
 * @internal
 * InputAttendeeDefinedLocation20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InputAttendeeDefinedLocation20240614 = {
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InputAttendeeDefinedLocation20240614
 */
const SchemaIn$InputAttendeeDefinedLocation20240614: z.ZodType<
  InputAttendeeDefinedLocation20240614, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InputAttendeeDefinedLocation20240614
 */
const SchemaOut$InputAttendeeDefinedLocation20240614: z.ZodType<
  External$InputAttendeeDefinedLocation20240614, // output type of this zod object
  z.ZodTypeDef,
  InputAttendeeDefinedLocation20240614 // the object to be transformed
> = z
  .object({
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$InputAttendeeDefinedLocation20240614 = {
  in: SchemaIn$InputAttendeeDefinedLocation20240614,
  out: SchemaOut$InputAttendeeDefinedLocation20240614,
};
