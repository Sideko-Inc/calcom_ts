import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * StripCredentialsCheckOutputResponseDto
 */
export type StripCredentialsCheckOutputResponseDto = {
  status: string;
};

/**
 * @internal
 * StripCredentialsCheckOutputResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$StripCredentialsCheckOutputResponseDto = {
  status: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object StripCredentialsCheckOutputResponseDto
 */
const SchemaIn$StripCredentialsCheckOutputResponseDto: z.ZodType<
  StripCredentialsCheckOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    status: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$StripCredentialsCheckOutputResponseDto
 */
const SchemaOut$StripCredentialsCheckOutputResponseDto: z.ZodType<
  External$StripCredentialsCheckOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  StripCredentialsCheckOutputResponseDto // the object to be transformed
> = z
  .object({
    status: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      status: "status",
    });
  });

export const Schemas$StripCredentialsCheckOutputResponseDto = {
  in: SchemaIn$StripCredentialsCheckOutputResponseDto,
  out: SchemaOut$StripCredentialsCheckOutputResponseDto,
};
