import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * ManagedOrganizationOutput
 */
export type ManagedOrganizationOutput = {
  id: number;
  metadata?: Record<string, any> | undefined;
  name: string;
};

/**
 * @internal
 * ManagedOrganizationOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ManagedOrganizationOutput = {
  id: number;
  metadata?: Record<string, any> | undefined;
  name: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ManagedOrganizationOutput
 */
const SchemaIn$ManagedOrganizationOutput: z.ZodType<
  ManagedOrganizationOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    id: z.number(),
    metadata: z.record(z.string(), z.any()).optional(),
    name: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      metadata: "metadata",
      name: "name",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ManagedOrganizationOutput
 */
const SchemaOut$ManagedOrganizationOutput: z.ZodType<
  External$ManagedOrganizationOutput, // output type of this zod object
  z.ZodTypeDef,
  ManagedOrganizationOutput // the object to be transformed
> = z
  .object({
    id: z.number(),
    metadata: z.record(z.string(), z.any()).optional(),
    name: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      metadata: "metadata",
      name: "name",
    });
  });

export const Schemas$ManagedOrganizationOutput = {
  in: SchemaIn$ManagedOrganizationOutput,
  out: SchemaOut$ManagedOrganizationOutput,
};
