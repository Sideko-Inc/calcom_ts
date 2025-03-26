import {
  External$TeamMembershipOutput,
  Schemas$TeamMembershipOutput,
  TeamMembershipOutput,
} from "./team-membership-output";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetTeamMembershipOutput
 */
export type GetTeamMembershipOutput = {
  data: TeamMembershipOutput;
  status: "error" | "success";
};

/**
 * @internal
 * GetTeamMembershipOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetTeamMembershipOutput = {
  data: External$TeamMembershipOutput;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetTeamMembershipOutput
 */
const SchemaIn$GetTeamMembershipOutput: z.ZodType<
  GetTeamMembershipOutput, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetTeamMembershipOutput
 */
const SchemaOut$GetTeamMembershipOutput: z.ZodType<
  External$GetTeamMembershipOutput, // output type of this zod object
  z.ZodTypeDef,
  GetTeamMembershipOutput // the object to be transformed
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

export const Schemas$GetTeamMembershipOutput = {
  in: SchemaIn$GetTeamMembershipOutput,
  out: SchemaOut$GetTeamMembershipOutput,
};
