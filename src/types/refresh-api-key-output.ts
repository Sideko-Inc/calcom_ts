import {
  ApiKeyOutput,
  External$ApiKeyOutput,
  Schemas$ApiKeyOutput,
} from "./api-key-output";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * RefreshApiKeyOutput
 */
export type RefreshApiKeyOutput = {
  data: ApiKeyOutput;
  status: "error" | "success";
};

/**
 * @internal
 * RefreshApiKeyOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RefreshApiKeyOutput = {
  data: External$ApiKeyOutput;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RefreshApiKeyOutput
 */
const SchemaIn$RefreshApiKeyOutput: z.ZodType<
  RefreshApiKeyOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$ApiKeyOutput.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RefreshApiKeyOutput
 */
const SchemaOut$RefreshApiKeyOutput: z.ZodType<
  External$RefreshApiKeyOutput, // output type of this zod object
  z.ZodTypeDef,
  RefreshApiKeyOutput // the object to be transformed
> = z
  .object({
    data: Schemas$ApiKeyOutput.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$RefreshApiKeyOutput = {
  in: SchemaIn$RefreshApiKeyOutput,
  out: SchemaOut$RefreshApiKeyOutput,
};
