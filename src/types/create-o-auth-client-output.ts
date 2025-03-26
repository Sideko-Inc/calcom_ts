import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateOAuthClientOutput
 */
export type CreateOAuthClientOutput = {
  clientId: string;
  clientSecret: string;
};

/**
 * @internal
 * CreateOAuthClientOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateOAuthClientOutput = {
  clientId: string;
  clientSecret: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateOAuthClientOutput
 */
const SchemaIn$CreateOAuthClientOutput: z.ZodType<
  CreateOAuthClientOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    clientId: z.string(),
    clientSecret: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientId: "clientId",
      clientSecret: "clientSecret",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateOAuthClientOutput
 */
const SchemaOut$CreateOAuthClientOutput: z.ZodType<
  External$CreateOAuthClientOutput, // output type of this zod object
  z.ZodTypeDef,
  CreateOAuthClientOutput // the object to be transformed
> = z
  .object({
    clientId: z.string(),
    clientSecret: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientId: "clientId",
      clientSecret: "clientSecret",
    });
  });

export const Schemas$CreateOAuthClientOutput = {
  in: SchemaIn$CreateOAuthClientOutput,
  out: SchemaOut$CreateOAuthClientOutput,
};
