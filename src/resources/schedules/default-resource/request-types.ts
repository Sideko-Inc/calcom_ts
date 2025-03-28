import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Must be set to 2024-06-11
   */
  calApiVersion: string;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  "cal-api-version": string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    "cal-api-version": z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      "cal-api-version": "calApiVersion",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    calApiVersion: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      calApiVersion: "cal-api-version",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};
