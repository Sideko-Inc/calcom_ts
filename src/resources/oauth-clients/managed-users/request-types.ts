import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  clientId: string;
  /**
   * The number of items to return
   */
  limit?: number | undefined;
  /**
   * The number of items to skip
   */
  offset?: number | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  clientId: string;
  limit?: number | undefined;
  offset?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    clientId: z.string(),
    limit: z.number().optional(),
    offset: z.number().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientId: "clientId",
      limit: "limit",
      offset: "offset",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    clientId: z.string(),
    limit: z.number().optional(),
    offset: z.number().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientId: "clientId",
      limit: "limit",
      offset: "offset",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};
