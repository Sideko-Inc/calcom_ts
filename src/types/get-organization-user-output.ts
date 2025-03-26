import {
  External$GetOrgUsersWithProfileOutput,
  GetOrgUsersWithProfileOutput,
  Schemas$GetOrgUsersWithProfileOutput,
} from "./get-org-users-with-profile-output";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetOrganizationUserOutput
 */
export type GetOrganizationUserOutput = {
  data: GetOrgUsersWithProfileOutput;
  status: "error" | "success";
};

/**
 * @internal
 * GetOrganizationUserOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetOrganizationUserOutput = {
  data: External$GetOrgUsersWithProfileOutput;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetOrganizationUserOutput
 */
const SchemaIn$GetOrganizationUserOutput: z.ZodType<
  GetOrganizationUserOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$GetOrgUsersWithProfileOutput.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetOrganizationUserOutput
 */
const SchemaOut$GetOrganizationUserOutput: z.ZodType<
  External$GetOrganizationUserOutput, // output type of this zod object
  z.ZodTypeDef,
  GetOrganizationUserOutput // the object to be transformed
> = z
  .object({
    data: Schemas$GetOrgUsersWithProfileOutput.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$GetOrganizationUserOutput = {
  in: SchemaIn$GetOrganizationUserOutput,
  out: SchemaOut$GetOrganizationUserOutput,
};
