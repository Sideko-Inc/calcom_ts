import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * RefreshRequest
 */
export type RefreshRequest = {
  /**
   * Managed user's refresh token.
   */
  refreshToken: string;
  clientId: string;
  /**
   * OAuth client secret key.
   */
  xCalSecretKey: string;
};

/**
 * @internal
 * RefreshRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RefreshRequest = {
  refreshToken: string;
  clientId: string;
  "x-cal-secret-key": string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RefreshRequest
 */
const SchemaIn$RefreshRequest: z.ZodType<
  RefreshRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    refreshToken: z.string(),
    clientId: z.string(),
    "x-cal-secret-key": z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      refreshToken: "refreshToken",
      clientId: "clientId",
      "x-cal-secret-key": "xCalSecretKey",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RefreshRequest
 */
const SchemaOut$RefreshRequest: z.ZodType<
  External$RefreshRequest, // output type of this zod object
  z.ZodTypeDef,
  RefreshRequest // the object to be transformed
> = z
  .object({
    refreshToken: z.string(),
    clientId: z.string(),
    xCalSecretKey: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      refreshToken: "refreshToken",
      clientId: "clientId",
      xCalSecretKey: "x-cal-secret-key",
    });
  });

export const Schemas$RefreshRequest = {
  in: SchemaIn$RefreshRequest,
  out: SchemaOut$RefreshRequest,
};
