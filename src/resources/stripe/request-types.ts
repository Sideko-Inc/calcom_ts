import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * SaveRequest
 */
export type SaveRequest = {
  code: string;
  state: string;
};

/**
 * @internal
 * SaveRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SaveRequest = {
  code: string;
  state: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SaveRequest
 */
const SchemaIn$SaveRequest: z.ZodType<
  SaveRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    code: z.string(),
    state: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      code: "code",
      state: "state",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SaveRequest
 */
const SchemaOut$SaveRequest: z.ZodType<
  External$SaveRequest, // output type of this zod object
  z.ZodTypeDef,
  SaveRequest // the object to be transformed
> = z
  .object({
    code: z.string(),
    state: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      code: "code",
      state: "state",
    });
  });

export const Schemas$SaveRequest = {
  in: SchemaIn$SaveRequest,
  out: SchemaOut$SaveRequest,
};
