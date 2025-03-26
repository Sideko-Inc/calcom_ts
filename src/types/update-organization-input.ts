import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * UpdateOrganizationInput
 */
export type UpdateOrganizationInput = {
  /**
   * You can store any additional data you want here.
   * Metadata must have at most 50 keys, each key up to 40 characters.
   * Values can be strings (up to 500 characters), numbers, or booleans.
   */
  metadata?: Record<string, any> | undefined;
  /**
   * Name of the organization
   */
  name?: string | undefined;
};

/**
 * @internal
 * UpdateOrganizationInput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateOrganizationInput = {
  metadata?: Record<string, any> | undefined;
  name?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateOrganizationInput
 */
const SchemaIn$UpdateOrganizationInput: z.ZodType<
  UpdateOrganizationInput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    metadata: z.record(z.string(), z.any()).optional(),
    name: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      metadata: "metadata",
      name: "name",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateOrganizationInput
 */
const SchemaOut$UpdateOrganizationInput: z.ZodType<
  External$UpdateOrganizationInput, // output type of this zod object
  z.ZodTypeDef,
  UpdateOrganizationInput // the object to be transformed
> = z
  .object({
    metadata: z.record(z.string(), z.any()).optional(),
    name: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      metadata: "metadata",
      name: "name",
    });
  });

export const Schemas$UpdateOrganizationInput = {
  in: SchemaIn$UpdateOrganizationInput,
  out: SchemaOut$UpdateOrganizationInput,
};
