import {
  External$OptionOutput,
  OptionOutput,
  Schemas$OptionOutput,
} from "./option-output";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * UpdateAttributeOptionOutput
 */
export type UpdateAttributeOptionOutput = {
  data: OptionOutput;
  status: "error" | "success";
};

/**
 * @internal
 * UpdateAttributeOptionOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateAttributeOptionOutput = {
  data: External$OptionOutput;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateAttributeOptionOutput
 */
const SchemaIn$UpdateAttributeOptionOutput: z.ZodType<
  UpdateAttributeOptionOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$OptionOutput.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateAttributeOptionOutput
 */
const SchemaOut$UpdateAttributeOptionOutput: z.ZodType<
  External$UpdateAttributeOptionOutput, // output type of this zod object
  z.ZodTypeDef,
  UpdateAttributeOptionOutput // the object to be transformed
> = z
  .object({
    data: Schemas$OptionOutput.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$UpdateAttributeOptionOutput = {
  in: SchemaIn$UpdateAttributeOptionOutput,
  out: SchemaOut$UpdateAttributeOptionOutput,
};
