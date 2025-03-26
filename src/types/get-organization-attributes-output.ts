import { Attribute, External$Attribute, Schemas$Attribute } from "./attribute";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetOrganizationAttributesOutput
 */
export type GetOrganizationAttributesOutput = {
  data: Attribute[];
  status: "error" | "success";
};

/**
 * @internal
 * GetOrganizationAttributesOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetOrganizationAttributesOutput = {
  data: External$Attribute[];
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetOrganizationAttributesOutput
 */
const SchemaIn$GetOrganizationAttributesOutput: z.ZodType<
  GetOrganizationAttributesOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$Attribute.in),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetOrganizationAttributesOutput
 */
const SchemaOut$GetOrganizationAttributesOutput: z.ZodType<
  External$GetOrganizationAttributesOutput, // output type of this zod object
  z.ZodTypeDef,
  GetOrganizationAttributesOutput // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$Attribute.out),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$GetOrganizationAttributesOutput = {
  in: SchemaIn$GetOrganizationAttributesOutput,
  out: SchemaOut$GetOrganizationAttributesOutput,
};
