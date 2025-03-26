import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateTeamMembershipInput
 */
export type CreateTeamMembershipInput = {
  accepted?: boolean | undefined;
  disableImpersonation?: boolean | undefined;
  role?: ("ADMIN" | "MEMBER" | "OWNER") | undefined;
  userId: number;
};

/**
 * @internal
 * CreateTeamMembershipInput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateTeamMembershipInput = {
  accepted?: boolean | undefined;
  disableImpersonation?: boolean | undefined;
  role?: ("ADMIN" | "MEMBER" | "OWNER") | undefined;
  userId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateTeamMembershipInput
 */
const SchemaIn$CreateTeamMembershipInput: z.ZodType<
  CreateTeamMembershipInput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    accepted: z.boolean().optional(),
    disableImpersonation: z.boolean().optional(),
    role: z.enum(["ADMIN", "MEMBER", "OWNER"]).optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateTeamMembershipInput
 */
const SchemaOut$CreateTeamMembershipInput: z.ZodType<
  External$CreateTeamMembershipInput, // output type of this zod object
  z.ZodTypeDef,
  CreateTeamMembershipInput // the object to be transformed
> = z
  .object({
    accepted: z.boolean().optional(),
    disableImpersonation: z.boolean().optional(),
    role: z.enum(["ADMIN", "MEMBER", "OWNER"]).optional(),
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

export const Schemas$CreateTeamMembershipInput = {
  in: SchemaIn$CreateTeamMembershipInput,
  out: SchemaOut$CreateTeamMembershipInput,
};
