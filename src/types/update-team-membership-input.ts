import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * UpdateTeamMembershipInput
 */
export type UpdateTeamMembershipInput = {
  accepted?: boolean | undefined;
  disableImpersonation?: boolean | undefined;
  role?: ("ADMIN" | "MEMBER" | "OWNER") | undefined;
};

/**
 * @internal
 * UpdateTeamMembershipInput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateTeamMembershipInput = {
  accepted?: boolean | undefined;
  disableImpersonation?: boolean | undefined;
  role?: ("ADMIN" | "MEMBER" | "OWNER") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateTeamMembershipInput
 */
const SchemaIn$UpdateTeamMembershipInput: z.ZodType<
  UpdateTeamMembershipInput, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateTeamMembershipInput
 */
const SchemaOut$UpdateTeamMembershipInput: z.ZodType<
  External$UpdateTeamMembershipInput, // output type of this zod object
  z.ZodTypeDef,
  UpdateTeamMembershipInput // the object to be transformed
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

export const Schemas$UpdateTeamMembershipInput = {
  in: SchemaIn$UpdateTeamMembershipInput,
  out: SchemaOut$UpdateTeamMembershipInput,
};
