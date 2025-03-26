import {
  External$OrgMembershipOutputDto,
  OrgMembershipOutputDto,
  Schemas$OrgMembershipOutputDto,
} from "./org-membership-output-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateOrgMembershipOutput
 */
export type CreateOrgMembershipOutput = {
  data: OrgMembershipOutputDto;
  status: "error" | "success";
};

/**
 * @internal
 * CreateOrgMembershipOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateOrgMembershipOutput = {
  data: External$OrgMembershipOutputDto;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateOrgMembershipOutput
 */
const SchemaIn$CreateOrgMembershipOutput: z.ZodType<
  CreateOrgMembershipOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$OrgMembershipOutputDto.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateOrgMembershipOutput
 */
const SchemaOut$CreateOrgMembershipOutput: z.ZodType<
  External$CreateOrgMembershipOutput, // output type of this zod object
  z.ZodTypeDef,
  CreateOrgMembershipOutput // the object to be transformed
> = z
  .object({
    data: Schemas$OrgMembershipOutputDto.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$CreateOrgMembershipOutput = {
  in: SchemaIn$CreateOrgMembershipOutput,
  out: SchemaOut$CreateOrgMembershipOutput,
};
