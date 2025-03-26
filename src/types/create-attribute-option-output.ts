import {
  External$OptionOutput,
  OptionOutput,
  Schemas$OptionOutput,
} from "./option-output";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateAttributeOptionOutput
 */
export type CreateAttributeOptionOutput = {
  data: OptionOutput;
  status: "error" | "success";
};

/**
 * @internal
 * CreateAttributeOptionOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateAttributeOptionOutput = {
  data: External$OptionOutput;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateAttributeOptionOutput
 */
const SchemaIn$CreateAttributeOptionOutput: z.ZodType<
  CreateAttributeOptionOutput, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateAttributeOptionOutput
 */
const SchemaOut$CreateAttributeOptionOutput: z.ZodType<
  External$CreateAttributeOptionOutput, // output type of this zod object
  z.ZodTypeDef,
  CreateAttributeOptionOutput // the object to be transformed
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

export const Schemas$CreateAttributeOptionOutput = {
  in: SchemaIn$CreateAttributeOptionOutput,
  out: SchemaOut$CreateAttributeOptionOutput,
};
