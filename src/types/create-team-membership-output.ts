import {
  External$TeamMembershipOutput,
  Schemas$TeamMembershipOutput,
  TeamMembershipOutput,
} from "./team-membership-output";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateTeamMembershipOutput
 */
export type CreateTeamMembershipOutput = {
  data: TeamMembershipOutput;
  status: "error" | "success";
};

/**
 * @internal
 * CreateTeamMembershipOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateTeamMembershipOutput = {
  data: External$TeamMembershipOutput;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateTeamMembershipOutput
 */
const SchemaIn$CreateTeamMembershipOutput: z.ZodType<
  CreateTeamMembershipOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TeamMembershipOutput.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateTeamMembershipOutput
 */
const SchemaOut$CreateTeamMembershipOutput: z.ZodType<
  External$CreateTeamMembershipOutput, // output type of this zod object
  z.ZodTypeDef,
  CreateTeamMembershipOutput // the object to be transformed
> = z
  .object({
    data: Schemas$TeamMembershipOutput.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$CreateTeamMembershipOutput = {
  in: SchemaIn$CreateTeamMembershipOutput,
  out: SchemaOut$CreateTeamMembershipOutput,
};
