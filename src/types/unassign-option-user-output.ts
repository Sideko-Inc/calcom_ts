import {
  AssignOptionUserOutputData,
  External$AssignOptionUserOutputData,
  Schemas$AssignOptionUserOutputData,
} from "./assign-option-user-output-data";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * UnassignOptionUserOutput
 */
export type UnassignOptionUserOutput = {
  data: AssignOptionUserOutputData;
  status: "error" | "success";
};

/**
 * @internal
 * UnassignOptionUserOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UnassignOptionUserOutput = {
  data: External$AssignOptionUserOutputData;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UnassignOptionUserOutput
 */
const SchemaIn$UnassignOptionUserOutput: z.ZodType<
  UnassignOptionUserOutput, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UnassignOptionUserOutput
 */
const SchemaOut$UnassignOptionUserOutput: z.ZodType<
  External$UnassignOptionUserOutput, // output type of this zod object
  z.ZodTypeDef,
  UnassignOptionUserOutput // the object to be transformed
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

export const Schemas$UnassignOptionUserOutput = {
  in: SchemaIn$UnassignOptionUserOutput,
  out: SchemaOut$UnassignOptionUserOutput,
};
