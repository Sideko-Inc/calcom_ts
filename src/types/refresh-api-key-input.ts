import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * RefreshApiKeyInput
 */
export type RefreshApiKeyInput = {
  /**
   * For how many days is managed organization api key valid. Defaults to 30 days.
   */
  apiKeyDaysValid?: number | undefined;
  /**
   * If true, organization api key never expires.
   */
  apiKeyNeverExpires?: boolean | undefined;
};

/**
 * @internal
 * RefreshApiKeyInput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RefreshApiKeyInput = {
  apiKeyDaysValid?: number | undefined;
  apiKeyNeverExpires?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RefreshApiKeyInput
 */
const SchemaIn$RefreshApiKeyInput: z.ZodType<
  RefreshApiKeyInput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    apiKeyDaysValid: z.number().optional(),
    apiKeyNeverExpires: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      apiKeyDaysValid: "apiKeyDaysValid",
      apiKeyNeverExpires: "apiKeyNeverExpires",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RefreshApiKeyInput
 */
const SchemaOut$RefreshApiKeyInput: z.ZodType<
  External$RefreshApiKeyInput, // output type of this zod object
  z.ZodTypeDef,
  RefreshApiKeyInput // the object to be transformed
> = z
  .object({
    apiKeyDaysValid: z.number().optional(),
    apiKeyNeverExpires: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      apiKeyDaysValid: "apiKeyDaysValid",
      apiKeyNeverExpires: "apiKeyNeverExpires",
    });
  });

export const Schemas$RefreshApiKeyInput = {
  in: SchemaIn$RefreshApiKeyInput,
  out: SchemaOut$RefreshApiKeyInput,
};
