import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateOrganizationAttributeOptionInput
 */
export type CreateOrganizationAttributeOptionInput = {
  slug: string;
  value: string;
};

/**
 * @internal
 * CreateOrganizationAttributeOptionInput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateOrganizationAttributeOptionInput = {
  slug: string;
  value: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateOrganizationAttributeOptionInput
 */
const SchemaIn$CreateOrganizationAttributeOptionInput: z.ZodType<
  CreateOrganizationAttributeOptionInput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    slug: z.string(),
    value: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      slug: "slug",
      value: "value",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateOrganizationAttributeOptionInput
 */
const SchemaOut$CreateOrganizationAttributeOptionInput: z.ZodType<
  External$CreateOrganizationAttributeOptionInput, // output type of this zod object
  z.ZodTypeDef,
  CreateOrganizationAttributeOptionInput // the object to be transformed
> = z
  .object({
    slug: z.string(),
    value: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      slug: "slug",
      value: "value",
    });
  });

export const Schemas$CreateOrganizationAttributeOptionInput = {
  in: SchemaIn$CreateOrganizationAttributeOptionInput,
  out: SchemaOut$CreateOrganizationAttributeOptionInput,
};
