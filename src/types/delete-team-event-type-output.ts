import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DeleteTeamEventTypeOutput
 */
export type DeleteTeamEventTypeOutput = {
  data: Record<string, any>;
  status: "error" | "success";
};

/**
 * @internal
 * DeleteTeamEventTypeOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteTeamEventTypeOutput = {
  data: Record<string, any>;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeleteTeamEventTypeOutput
 */
const SchemaIn$DeleteTeamEventTypeOutput: z.ZodType<
  DeleteTeamEventTypeOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.record(z.string(), z.any()),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeleteTeamEventTypeOutput
 */
const SchemaOut$DeleteTeamEventTypeOutput: z.ZodType<
  External$DeleteTeamEventTypeOutput, // output type of this zod object
  z.ZodTypeDef,
  DeleteTeamEventTypeOutput // the object to be transformed
> = z
  .object({
    data: z.record(z.string(), z.any()),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$DeleteTeamEventTypeOutput = {
  in: SchemaIn$DeleteTeamEventTypeOutput,
  out: SchemaOut$DeleteTeamEventTypeOutput,
};
