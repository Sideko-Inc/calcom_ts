import { External$MeOutput, MeOutput, Schemas$MeOutput } from "./me-output";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetMeOutput
 */
export type GetMeOutput = {
  data: MeOutput;
  status: "error" | "success";
};

/**
 * @internal
 * GetMeOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetMeOutput = {
  data: External$MeOutput;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetMeOutput
 */
const SchemaIn$GetMeOutput: z.ZodType<
  GetMeOutput, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetMeOutput
 */
const SchemaOut$GetMeOutput: z.ZodType<
  External$GetMeOutput, // output type of this zod object
  z.ZodTypeDef,
  GetMeOutput // the object to be transformed
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

export const Schemas$GetMeOutput = {
  in: SchemaIn$GetMeOutput,
  out: SchemaOut$GetMeOutput,
};
