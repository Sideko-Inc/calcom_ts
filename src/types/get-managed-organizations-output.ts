import {
  External$ManagedOrganizationOutput,
  ManagedOrganizationOutput,
  Schemas$ManagedOrganizationOutput,
} from "./managed-organization-output";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetManagedOrganizationsOutput
 */
export type GetManagedOrganizationsOutput = {
  data: ManagedOrganizationOutput[];
  status: "error" | "success";
};

/**
 * @internal
 * GetManagedOrganizationsOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetManagedOrganizationsOutput = {
  data: External$ManagedOrganizationOutput[];
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetManagedOrganizationsOutput
 */
const SchemaIn$GetManagedOrganizationsOutput: z.ZodType<
  GetManagedOrganizationsOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$ManagedOrganizationOutput.in),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetManagedOrganizationsOutput
 */
const SchemaOut$GetManagedOrganizationsOutput: z.ZodType<
  External$GetManagedOrganizationsOutput, // output type of this zod object
  z.ZodTypeDef,
  GetManagedOrganizationsOutput // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$ManagedOrganizationOutput.out),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$GetManagedOrganizationsOutput = {
  in: SchemaIn$GetManagedOrganizationsOutput,
  out: SchemaOut$GetManagedOrganizationsOutput,
};
