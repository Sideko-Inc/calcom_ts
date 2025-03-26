import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateOrgMembershipDto
 */
export type CreateOrgMembershipDto = {
  accepted?: boolean | undefined;
  disableImpersonation?: boolean | undefined;
  role: "ADMIN" | "MEMBER" | "OWNER";
  userId: number;
};

/**
 * @internal
 * CreateOrgMembershipDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateOrgMembershipDto = {
  accepted?: boolean | undefined;
  disableImpersonation?: boolean | undefined;
  role: "ADMIN" | "MEMBER" | "OWNER";
  userId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateOrgMembershipDto
 */
const SchemaIn$CreateOrgMembershipDto: z.ZodType<
  CreateOrgMembershipDto, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateOrgMembershipDto
 */
const SchemaOut$CreateOrgMembershipDto: z.ZodType<
  External$CreateOrgMembershipDto, // output type of this zod object
  z.ZodTypeDef,
  CreateOrgMembershipDto // the object to be transformed
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

export const Schemas$CreateOrgMembershipDto = {
  in: SchemaIn$CreateOrgMembershipDto,
  out: SchemaOut$CreateOrgMembershipDto,
};
