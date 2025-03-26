import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * LocationDefaultFieldOutput20240614
 */
export type LocationDefaultFieldOutput20240614 = {
  /**
   * If true show under event type settings but don't show this booking field in the Booker. If false show in both.
   */
  hidden: boolean;
  /**
   * This property is always true because it's a default field
   */
  isDefault: Record<string, any>;
  required: boolean;
  /**
   * This booking field is returned only if the event type has more than one location. The purpose of this field is to allow the user to select the location where the event will take place.
   */
  slug: string;
  type: string;
};

/**
 * @internal
 * LocationDefaultFieldOutput20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$LocationDefaultFieldOutput20240614 = {
  hidden: boolean;
  isDefault: Record<string, any>;
  required: boolean;
  slug: string;
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object LocationDefaultFieldOutput20240614
 */
const SchemaIn$LocationDefaultFieldOutput20240614: z.ZodType<
  LocationDefaultFieldOutput20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    hidden: z.boolean(),
    isDefault: z.record(z.string(), z.any()),
    required: z.boolean(),
    slug: z.string(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      hidden: "hidden",
      isDefault: "isDefault",
      required: "required",
      slug: "slug",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$LocationDefaultFieldOutput20240614
 */
const SchemaOut$LocationDefaultFieldOutput20240614: z.ZodType<
  External$LocationDefaultFieldOutput20240614, // output type of this zod object
  z.ZodTypeDef,
  LocationDefaultFieldOutput20240614 // the object to be transformed
> = z
  .object({
    hidden: z.boolean(),
    isDefault: z.record(z.string(), z.any()),
    required: z.boolean(),
    slug: z.string(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      hidden: "hidden",
      isDefault: "isDefault",
      required: "required",
      slug: "slug",
      type: "type",
    });
  });

export const Schemas$LocationDefaultFieldOutput20240614 = {
  in: SchemaIn$LocationDefaultFieldOutput20240614,
  out: SchemaOut$LocationDefaultFieldOutput20240614,
};
