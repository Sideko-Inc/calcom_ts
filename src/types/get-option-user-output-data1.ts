import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetOptionUserOutputData1
 */
export type GetOptionUserOutputData1 = {
  /**
   * The ID of the attribute
   */
  attributeId: string;
  /**
   * The ID of the option assigned to the user
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
 * GetOptionUserOutputData1 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetOptionUserOutputData1 = {
  attributeId: string;
  id: string;
  slug: string;
  value: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetOptionUserOutputData1
 */
const SchemaIn$GetOptionUserOutputData1: z.ZodType<
  GetOptionUserOutputData1, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetOptionUserOutputData1
 */
const SchemaOut$GetOptionUserOutputData1: z.ZodType<
  External$GetOptionUserOutputData1, // output type of this zod object
  z.ZodTypeDef,
  GetOptionUserOutputData1 // the object to be transformed
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

export const Schemas$GetOptionUserOutputData1 = {
  in: SchemaIn$GetOptionUserOutputData1,
  out: SchemaOut$GetOptionUserOutputData1,
};
