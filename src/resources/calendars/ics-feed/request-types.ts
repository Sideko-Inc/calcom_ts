import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * SaveRequest
 */
export type SaveRequest = {
  /**
   * Whether to allowing writing to the calendar or not
   */
  readOnly?: boolean | undefined;
  /**
   * An array of ICS URLs
   */
  urls: string[];
};

/**
 * @internal
 * SaveRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SaveRequest = {
  readOnly?: boolean | undefined;
  urls: string[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SaveRequest
 */
const SchemaIn$SaveRequest: z.ZodType<
  SaveRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    readOnly: z.boolean().optional(),
    urls: z.array(z.string()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      readOnly: "readOnly",
      urls: "urls",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SaveRequest
 */
const SchemaOut$SaveRequest: z.ZodType<
  External$SaveRequest, // output type of this zod object
  z.ZodTypeDef,
  SaveRequest // the object to be transformed
> = z
  .object({
    readOnly: z.boolean().optional(),
    urls: z.array(z.string()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      readOnly: "readOnly",
      urls: "urls",
    });
  });

export const Schemas$SaveRequest = {
  in: SchemaIn$SaveRequest,
  out: SchemaOut$SaveRequest,
};
