import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * SlotsListResponseObj0
 */
export type SlotsListResponseObj0 = {
  [additionalProperty: string]: string[] | null | undefined;
};

/**
 * @internal
 * SlotsListResponseObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SlotsListResponseObj0 = {
  [additionalProperty: string]:
    | External$SlotsListResponseObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SlotsListResponseObj0
 */
const SchemaIn$SlotsListResponseObj0: z.ZodType<
  SlotsListResponseObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(z.array(z.string()))
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SlotsListResponseObj0
 */
const SchemaOut$SlotsListResponseObj0: z.ZodType<
  External$SlotsListResponseObj0, // output type of this zod object
  z.ZodTypeDef,
  SlotsListResponseObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.array(z.string()))
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$SlotsListResponseObj0 = {
  in: SchemaIn$SlotsListResponseObj0,
  out: SchemaOut$SlotsListResponseObj0,
};
