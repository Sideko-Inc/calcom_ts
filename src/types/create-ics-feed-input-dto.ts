import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateIcsFeedInputDto
 */
export type CreateIcsFeedInputDto = {
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
 * CreateIcsFeedInputDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateIcsFeedInputDto = {
  readOnly?: boolean | undefined;
  urls: string[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateIcsFeedInputDto
 */
const SchemaIn$CreateIcsFeedInputDto: z.ZodType<
  CreateIcsFeedInputDto, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateIcsFeedInputDto
 */
const SchemaOut$CreateIcsFeedInputDto: z.ZodType<
  External$CreateIcsFeedInputDto, // output type of this zod object
  z.ZodTypeDef,
  CreateIcsFeedInputDto // the object to be transformed
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

export const Schemas$CreateIcsFeedInputDto = {
  in: SchemaIn$CreateIcsFeedInputDto,
  out: SchemaOut$CreateIcsFeedInputDto,
};
