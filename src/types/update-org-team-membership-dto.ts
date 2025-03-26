import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * UpdateOrgTeamMembershipDto
 */
export type UpdateOrgTeamMembershipDto = {
  accepted?: boolean | undefined;
  disableImpersonation?: boolean | undefined;
  role?: ("ADMIN" | "MEMBER" | "OWNER") | undefined;
};

/**
 * @internal
 * UpdateOrgTeamMembershipDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateOrgTeamMembershipDto = {
  accepted?: boolean | undefined;
  disableImpersonation?: boolean | undefined;
  role?: ("ADMIN" | "MEMBER" | "OWNER") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateOrgTeamMembershipDto
 */
const SchemaIn$UpdateOrgTeamMembershipDto: z.ZodType<
  UpdateOrgTeamMembershipDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    accepted: z.boolean().optional(),
    disableImpersonation: z.boolean().optional(),
    role: z.enum(["ADMIN", "MEMBER", "OWNER"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accepted: "accepted",
      disableImpersonation: "disableImpersonation",
      role: "role",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateOrgTeamMembershipDto
 */
const SchemaOut$UpdateOrgTeamMembershipDto: z.ZodType<
  External$UpdateOrgTeamMembershipDto, // output type of this zod object
  z.ZodTypeDef,
  UpdateOrgTeamMembershipDto // the object to be transformed
> = z
  .object({
    accepted: z.boolean().optional(),
    disableImpersonation: z.boolean().optional(),
    role: z.enum(["ADMIN", "MEMBER", "OWNER"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accepted: "accepted",
      disableImpersonation: "disableImpersonation",
      role: "role",
    });
  });

export const Schemas$UpdateOrgTeamMembershipDto = {
  in: SchemaIn$UpdateOrgTeamMembershipDto,
  out: SchemaOut$UpdateOrgTeamMembershipDto,
};
