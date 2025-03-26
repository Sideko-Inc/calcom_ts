import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateTeamOutput
 */
export type CreateTeamOutput = {
  /**
   * Either an Output object or a TeamOutputDto.
   */
  data: Record<string, any>;
  status: "error" | "success";
};

/**
 * @internal
 * CreateTeamOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateTeamOutput = {
  data: Record<string, any>;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateTeamOutput
 */
const SchemaIn$CreateTeamOutput: z.ZodType<
  CreateTeamOutput, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateTeamOutput
 */
const SchemaOut$CreateTeamOutput: z.ZodType<
  External$CreateTeamOutput, // output type of this zod object
  z.ZodTypeDef,
  CreateTeamOutput // the object to be transformed
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

export const Schemas$CreateTeamOutput = {
  in: SchemaIn$CreateTeamOutput,
  out: SchemaOut$CreateTeamOutput,
};
