import {
  External$TeamMembershipOutput,
  Schemas$TeamMembershipOutput,
  TeamMembershipOutput,
} from "./team-membership-output";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DeleteTeamMembershipOutput
 */
export type DeleteTeamMembershipOutput = {
  data: TeamMembershipOutput;
  status: "error" | "success";
};

/**
 * @internal
 * DeleteTeamMembershipOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteTeamMembershipOutput = {
  data: External$TeamMembershipOutput;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeleteTeamMembershipOutput
 */
const SchemaIn$DeleteTeamMembershipOutput: z.ZodType<
  DeleteTeamMembershipOutput, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeleteTeamMembershipOutput
 */
const SchemaOut$DeleteTeamMembershipOutput: z.ZodType<
  External$DeleteTeamMembershipOutput, // output type of this zod object
  z.ZodTypeDef,
  DeleteTeamMembershipOutput // the object to be transformed
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

export const Schemas$DeleteTeamMembershipOutput = {
  in: SchemaIn$DeleteTeamMembershipOutput,
  out: SchemaOut$DeleteTeamMembershipOutput,
};
