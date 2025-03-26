import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * UpdateOrganizationAttributeOptionInput
 */
export type UpdateOrganizationAttributeOptionInput = {
  slug?: string | undefined;
  value?: string | undefined;
};

/**
 * @internal
 * UpdateOrganizationAttributeOptionInput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateOrganizationAttributeOptionInput = {
  slug?: string | undefined;
  value?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateOrganizationAttributeOptionInput
 */
const SchemaIn$UpdateOrganizationAttributeOptionInput: z.ZodType<
  UpdateOrganizationAttributeOptionInput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    slug: z.string().optional(),
    value: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      slug: "slug",
      value: "value",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateOrganizationAttributeOptionInput
 */
const SchemaOut$UpdateOrganizationAttributeOptionInput: z.ZodType<
  External$UpdateOrganizationAttributeOptionInput, // output type of this zod object
  z.ZodTypeDef,
  UpdateOrganizationAttributeOptionInput // the object to be transformed
> = z
  .object({
    slug: z.string().optional(),
    value: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      slug: "slug",
      value: "value",
    });
  });

export const Schemas$UpdateOrganizationAttributeOptionInput = {
  in: SchemaIn$UpdateOrganizationAttributeOptionInput,
  out: SchemaOut$UpdateOrganizationAttributeOptionInput,
};
