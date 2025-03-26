import {
  External$TeamMembershipOutput,
  Schemas$TeamMembershipOutput,
  TeamMembershipOutput,
} from "./team-membership-output";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetTeamMembershipsOutput
 */
export type GetTeamMembershipsOutput = {
  data: TeamMembershipOutput;
  status: "error" | "success";
};

/**
 * @internal
 * GetTeamMembershipsOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetTeamMembershipsOutput = {
  data: External$TeamMembershipOutput;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetTeamMembershipsOutput
 */
const SchemaIn$GetTeamMembershipsOutput: z.ZodType<
  GetTeamMembershipsOutput, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetTeamMembershipsOutput
 */
const SchemaOut$GetTeamMembershipsOutput: z.ZodType<
  External$GetTeamMembershipsOutput, // output type of this zod object
  z.ZodTypeDef,
  GetTeamMembershipsOutput // the object to be transformed
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

export const Schemas$GetTeamMembershipsOutput = {
  in: SchemaIn$GetTeamMembershipsOutput,
  out: SchemaOut$GetTeamMembershipsOutput,
};
