import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * EventType
 */
export type EventType = {
  id: number;
  slug: string;
};

/**
 * @internal
 * EventType without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$EventType = {
  id: number;
  slug: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object EventType
 */
const SchemaIn$EventType: z.ZodType<
  EventType, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    id: z.number(),
    slug: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      slug: "slug",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$EventType
 */
const SchemaOut$EventType: z.ZodType<
  External$EventType, // output type of this zod object
  z.ZodTypeDef,
  EventType // the object to be transformed
> = z
  .object({
    id: z.number(),
    slug: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      slug: "slug",
    });
  });

export const Schemas$EventType = {
  in: SchemaIn$EventType,
  out: SchemaOut$EventType,
};
