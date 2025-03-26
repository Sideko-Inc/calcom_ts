import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * InputOrganizersDefaultApp20240614
 */
export type InputOrganizersDefaultApp20240614 = {
  /**
   * only allowed value for type is `organizersDefaultApp`
   */
  type: string;
};

/**
 * @internal
 * InputOrganizersDefaultApp20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InputOrganizersDefaultApp20240614 = {
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InputOrganizersDefaultApp20240614
 */
const SchemaIn$InputOrganizersDefaultApp20240614: z.ZodType<
  InputOrganizersDefaultApp20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InputOrganizersDefaultApp20240614
 */
const SchemaOut$InputOrganizersDefaultApp20240614: z.ZodType<
  External$InputOrganizersDefaultApp20240614, // output type of this zod object
  z.ZodTypeDef,
  InputOrganizersDefaultApp20240614 // the object to be transformed
> = z
  .object({
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$InputOrganizersDefaultApp20240614 = {
  in: SchemaIn$InputOrganizersDefaultApp20240614,
  out: SchemaOut$InputOrganizersDefaultApp20240614,
};
