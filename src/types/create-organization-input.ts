import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateOrganizationInput
 */
export type CreateOrganizationInput = {
  /**
   * For how many days is managed organization api key valid. Defaults to 30 days.
   */
  apiKeyDaysValid?: number | undefined;
  /**
   * If true, organization api key never expires.
   */
  apiKeyNeverExpires?: boolean | undefined;
  /**
   * You can store any additional data you want here.
   * Metadata must have at most 50 keys, each key up to 40 characters.
   * Values can be strings (up to 500 characters), numbers, or booleans.
   */
  metadata?: Record<string, any> | undefined;
  /**
   * Name of the organization
   */
  name: string;
};

/**
 * @internal
 * CreateOrganizationInput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateOrganizationInput = {
  apiKeyDaysValid?: number | undefined;
  apiKeyNeverExpires?: boolean | undefined;
  metadata?: Record<string, any> | undefined;
  name: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateOrganizationInput
 */
const SchemaIn$CreateOrganizationInput: z.ZodType<
  CreateOrganizationInput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    apiKeyDaysValid: z.number().optional(),
    apiKeyNeverExpires: z.boolean().optional(),
    metadata: z.record(z.string(), z.any()).optional(),
    name: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      apiKeyDaysValid: "apiKeyDaysValid",
      apiKeyNeverExpires: "apiKeyNeverExpires",
      metadata: "metadata",
      name: "name",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateOrganizationInput
 */
const SchemaOut$CreateOrganizationInput: z.ZodType<
  External$CreateOrganizationInput, // output type of this zod object
  z.ZodTypeDef,
  CreateOrganizationInput // the object to be transformed
> = z
  .object({
    apiKeyDaysValid: z.number().optional(),
    apiKeyNeverExpires: z.boolean().optional(),
    metadata: z.record(z.string(), z.any()).optional(),
    name: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      apiKeyDaysValid: "apiKeyDaysValid",
      apiKeyNeverExpires: "apiKeyNeverExpires",
      metadata: "metadata",
      name: "name",
    });
  });

export const Schemas$CreateOrganizationInput = {
  in: SchemaIn$CreateOrganizationInput,
  out: SchemaOut$CreateOrganizationInput,
};
