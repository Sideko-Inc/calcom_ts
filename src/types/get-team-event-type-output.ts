import {
  External$TeamEventTypeOutput20240614,
  Schemas$TeamEventTypeOutput20240614,
  TeamEventTypeOutput20240614,
} from "./team-event-type-output20240614";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetTeamEventTypeOutput
 */
export type GetTeamEventTypeOutput = {
  data: TeamEventTypeOutput20240614;
  status: "error" | "success";
};

/**
 * @internal
 * GetTeamEventTypeOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetTeamEventTypeOutput = {
  data: External$TeamEventTypeOutput20240614;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetTeamEventTypeOutput
 */
const SchemaIn$GetTeamEventTypeOutput: z.ZodType<
  GetTeamEventTypeOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TeamEventTypeOutput20240614.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetTeamEventTypeOutput
 */
const SchemaOut$GetTeamEventTypeOutput: z.ZodType<
  External$GetTeamEventTypeOutput, // output type of this zod object
  z.ZodTypeDef,
  GetTeamEventTypeOutput // the object to be transformed
> = z
  .object({
    data: Schemas$TeamEventTypeOutput20240614.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$GetTeamEventTypeOutput = {
  in: SchemaIn$GetTeamEventTypeOutput,
  out: SchemaOut$GetTeamEventTypeOutput,
};
