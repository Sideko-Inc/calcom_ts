import {
  CreateOrganizationAttributeOptionInput,
  External$CreateOrganizationAttributeOptionInput,
  Schemas$CreateOrganizationAttributeOptionInput,
} from "./create-organization-attribute-option-input";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateOrganizationAttributeInput
 */
export type CreateOrganizationAttributeInput = {
  enabled?: boolean | undefined;
  name: string;
  options: CreateOrganizationAttributeOptionInput[];
  slug: string;
  type: "MULTI_SELECT" | "NUMBER" | "SINGLE_SELECT" | "TEXT";
};

/**
 * @internal
 * CreateOrganizationAttributeInput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateOrganizationAttributeInput = {
  enabled?: boolean | undefined;
  name: string;
  options: External$CreateOrganizationAttributeOptionInput[];
  slug: string;
  type: "MULTI_SELECT" | "NUMBER" | "SINGLE_SELECT" | "TEXT";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateOrganizationAttributeInput
 */
const SchemaIn$CreateOrganizationAttributeInput: z.ZodType<
  CreateOrganizationAttributeInput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean().optional(),
    name: z.string(),
    options: z.array(Schemas$CreateOrganizationAttributeOptionInput.in),
    slug: z.string(),
    type: z.enum(["MULTI_SELECT", "NUMBER", "SINGLE_SELECT", "TEXT"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      name: "name",
      options: "options",
      slug: "slug",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateOrganizationAttributeInput
 */
const SchemaOut$CreateOrganizationAttributeInput: z.ZodType<
  External$CreateOrganizationAttributeInput, // output type of this zod object
  z.ZodTypeDef,
  CreateOrganizationAttributeInput // the object to be transformed
> = z
  .object({
    enabled: z.boolean().optional(),
    name: z.string(),
    options: z.array(Schemas$CreateOrganizationAttributeOptionInput.out),
    slug: z.string(),
    type: z.enum(["MULTI_SELECT", "NUMBER", "SINGLE_SELECT", "TEXT"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      name: "name",
      options: "options",
      slug: "slug",
      type: "type",
    });
  });

export const Schemas$CreateOrganizationAttributeInput = {
  in: SchemaIn$CreateOrganizationAttributeInput,
  out: SchemaOut$CreateOrganizationAttributeInput,
};
