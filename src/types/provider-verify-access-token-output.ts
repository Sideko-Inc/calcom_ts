import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * ProviderVerifyAccessTokenOutput
 */
export type ProviderVerifyAccessTokenOutput = {
  status: "error" | "success";
};

/**
 * @internal
 * ProviderVerifyAccessTokenOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ProviderVerifyAccessTokenOutput = {
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ProviderVerifyAccessTokenOutput
 */
const SchemaIn$ProviderVerifyAccessTokenOutput: z.ZodType<
  ProviderVerifyAccessTokenOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ProviderVerifyAccessTokenOutput
 */
const SchemaOut$ProviderVerifyAccessTokenOutput: z.ZodType<
  External$ProviderVerifyAccessTokenOutput, // output type of this zod object
  z.ZodTypeDef,
  ProviderVerifyAccessTokenOutput // the object to be transformed
> = z
  .object({
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      status: "status",
    });
  });

export const Schemas$ProviderVerifyAccessTokenOutput = {
  in: SchemaIn$ProviderVerifyAccessTokenOutput,
  out: SchemaOut$ProviderVerifyAccessTokenOutput,
};
