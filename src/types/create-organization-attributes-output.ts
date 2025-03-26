import { Attribute, External$Attribute, Schemas$Attribute } from "./attribute";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateOrganizationAttributesOutput
 */
export type CreateOrganizationAttributesOutput = {
  data: Attribute;
  status: "error" | "success";
};

/**
 * @internal
 * CreateOrganizationAttributesOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateOrganizationAttributesOutput = {
  data: External$Attribute;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateOrganizationAttributesOutput
 */
const SchemaIn$CreateOrganizationAttributesOutput: z.ZodType<
  CreateOrganizationAttributesOutput, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateOrganizationAttributesOutput
 */
const SchemaOut$CreateOrganizationAttributesOutput: z.ZodType<
  External$CreateOrganizationAttributesOutput, // output type of this zod object
  z.ZodTypeDef,
  CreateOrganizationAttributesOutput // the object to be transformed
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

export const Schemas$CreateOrganizationAttributesOutput = {
  in: SchemaIn$CreateOrganizationAttributesOutput,
  out: SchemaOut$CreateOrganizationAttributesOutput,
};
