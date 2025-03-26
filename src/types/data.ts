import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * Data
 */
export type Data = {
  agentId?: string | undefined;
  callId: string;
};

/**
 * @internal
 * Data without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Data = {
  agentId?: string | undefined;
  callId: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Data
 */
const SchemaIn$Data: z.ZodType<
  Data, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    agentId: z.string().optional(),
    callId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      agentId: "agentId",
      callId: "callId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Data
 */
const SchemaOut$Data: z.ZodType<
  External$Data, // output type of this zod object
  z.ZodTypeDef,
  Data // the object to be transformed
> = z
  .object({
    agentId: z.string().optional(),
    callId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      agentId: "agentId",
      callId: "callId",
    });
  });

export const Schemas$Data = {
  in: SchemaIn$Data,
  out: SchemaOut$Data,
};
