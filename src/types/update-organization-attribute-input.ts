import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * UpdateOrganizationAttributeInput
 */
export type UpdateOrganizationAttributeInput = {
  enabled?: boolean | undefined;
  name?: string | undefined;
  slug?: string | undefined;
  type?: ("MULTI_SELECT" | "NUMBER" | "SINGLE_SELECT" | "TEXT") | undefined;
};

/**
 * @internal
 * UpdateOrganizationAttributeInput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateOrganizationAttributeInput = {
  enabled?: boolean | undefined;
  name?: string | undefined;
  slug?: string | undefined;
  type?: ("MULTI_SELECT" | "NUMBER" | "SINGLE_SELECT" | "TEXT") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateOrganizationAttributeInput
 */
const SchemaIn$UpdateOrganizationAttributeInput: z.ZodType<
  UpdateOrganizationAttributeInput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean().optional(),
    name: z.string().optional(),
    slug: z.string().optional(),
    type: z
      .enum(["MULTI_SELECT", "NUMBER", "SINGLE_SELECT", "TEXT"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      name: "name",
      slug: "slug",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateOrganizationAttributeInput
 */
const SchemaOut$UpdateOrganizationAttributeInput: z.ZodType<
  External$UpdateOrganizationAttributeInput, // output type of this zod object
  z.ZodTypeDef,
  UpdateOrganizationAttributeInput // the object to be transformed
> = z
  .object({
    enabled: z.boolean().optional(),
    name: z.string().optional(),
    slug: z.string().optional(),
    type: z
      .enum(["MULTI_SELECT", "NUMBER", "SINGLE_SELECT", "TEXT"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      name: "name",
      slug: "slug",
      type: "type",
    });
  });

export const Schemas$UpdateOrganizationAttributeInput = {
  in: SchemaIn$UpdateOrganizationAttributeInput,
  out: SchemaOut$UpdateOrganizationAttributeInput,
};
