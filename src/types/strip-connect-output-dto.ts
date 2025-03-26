import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * StripConnectOutputDto
 */
export type StripConnectOutputDto = {
  authUrl: string;
};

/**
 * @internal
 * StripConnectOutputDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$StripConnectOutputDto = {
  authUrl: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object StripConnectOutputDto
 */
const SchemaIn$StripConnectOutputDto: z.ZodType<
  StripConnectOutputDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    authUrl: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      authUrl: "authUrl",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$StripConnectOutputDto
 */
const SchemaOut$StripConnectOutputDto: z.ZodType<
  External$StripConnectOutputDto, // output type of this zod object
  z.ZodTypeDef,
  StripConnectOutputDto // the object to be transformed
> = z
  .object({
    authUrl: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      authUrl: "authUrl",
    });
  });

export const Schemas$StripConnectOutputDto = {
  in: SchemaIn$StripConnectOutputDto,
  out: SchemaOut$StripConnectOutputDto,
};
