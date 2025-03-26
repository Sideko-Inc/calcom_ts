import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * AssignOrganizationAttributeOptionToUserInput
 */
export type AssignOrganizationAttributeOptionToUserInput = {
  attributeId: string;
  attributeOptionId?: string | undefined;
  value?: string | undefined;
};

/**
 * @internal
 * AssignOrganizationAttributeOptionToUserInput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AssignOrganizationAttributeOptionToUserInput = {
  attributeId: string;
  attributeOptionId?: string | undefined;
  value?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AssignOrganizationAttributeOptionToUserInput
 */
const SchemaIn$AssignOrganizationAttributeOptionToUserInput: z.ZodType<
  AssignOrganizationAttributeOptionToUserInput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    attributeId: z.string(),
    attributeOptionId: z.string().optional(),
    value: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attributeId: "attributeId",
      attributeOptionId: "attributeOptionId",
      value: "value",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AssignOrganizationAttributeOptionToUserInput
 */
const SchemaOut$AssignOrganizationAttributeOptionToUserInput: z.ZodType<
  External$AssignOrganizationAttributeOptionToUserInput, // output type of this zod object
  z.ZodTypeDef,
  AssignOrganizationAttributeOptionToUserInput // the object to be transformed
> = z
  .object({
    attributeId: z.string(),
    attributeOptionId: z.string().optional(),
    value: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attributeId: "attributeId",
      attributeOptionId: "attributeOptionId",
      value: "value",
    });
  });

export const Schemas$AssignOrganizationAttributeOptionToUserInput = {
  in: SchemaIn$AssignOrganizationAttributeOptionToUserInput,
  out: SchemaOut$AssignOrganizationAttributeOptionToUserInput,
};
