import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * NameDefaultFieldInput20240614
 */
export type NameDefaultFieldInput20240614 = {
  /**
   * Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&name=bob`,      the name field will be prefilled with this value and disabled.
   */
  disableOnPrefill?: boolean | undefined;
  label: string;
  placeholder: string;
  /**
   * only allowed value for type is `name`. Used for having 1 booking field for both first name and last name.
   */
  type: string;
};

/**
 * @internal
 * NameDefaultFieldInput20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$NameDefaultFieldInput20240614 = {
  disableOnPrefill?: boolean | undefined;
  label: string;
  placeholder: string;
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object NameDefaultFieldInput20240614
 */
const SchemaIn$NameDefaultFieldInput20240614: z.ZodType<
  NameDefaultFieldInput20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    disableOnPrefill: z.boolean().optional(),
    label: z.string(),
    placeholder: z.string(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disableOnPrefill: "disableOnPrefill",
      label: "label",
      placeholder: "placeholder",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$NameDefaultFieldInput20240614
 */
const SchemaOut$NameDefaultFieldInput20240614: z.ZodType<
  External$NameDefaultFieldInput20240614, // output type of this zod object
  z.ZodTypeDef,
  NameDefaultFieldInput20240614 // the object to be transformed
> = z
  .object({
    disableOnPrefill: z.boolean().optional(),
    label: z.string(),
    placeholder: z.string(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disableOnPrefill: "disableOnPrefill",
      label: "label",
      placeholder: "placeholder",
      type: "type",
    });
  });

export const Schemas$NameDefaultFieldInput20240614 = {
  in: SchemaIn$NameDefaultFieldInput20240614,
  out: SchemaOut$NameDefaultFieldInput20240614,
};
