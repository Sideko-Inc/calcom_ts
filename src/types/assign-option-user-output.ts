import {
  AssignOptionUserOutputData,
  External$AssignOptionUserOutputData,
  Schemas$AssignOptionUserOutputData,
} from "./assign-option-user-output-data";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * AssignOptionUserOutput
 */
export type AssignOptionUserOutput = {
  data: AssignOptionUserOutputData;
  status: "error" | "success";
};

/**
 * @internal
 * AssignOptionUserOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AssignOptionUserOutput = {
  data: External$AssignOptionUserOutputData;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AssignOptionUserOutput
 */
const SchemaIn$AssignOptionUserOutput: z.ZodType<
  AssignOptionUserOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$AssignOptionUserOutputData.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AssignOptionUserOutput
 */
const SchemaOut$AssignOptionUserOutput: z.ZodType<
  External$AssignOptionUserOutput, // output type of this zod object
  z.ZodTypeDef,
  AssignOptionUserOutput // the object to be transformed
> = z
  .object({
    data: Schemas$AssignOptionUserOutputData.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$AssignOptionUserOutput = {
  in: SchemaIn$AssignOptionUserOutput,
  out: SchemaOut$AssignOptionUserOutput,
};
