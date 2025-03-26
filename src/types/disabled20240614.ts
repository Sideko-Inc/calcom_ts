import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * Disabled20240614
 */
export type Disabled20240614 = {
  /**
   * Indicates if the option is disabled
   */
  disabled: boolean;
};

/**
 * @internal
 * Disabled20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Disabled20240614 = {
  disabled: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Disabled20240614
 */
const SchemaIn$Disabled20240614: z.ZodType<
  Disabled20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    disabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disabled: "disabled",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Disabled20240614
 */
const SchemaOut$Disabled20240614: z.ZodType<
  External$Disabled20240614, // output type of this zod object
  z.ZodTypeDef,
  Disabled20240614 // the object to be transformed
> = z
  .object({
    disabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disabled: "disabled",
    });
  });

export const Schemas$Disabled20240614 = {
  in: SchemaIn$Disabled20240614,
  out: SchemaOut$Disabled20240614,
};
