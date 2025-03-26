import {
  External$ManagedOrganizationWithApiKeyOutput,
  ManagedOrganizationWithApiKeyOutput,
  Schemas$ManagedOrganizationWithApiKeyOutput,
} from "./managed-organization-with-api-key-output";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateManagedOrganizationOutput
 */
export type CreateManagedOrganizationOutput = {
  data: ManagedOrganizationWithApiKeyOutput;
  status: "error" | "success";
};

/**
 * @internal
 * CreateManagedOrganizationOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateManagedOrganizationOutput = {
  data: External$ManagedOrganizationWithApiKeyOutput;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateManagedOrganizationOutput
 */
const SchemaIn$CreateManagedOrganizationOutput: z.ZodType<
  CreateManagedOrganizationOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$ManagedOrganizationWithApiKeyOutput.in,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateManagedOrganizationOutput
 */
const SchemaOut$CreateManagedOrganizationOutput: z.ZodType<
  External$CreateManagedOrganizationOutput, // output type of this zod object
  z.ZodTypeDef,
  CreateManagedOrganizationOutput // the object to be transformed
> = z
  .object({
    data: Schemas$ManagedOrganizationWithApiKeyOutput.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$CreateManagedOrganizationOutput = {
  in: SchemaIn$CreateManagedOrganizationOutput,
  out: SchemaOut$CreateManagedOrganizationOutput,
};
