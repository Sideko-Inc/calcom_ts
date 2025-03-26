import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * KeysDto
 */
export type KeysDto = {
  accessToken: string;
  accessTokenExpiresAt: number;
  refreshToken: string;
};

/**
 * @internal
 * KeysDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$KeysDto = {
  accessToken: string;
  accessTokenExpiresAt: number;
  refreshToken: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object KeysDto
 */
const SchemaIn$KeysDto: z.ZodType<
  KeysDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    accessToken: z.string(),
    accessTokenExpiresAt: z.number(),
    refreshToken: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accessToken: "accessToken",
      accessTokenExpiresAt: "accessTokenExpiresAt",
      refreshToken: "refreshToken",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$KeysDto
 */
const SchemaOut$KeysDto: z.ZodType<
  External$KeysDto, // output type of this zod object
  z.ZodTypeDef,
  KeysDto // the object to be transformed
> = z
  .object({
    accessToken: z.string(),
    accessTokenExpiresAt: z.number(),
    refreshToken: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accessToken: "accessToken",
      accessTokenExpiresAt: "accessTokenExpiresAt",
      refreshToken: "refreshToken",
    });
  });

export const Schemas$KeysDto = {
  in: SchemaIn$KeysDto,
  out: SchemaOut$KeysDto,
};
