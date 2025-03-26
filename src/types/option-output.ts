import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * OptionOutput
 */
export type OptionOutput = {
  /**
   * The ID of the attribute
   */
  attributeId: string;
  /**
   * The ID of the option
   */
  id: string;
  /**
   * The slug of the option
   */
  slug: string;
  /**
   * The value of the option
   */
  value: string;
};

/**
 * @internal
 * OptionOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$OptionOutput = {
  attributeId: string;
  id: string;
  slug: string;
  value: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object OptionOutput
 */
const SchemaIn$OptionOutput: z.ZodType<
  OptionOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    attributeId: z.string(),
    id: z.string(),
    slug: z.string(),
    value: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attributeId: "attributeId",
      id: "id",
      slug: "slug",
      value: "value",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$OptionOutput
 */
const SchemaOut$OptionOutput: z.ZodType<
  External$OptionOutput, // output type of this zod object
  z.ZodTypeDef,
  OptionOutput // the object to be transformed
> = z
  .object({
    attributeId: z.string(),
    id: z.string(),
    slug: z.string(),
    value: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attributeId: "attributeId",
      id: "id",
      slug: "slug",
      value: "value",
    });
  });

export const Schemas$OptionOutput = {
  in: SchemaIn$OptionOutput,
  out: SchemaOut$OptionOutput,
};
