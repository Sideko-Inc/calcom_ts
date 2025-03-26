import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateOrgTeamMembershipDto
 */
export type CreateOrgTeamMembershipDto = {
  accepted?: boolean | undefined;
  disableImpersonation?: boolean | undefined;
  role: "ADMIN" | "MEMBER" | "OWNER";
  userId: number;
};

/**
 * @internal
 * CreateOrgTeamMembershipDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateOrgTeamMembershipDto = {
  accepted?: boolean | undefined;
  disableImpersonation?: boolean | undefined;
  role: "ADMIN" | "MEMBER" | "OWNER";
  userId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateOrgTeamMembershipDto
 */
const SchemaIn$CreateOrgTeamMembershipDto: z.ZodType<
  CreateOrgTeamMembershipDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    accepted: z.boolean().optional(),
    disableImpersonation: z.boolean().optional(),
    role: z.enum(["ADMIN", "MEMBER", "OWNER"]),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accepted: "accepted",
      disableImpersonation: "disableImpersonation",
      role: "role",
      userId: "userId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateOrgTeamMembershipDto
 */
const SchemaOut$CreateOrgTeamMembershipDto: z.ZodType<
  External$CreateOrgTeamMembershipDto, // output type of this zod object
  z.ZodTypeDef,
  CreateOrgTeamMembershipDto // the object to be transformed
> = z
  .object({
    accepted: z.boolean().optional(),
    disableImpersonation: z.boolean().optional(),
    role: z.enum(["ADMIN", "MEMBER", "OWNER"]),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accepted: "accepted",
      disableImpersonation: "disableImpersonation",
      role: "role",
      userId: "userId",
    });
  });

export const Schemas$CreateOrgTeamMembershipDto = {
  in: SchemaIn$CreateOrgTeamMembershipDto,
  out: SchemaOut$CreateOrgTeamMembershipDto,
};
