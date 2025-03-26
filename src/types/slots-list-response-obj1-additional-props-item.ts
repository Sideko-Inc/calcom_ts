import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * SlotsListResponseObj1AdditionalPropsItem
 */
export type SlotsListResponseObj1AdditionalPropsItem = {
  end?: string | undefined;
  start?: string | undefined;
};

/**
 * @internal
 * SlotsListResponseObj1AdditionalPropsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SlotsListResponseObj1AdditionalPropsItem = {
  end?: string | undefined;
  start?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SlotsListResponseObj1AdditionalPropsItem
 */
const SchemaIn$SlotsListResponseObj1AdditionalPropsItem: z.ZodType<
  SlotsListResponseObj1AdditionalPropsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    end: z.string().optional(),
    start: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      end: "end",
      start: "start",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SlotsListResponseObj1AdditionalPropsItem
 */
const SchemaOut$SlotsListResponseObj1AdditionalPropsItem: z.ZodType<
  External$SlotsListResponseObj1AdditionalPropsItem, // output type of this zod object
  z.ZodTypeDef,
  SlotsListResponseObj1AdditionalPropsItem // the object to be transformed
> = z
  .object({
    end: z.string().optional(),
    start: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      end: "end",
      start: "start",
    });
  });

export const Schemas$SlotsListResponseObj1AdditionalPropsItem = {
  in: SchemaIn$SlotsListResponseObj1AdditionalPropsItem,
  out: SchemaOut$SlotsListResponseObj1AdditionalPropsItem,
};
