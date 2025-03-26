import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DeleteData20240614
 */
export type DeleteData20240614 = {
  id: number;
  lengthInMinutes: number;
  slug: string;
  title: string;
};

/**
 * @internal
 * DeleteData20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteData20240614 = {
  id: number;
  lengthInMinutes: number;
  slug: string;
  title: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeleteData20240614
 */
const SchemaIn$DeleteData20240614: z.ZodType<
  DeleteData20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    id: z.number(),
    lengthInMinutes: z.number(),
    slug: z.string(),
    title: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      lengthInMinutes: "lengthInMinutes",
      slug: "slug",
      title: "title",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeleteData20240614
 */
const SchemaOut$DeleteData20240614: z.ZodType<
  External$DeleteData20240614, // output type of this zod object
  z.ZodTypeDef,
  DeleteData20240614 // the object to be transformed
> = z
  .object({
    id: z.number(),
    lengthInMinutes: z.number(),
    slug: z.string(),
    title: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      lengthInMinutes: "lengthInMinutes",
      slug: "slug",
      title: "title",
    });
  });

export const Schemas$DeleteData20240614 = {
  in: SchemaIn$DeleteData20240614,
  out: SchemaOut$DeleteData20240614,
};
