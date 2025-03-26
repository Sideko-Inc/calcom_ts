import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * StripCredentialsSaveOutputResponseDto
 */
export type StripCredentialsSaveOutputResponseDto = {
  url: string;
};

/**
 * @internal
 * StripCredentialsSaveOutputResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$StripCredentialsSaveOutputResponseDto = {
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object StripCredentialsSaveOutputResponseDto
 */
const SchemaIn$StripCredentialsSaveOutputResponseDto: z.ZodType<
  StripCredentialsSaveOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$StripCredentialsSaveOutputResponseDto
 */
const SchemaOut$StripCredentialsSaveOutputResponseDto: z.ZodType<
  External$StripCredentialsSaveOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  StripCredentialsSaveOutputResponseDto // the object to be transformed
> = z
  .object({
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      url: "url",
    });
  });

export const Schemas$StripCredentialsSaveOutputResponseDto = {
  in: SchemaIn$StripCredentialsSaveOutputResponseDto,
  out: SchemaOut$StripCredentialsSaveOutputResponseDto,
};
