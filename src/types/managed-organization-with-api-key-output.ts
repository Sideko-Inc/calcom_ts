import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * ManagedOrganizationWithApiKeyOutput
 */
export type ManagedOrganizationWithApiKeyOutput = {
  apiKey: string;
  id: number;
  metadata?: Record<string, any> | undefined;
  name: string;
};

/**
 * @internal
 * ManagedOrganizationWithApiKeyOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ManagedOrganizationWithApiKeyOutput = {
  apiKey: string;
  id: number;
  metadata?: Record<string, any> | undefined;
  name: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ManagedOrganizationWithApiKeyOutput
 */
const SchemaIn$ManagedOrganizationWithApiKeyOutput: z.ZodType<
  ManagedOrganizationWithApiKeyOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    apiKey: z.string(),
    id: z.number(),
    metadata: z.record(z.string(), z.any()).optional(),
    name: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      apiKey: "apiKey",
      id: "id",
      metadata: "metadata",
      name: "name",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ManagedOrganizationWithApiKeyOutput
 */
const SchemaOut$ManagedOrganizationWithApiKeyOutput: z.ZodType<
  External$ManagedOrganizationWithApiKeyOutput, // output type of this zod object
  z.ZodTypeDef,
  ManagedOrganizationWithApiKeyOutput // the object to be transformed
> = z
  .object({
    apiKey: z.string(),
    id: z.number(),
    metadata: z.record(z.string(), z.any()).optional(),
    name: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      apiKey: "apiKey",
      id: "id",
      metadata: "metadata",
      name: "name",
    });
  });

export const Schemas$ManagedOrganizationWithApiKeyOutput = {
  in: SchemaIn$ManagedOrganizationWithApiKeyOutput,
  out: SchemaOut$ManagedOrganizationWithApiKeyOutput,
};
