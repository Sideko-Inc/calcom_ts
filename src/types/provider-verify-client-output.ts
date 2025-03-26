import {
  External$ProviderVerifyClientData,
  ProviderVerifyClientData,
  Schemas$ProviderVerifyClientData,
} from "./provider-verify-client-data";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * ProviderVerifyClientOutput
 */
export type ProviderVerifyClientOutput = {
  data: ProviderVerifyClientData;
  status: "error" | "success";
};

/**
 * @internal
 * ProviderVerifyClientOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ProviderVerifyClientOutput = {
  data: External$ProviderVerifyClientData;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ProviderVerifyClientOutput
 */
const SchemaIn$ProviderVerifyClientOutput: z.ZodType<
  ProviderVerifyClientOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$ProviderVerifyClientData.in,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ProviderVerifyClientOutput
 */
const SchemaOut$ProviderVerifyClientOutput: z.ZodType<
  External$ProviderVerifyClientOutput, // output type of this zod object
  z.ZodTypeDef,
  ProviderVerifyClientOutput // the object to be transformed
> = z
  .object({
    data: Schemas$ProviderVerifyClientData.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$ProviderVerifyClientOutput = {
  in: SchemaIn$ProviderVerifyClientOutput,
  out: SchemaOut$ProviderVerifyClientOutput,
};
