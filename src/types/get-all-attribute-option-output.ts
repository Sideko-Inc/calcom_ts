import {
  External$OptionOutput,
  OptionOutput,
  Schemas$OptionOutput,
} from "./option-output";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetAllAttributeOptionOutput
 */
export type GetAllAttributeOptionOutput = {
  data: OptionOutput[];
  status: "error" | "success";
};

/**
 * @internal
 * GetAllAttributeOptionOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetAllAttributeOptionOutput = {
  data: External$OptionOutput[];
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetAllAttributeOptionOutput
 */
const SchemaIn$GetAllAttributeOptionOutput: z.ZodType<
  GetAllAttributeOptionOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$OptionOutput.in),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetAllAttributeOptionOutput
 */
const SchemaOut$GetAllAttributeOptionOutput: z.ZodType<
  External$GetAllAttributeOptionOutput, // output type of this zod object
  z.ZodTypeDef,
  GetAllAttributeOptionOutput // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$OptionOutput.out),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$GetAllAttributeOptionOutput = {
  in: SchemaIn$GetAllAttributeOptionOutput,
  out: SchemaOut$GetAllAttributeOptionOutput,
};
