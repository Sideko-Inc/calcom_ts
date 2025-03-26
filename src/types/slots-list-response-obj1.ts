import {
  External$SlotsListResponseObj1AdditionalPropsItem,
  Schemas$SlotsListResponseObj1AdditionalPropsItem,
  SlotsListResponseObj1AdditionalPropsItem,
} from "./slots-list-response-obj1-additional-props-item";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * SlotsListResponseObj1
 */
export type SlotsListResponseObj1 = {
  [additionalProperty: string]:
    | SlotsListResponseObj1AdditionalPropsItem[]
    | null
    | undefined;
};

/**
 * @internal
 * SlotsListResponseObj1 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SlotsListResponseObj1 = {
  [additionalProperty: string]:
    | External$SlotsListResponseObj1
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SlotsListResponseObj1
 */
const SchemaIn$SlotsListResponseObj1: z.ZodType<
  SlotsListResponseObj1, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(z.array(Schemas$SlotsListResponseObj1AdditionalPropsItem.in))
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SlotsListResponseObj1
 */
const SchemaOut$SlotsListResponseObj1: z.ZodType<
  External$SlotsListResponseObj1, // output type of this zod object
  z.ZodTypeDef,
  SlotsListResponseObj1 // the object to be transformed
> = z
  .object({})
  .catchall(z.array(Schemas$SlotsListResponseObj1AdditionalPropsItem.out))
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$SlotsListResponseObj1 = {
  in: SchemaIn$SlotsListResponseObj1,
  out: SchemaOut$SlotsListResponseObj1,
};
