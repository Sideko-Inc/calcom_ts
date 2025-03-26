import {
  External$TeamEventTypeOutput20240614,
  Schemas$TeamEventTypeOutput20240614,
  TeamEventTypeOutput20240614,
} from "./team-event-type-output20240614";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetTeamEventTypesOutput
 */
export type GetTeamEventTypesOutput = {
  data: TeamEventTypeOutput20240614[];
  status: "error" | "success";
};

/**
 * @internal
 * GetTeamEventTypesOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetTeamEventTypesOutput = {
  data: External$TeamEventTypeOutput20240614[];
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetTeamEventTypesOutput
 */
const SchemaIn$GetTeamEventTypesOutput: z.ZodType<
  GetTeamEventTypesOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$TeamEventTypeOutput20240614.in),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetTeamEventTypesOutput
 */
const SchemaOut$GetTeamEventTypesOutput: z.ZodType<
  External$GetTeamEventTypesOutput, // output type of this zod object
  z.ZodTypeDef,
  GetTeamEventTypesOutput // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$TeamEventTypeOutput20240614.out),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$GetTeamEventTypesOutput = {
  in: SchemaIn$GetTeamEventTypesOutput,
  out: SchemaOut$GetTeamEventTypesOutput,
};
