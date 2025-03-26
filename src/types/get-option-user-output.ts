import {
  External$GetOptionUserOutputData1,
  GetOptionUserOutputData1,
  Schemas$GetOptionUserOutputData1,
} from "./get-option-user-output-data1";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetOptionUserOutput
 */
export type GetOptionUserOutput = {
  data: GetOptionUserOutputData1[];
  status: "error" | "success";
};

/**
 * @internal
 * GetOptionUserOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetOptionUserOutput = {
  data: External$GetOptionUserOutputData1[];
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetOptionUserOutput
 */
const SchemaIn$GetOptionUserOutput: z.ZodType<
  GetOptionUserOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$GetOptionUserOutputData1.in),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetOptionUserOutput
 */
const SchemaOut$GetOptionUserOutput: z.ZodType<
  External$GetOptionUserOutput, // output type of this zod object
  z.ZodTypeDef,
  GetOptionUserOutput // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$GetOptionUserOutputData1.out),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$GetOptionUserOutput = {
  in: SchemaIn$GetOptionUserOutput,
  out: SchemaOut$GetOptionUserOutput,
};
