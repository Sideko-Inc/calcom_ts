import {
  External$ManagedOrganizationOutput,
  ManagedOrganizationOutput,
  Schemas$ManagedOrganizationOutput,
} from "./managed-organization-output";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetManagedOrganizationOutput
 */
export type GetManagedOrganizationOutput = {
  data: ManagedOrganizationOutput;
  status: "error" | "success";
};

/**
 * @internal
 * GetManagedOrganizationOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetManagedOrganizationOutput = {
  data: External$ManagedOrganizationOutput;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetManagedOrganizationOutput
 */
const SchemaIn$GetManagedOrganizationOutput: z.ZodType<
  GetManagedOrganizationOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$ManagedOrganizationOutput.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetManagedOrganizationOutput
 */
const SchemaOut$GetManagedOrganizationOutput: z.ZodType<
  External$GetManagedOrganizationOutput, // output type of this zod object
  z.ZodTypeDef,
  GetManagedOrganizationOutput // the object to be transformed
> = z
  .object({
    data: Schemas$ManagedOrganizationOutput.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$GetManagedOrganizationOutput = {
  in: SchemaIn$GetManagedOrganizationOutput,
  out: SchemaOut$GetManagedOrganizationOutput,
};
