import { Attribute, External$Attribute, Schemas$Attribute } from "./attribute";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetSingleAttributeOutput
 */
export type GetSingleAttributeOutput = {
  data: Attribute;
  status: "error" | "success";
};

/**
 * @internal
 * GetSingleAttributeOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetSingleAttributeOutput = {
  data: External$Attribute;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetSingleAttributeOutput
 */
const SchemaIn$GetSingleAttributeOutput: z.ZodType<
  GetSingleAttributeOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$Attribute.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetSingleAttributeOutput
 */
const SchemaOut$GetSingleAttributeOutput: z.ZodType<
  External$GetSingleAttributeOutput, // output type of this zod object
  z.ZodTypeDef,
  GetSingleAttributeOutput // the object to be transformed
> = z
  .object({
    data: Schemas$Attribute.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$GetSingleAttributeOutput = {
  in: SchemaIn$GetSingleAttributeOutput,
  out: SchemaOut$GetSingleAttributeOutput,
};
