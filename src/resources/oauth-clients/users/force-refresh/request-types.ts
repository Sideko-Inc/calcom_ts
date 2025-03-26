import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateRequest
 */
export type CreateRequest = {
  clientId: string;
  userId: number;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  clientId: string;
  userId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    clientId: z.string(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientId: "clientId",
      userId: "userId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
> = z
  .object({
    clientId: z.string(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientId: "clientId",
      userId: "userId",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
