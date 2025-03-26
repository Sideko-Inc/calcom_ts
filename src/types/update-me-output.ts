import { External$MeOutput, MeOutput, Schemas$MeOutput } from "./me-output";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * UpdateMeOutput
 */
export type UpdateMeOutput = {
  data: MeOutput;
  status: "error" | "success";
};

/**
 * @internal
 * UpdateMeOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateMeOutput = {
  data: External$MeOutput;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateMeOutput
 */
const SchemaIn$UpdateMeOutput: z.ZodType<
  UpdateMeOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$MeOutput.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateMeOutput
 */
const SchemaOut$UpdateMeOutput: z.ZodType<
  External$UpdateMeOutput, // output type of this zod object
  z.ZodTypeDef,
  UpdateMeOutput // the object to be transformed
> = z
  .object({
    data: Schemas$MeOutput.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$UpdateMeOutput = {
  in: SchemaIn$UpdateMeOutput,
  out: SchemaOut$UpdateMeOutput,
};
