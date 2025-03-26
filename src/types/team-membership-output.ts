import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * TeamMembershipOutput
 */
export type TeamMembershipOutput = {
  accepted: boolean;
  disableImpersonation?: boolean | undefined;
  id: number;
  role: "ADMIN" | "MEMBER" | "OWNER";
  teamId: number;
  userId: number;
};

/**
 * @internal
 * TeamMembershipOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TeamMembershipOutput = {
  accepted: boolean;
  disableImpersonation?: boolean | undefined;
  id: number;
  role: "ADMIN" | "MEMBER" | "OWNER";
  teamId: number;
  userId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TeamMembershipOutput
 */
const SchemaIn$TeamMembershipOutput: z.ZodType<
  TeamMembershipOutput, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TeamMembershipOutput
 */
const SchemaOut$TeamMembershipOutput: z.ZodType<
  External$TeamMembershipOutput, // output type of this zod object
  z.ZodTypeDef,
  TeamMembershipOutput // the object to be transformed
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

export const Schemas$TeamMembershipOutput = {
  in: SchemaIn$TeamMembershipOutput,
  out: SchemaOut$TeamMembershipOutput,
};
