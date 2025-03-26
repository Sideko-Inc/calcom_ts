import {
  External$TeamMembershipOutput,
  Schemas$TeamMembershipOutput,
  TeamMembershipOutput,
} from "./team-membership-output";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * UpdateTeamMembershipOutput
 */
export type UpdateTeamMembershipOutput = {
  data: TeamMembershipOutput;
  status: "error" | "success";
};

/**
 * @internal
 * UpdateTeamMembershipOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateTeamMembershipOutput = {
  data: External$TeamMembershipOutput;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateTeamMembershipOutput
 */
const SchemaIn$UpdateTeamMembershipOutput: z.ZodType<
  UpdateTeamMembershipOutput, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateTeamMembershipOutput
 */
const SchemaOut$UpdateTeamMembershipOutput: z.ZodType<
  External$UpdateTeamMembershipOutput, // output type of this zod object
  z.ZodTypeDef,
  UpdateTeamMembershipOutput // the object to be transformed
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

export const Schemas$UpdateTeamMembershipOutput = {
  in: SchemaIn$UpdateTeamMembershipOutput,
  out: SchemaOut$UpdateTeamMembershipOutput,
};
