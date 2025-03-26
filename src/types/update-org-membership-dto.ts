import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * UpdateOrgMembershipDto
 */
export type UpdateOrgMembershipDto = {
  accepted?: boolean | undefined;
  disableImpersonation?: boolean | undefined;
  role?: ("ADMIN" | "MEMBER" | "OWNER") | undefined;
};

/**
 * @internal
 * UpdateOrgMembershipDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateOrgMembershipDto = {
  accepted?: boolean | undefined;
  disableImpersonation?: boolean | undefined;
  role?: ("ADMIN" | "MEMBER" | "OWNER") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateOrgMembershipDto
 */
const SchemaIn$UpdateOrgMembershipDto: z.ZodType<
  UpdateOrgMembershipDto, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateOrgMembershipDto
 */
const SchemaOut$UpdateOrgMembershipDto: z.ZodType<
  External$UpdateOrgMembershipDto, // output type of this zod object
  z.ZodTypeDef,
  UpdateOrgMembershipDto // the object to be transformed
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

export const Schemas$UpdateOrgMembershipDto = {
  in: SchemaIn$UpdateOrgMembershipDto,
  out: SchemaOut$UpdateOrgMembershipDto,
};
