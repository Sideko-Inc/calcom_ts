import { Attribute, External$Attribute, Schemas$Attribute } from "./attribute";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DeleteOrganizationAttributesOutput
 */
export type DeleteOrganizationAttributesOutput = {
  data: Attribute;
  status: "error" | "success";
};

/**
 * @internal
 * DeleteOrganizationAttributesOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteOrganizationAttributesOutput = {
  data: External$Attribute;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeleteOrganizationAttributesOutput
 */
const SchemaIn$DeleteOrganizationAttributesOutput: z.ZodType<
  DeleteOrganizationAttributesOutput, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeleteOrganizationAttributesOutput
 */
const SchemaOut$DeleteOrganizationAttributesOutput: z.ZodType<
  External$DeleteOrganizationAttributesOutput, // output type of this zod object
  z.ZodTypeDef,
  DeleteOrganizationAttributesOutput // the object to be transformed
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

export const Schemas$DeleteOrganizationAttributesOutput = {
  in: SchemaIn$DeleteOrganizationAttributesOutput,
  out: SchemaOut$DeleteOrganizationAttributesOutput,
};
