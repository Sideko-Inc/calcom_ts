import {
  External$TeamEventTypeOutput20240614,
  Schemas$TeamEventTypeOutput20240614,
  TeamEventTypeOutput20240614,
} from "./team-event-type-output20240614";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateTeamEventTypeOutput
 */
export type CreateTeamEventTypeOutput = {
  data: TeamEventTypeOutput20240614 | TeamEventTypeOutput20240614[];
  status: "error" | "success";
};

/**
 * @internal
 * CreateTeamEventTypeOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateTeamEventTypeOutput = {
  data:
    | External$TeamEventTypeOutput20240614
    | External$TeamEventTypeOutput20240614[];
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateTeamEventTypeOutput
 */
const SchemaIn$CreateTeamEventTypeOutput: z.ZodType<
  CreateTeamEventTypeOutput, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateTeamEventTypeOutput
 */
const SchemaOut$CreateTeamEventTypeOutput: z.ZodType<
  External$CreateTeamEventTypeOutput, // output type of this zod object
  z.ZodTypeDef,
  CreateTeamEventTypeOutput // the object to be transformed
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

export const Schemas$CreateTeamEventTypeOutput = {
  in: SchemaIn$CreateTeamEventTypeOutput,
  out: SchemaOut$CreateTeamEventTypeOutput,
};
