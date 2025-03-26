import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * ApiKeyOutput
 */
export type ApiKeyOutput = {
  apiKey: string;
};

/**
 * @internal
 * ApiKeyOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ApiKeyOutput = {
  apiKey: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ApiKeyOutput
 */
const SchemaIn$ApiKeyOutput: z.ZodType<
  ApiKeyOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    apiKey: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      apiKey: "apiKey",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ApiKeyOutput
 */
const SchemaOut$ApiKeyOutput: z.ZodType<
  External$ApiKeyOutput, // output type of this zod object
  z.ZodTypeDef,
  ApiKeyOutput // the object to be transformed
> = z
  .object({
    apiKey: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      apiKey: "apiKey",
    });
  });

export const Schemas$ApiKeyOutput = {
  in: SchemaIn$ApiKeyOutput,
  out: SchemaOut$ApiKeyOutput,
};
