import { Attribute, External$Attribute, Schemas$Attribute } from "./attribute";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * UpdateOrganizationAttributesOutput
 */
export type UpdateOrganizationAttributesOutput = {
  data: Attribute;
  status: "error" | "success";
};

/**
 * @internal
 * UpdateOrganizationAttributesOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateOrganizationAttributesOutput = {
  data: External$Attribute;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateOrganizationAttributesOutput
 */
const SchemaIn$UpdateOrganizationAttributesOutput: z.ZodType<
  UpdateOrganizationAttributesOutput, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateOrganizationAttributesOutput
 */
const SchemaOut$UpdateOrganizationAttributesOutput: z.ZodType<
  External$UpdateOrganizationAttributesOutput, // output type of this zod object
  z.ZodTypeDef,
  UpdateOrganizationAttributesOutput // the object to be transformed
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

export const Schemas$UpdateOrganizationAttributesOutput = {
  in: SchemaIn$UpdateOrganizationAttributesOutput,
  out: SchemaOut$UpdateOrganizationAttributesOutput,
};
