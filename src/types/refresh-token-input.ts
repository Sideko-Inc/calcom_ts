import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * RefreshTokenInput
 */
export type RefreshTokenInput = {
  /**
   * Managed user's refresh token.
   */
  refreshToken: string;
};

/**
 * @internal
 * RefreshTokenInput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RefreshTokenInput = {
  refreshToken: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RefreshTokenInput
 */
const SchemaIn$RefreshTokenInput: z.ZodType<
  RefreshTokenInput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    refreshToken: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      refreshToken: "refreshToken",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RefreshTokenInput
 */
const SchemaOut$RefreshTokenInput: z.ZodType<
  External$RefreshTokenInput, // output type of this zod object
  z.ZodTypeDef,
  RefreshTokenInput // the object to be transformed
> = z
  .object({
    refreshToken: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      refreshToken: "refreshToken",
    });
  });

export const Schemas$RefreshTokenInput = {
  in: SchemaIn$RefreshTokenInput,
  out: SchemaOut$RefreshTokenInput,
};
