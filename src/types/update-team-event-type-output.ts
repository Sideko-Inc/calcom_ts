import {
  External$TeamEventTypeOutput20240614,
  Schemas$TeamEventTypeOutput20240614,
  TeamEventTypeOutput20240614,
} from "./team-event-type-output20240614";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * UpdateTeamEventTypeOutput
 */
export type UpdateTeamEventTypeOutput = {
  data: TeamEventTypeOutput20240614 | TeamEventTypeOutput20240614[];
  status: "error" | "success";
};

/**
 * @internal
 * UpdateTeamEventTypeOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateTeamEventTypeOutput = {
  data:
    | External$TeamEventTypeOutput20240614
    | External$TeamEventTypeOutput20240614[];
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateTeamEventTypeOutput
 */
const SchemaIn$UpdateTeamEventTypeOutput: z.ZodType<
  UpdateTeamEventTypeOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.union([
      Schemas$TeamEventTypeOutput20240614.in,
      z.array(Schemas$TeamEventTypeOutput20240614.in),
    ]),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateTeamEventTypeOutput
 */
const SchemaOut$UpdateTeamEventTypeOutput: z.ZodType<
  External$UpdateTeamEventTypeOutput, // output type of this zod object
  z.ZodTypeDef,
  UpdateTeamEventTypeOutput // the object to be transformed
> = z
  .object({
    data: z.union([
      Schemas$TeamEventTypeOutput20240614.out,
      z.array(Schemas$TeamEventTypeOutput20240614.out),
    ]),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$UpdateTeamEventTypeOutput = {
  in: SchemaIn$UpdateTeamEventTypeOutput,
  out: SchemaOut$UpdateTeamEventTypeOutput,
};
