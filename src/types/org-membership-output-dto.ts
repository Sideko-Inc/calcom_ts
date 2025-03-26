import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * OrgMembershipOutputDto
 */
export type OrgMembershipOutputDto = {
  accepted: boolean;
  disableImpersonation?: boolean | undefined;
  id: number;
  role: "ADMIN" | "MEMBER" | "OWNER";
  teamId: number;
  userId: number;
};

/**
 * @internal
 * OrgMembershipOutputDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$OrgMembershipOutputDto = {
  accepted: boolean;
  disableImpersonation?: boolean | undefined;
  id: number;
  role: "ADMIN" | "MEMBER" | "OWNER";
  teamId: number;
  userId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object OrgMembershipOutputDto
 */
const SchemaIn$OrgMembershipOutputDto: z.ZodType<
  OrgMembershipOutputDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    accepted: z.boolean(),
    disableImpersonation: z.boolean().optional(),
    id: z.number(),
    role: z.enum(["ADMIN", "MEMBER", "OWNER"]),
    teamId: z.number(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accepted: "accepted",
      disableImpersonation: "disableImpersonation",
      id: "id",
      role: "role",
      teamId: "teamId",
      userId: "userId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$OrgMembershipOutputDto
 */
const SchemaOut$OrgMembershipOutputDto: z.ZodType<
  External$OrgMembershipOutputDto, // output type of this zod object
  z.ZodTypeDef,
  OrgMembershipOutputDto // the object to be transformed
> = z
  .object({
    accepted: z.boolean(),
    disableImpersonation: z.boolean().optional(),
    id: z.number(),
    role: z.enum(["ADMIN", "MEMBER", "OWNER"]),
    teamId: z.number(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accepted: "accepted",
      disableImpersonation: "disableImpersonation",
      id: "id",
      role: "role",
      teamId: "teamId",
      userId: "userId",
    });
  });

export const Schemas$OrgMembershipOutputDto = {
  in: SchemaIn$OrgMembershipOutputDto,
  out: SchemaOut$OrgMembershipOutputDto,
};
