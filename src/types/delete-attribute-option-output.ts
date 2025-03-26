import {
  External$OptionOutput,
  OptionOutput,
  Schemas$OptionOutput,
} from "./option-output";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DeleteAttributeOptionOutput
 */
export type DeleteAttributeOptionOutput = {
  data: OptionOutput;
  status: "error" | "success";
};

/**
 * @internal
 * DeleteAttributeOptionOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteAttributeOptionOutput = {
  data: External$OptionOutput;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeleteAttributeOptionOutput
 */
const SchemaIn$DeleteAttributeOptionOutput: z.ZodType<
  DeleteAttributeOptionOutput, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeleteAttributeOptionOutput
 */
const SchemaOut$DeleteAttributeOptionOutput: z.ZodType<
  External$DeleteAttributeOptionOutput, // output type of this zod object
  z.ZodTypeDef,
  DeleteAttributeOptionOutput // the object to be transformed
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

export const Schemas$DeleteAttributeOptionOutput = {
  in: SchemaIn$DeleteAttributeOptionOutput,
  out: SchemaOut$DeleteAttributeOptionOutput,
};
