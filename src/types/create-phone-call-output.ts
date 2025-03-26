import { Data, External$Data, Schemas$Data } from "./data";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreatePhoneCallOutput
 */
export type CreatePhoneCallOutput = {
  data: Data;
  status: "error" | "success";
};

/**
 * @internal
 * CreatePhoneCallOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreatePhoneCallOutput = {
  data: External$Data;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreatePhoneCallOutput
 */
const SchemaIn$CreatePhoneCallOutput: z.ZodType<
  CreatePhoneCallOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$Data.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreatePhoneCallOutput
 */
const SchemaOut$CreatePhoneCallOutput: z.ZodType<
  External$CreatePhoneCallOutput, // output type of this zod object
  z.ZodTypeDef,
  CreatePhoneCallOutput // the object to be transformed
> = z
  .object({
    data: Schemas$Data.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$CreatePhoneCallOutput = {
  in: SchemaIn$CreatePhoneCallOutput,
  out: SchemaOut$CreatePhoneCallOutput,
};
