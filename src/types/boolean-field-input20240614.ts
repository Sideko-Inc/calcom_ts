import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * BooleanFieldInput20240614
 */
export type BooleanFieldInput20240614 = {
  disableOnPrefill?: boolean | undefined;
  /**
   * If true show under event type settings but don't show this booking field in the Booker. If false show in both.
   */
  hidden: boolean;
  label: string;
  required: boolean;
  /**
   * Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking
   */
  slug: string;
  /**
   * only allowed value for type is `boolean`
   */
  type: string;
};

/**
 * @internal
 * BooleanFieldInput20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BooleanFieldInput20240614 = {
  disableOnPrefill?: boolean | undefined;
  hidden: boolean;
  label: string;
  required: boolean;
  slug: string;
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BooleanFieldInput20240614
 */
const SchemaIn$BooleanFieldInput20240614: z.ZodType<
  BooleanFieldInput20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    disableOnPrefill: z.boolean().optional(),
    hidden: z.boolean(),
    label: z.string(),
    required: z.boolean(),
    slug: z.string(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disableOnPrefill: "disableOnPrefill",
      hidden: "hidden",
      label: "label",
      required: "required",
      slug: "slug",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BooleanFieldInput20240614
 */
const SchemaOut$BooleanFieldInput20240614: z.ZodType<
  External$BooleanFieldInput20240614, // output type of this zod object
  z.ZodTypeDef,
  BooleanFieldInput20240614 // the object to be transformed
> = z
  .object({
    disableOnPrefill: z.boolean().optional(),
    hidden: z.boolean(),
    label: z.string(),
    required: z.boolean(),
    slug: z.string(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disableOnPrefill: "disableOnPrefill",
      hidden: "hidden",
      label: "label",
      required: "required",
      slug: "slug",
      type: "type",
    });
  });

export const Schemas$BooleanFieldInput20240614 = {
  in: SchemaIn$BooleanFieldInput20240614,
  out: SchemaOut$BooleanFieldInput20240614,
};
