import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * ProviderVerifyClientData
 */
export type ProviderVerifyClientData = {
  clientId: string;
  name: string;
  organizationId: number;
};

/**
 * @internal
 * ProviderVerifyClientData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ProviderVerifyClientData = {
  clientId: string;
  name: string;
  organizationId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ProviderVerifyClientData
 */
const SchemaIn$ProviderVerifyClientData: z.ZodType<
  ProviderVerifyClientData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    clientId: z.string(),
    name: z.string(),
    organizationId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientId: "clientId",
      name: "name",
      organizationId: "organizationId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ProviderVerifyClientData
 */
const SchemaOut$ProviderVerifyClientData: z.ZodType<
  External$ProviderVerifyClientData, // output type of this zod object
  z.ZodTypeDef,
  ProviderVerifyClientData // the object to be transformed
> = z
  .object({
    clientId: z.string(),
    name: z.string(),
    organizationId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientId: "clientId",
      name: "name",
      organizationId: "organizationId",
    });
  });

export const Schemas$ProviderVerifyClientData = {
  in: SchemaIn$ProviderVerifyClientData,
  out: SchemaOut$ProviderVerifyClientData,
};
