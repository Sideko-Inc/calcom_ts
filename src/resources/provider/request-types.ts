import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetRequest
 */
export type GetRequest = {
  clientId: string;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  clientId: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    clientId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientId: "clientId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    clientId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientId: "clientId",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * VerifyTokenRequest
 */
export type VerifyTokenRequest = {
  clientId: string;
};

/**
 * @internal
 * VerifyTokenRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$VerifyTokenRequest = {
  clientId: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object VerifyTokenRequest
 */
const SchemaIn$VerifyTokenRequest: z.ZodType<
  VerifyTokenRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    clientId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientId: "clientId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$VerifyTokenRequest
 */
const SchemaOut$VerifyTokenRequest: z.ZodType<
  External$VerifyTokenRequest, // output type of this zod object
  z.ZodTypeDef,
  VerifyTokenRequest // the object to be transformed
> = z
  .object({
    clientId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientId: "clientId",
    });
  });

export const Schemas$VerifyTokenRequest = {
  in: SchemaIn$VerifyTokenRequest,
  out: SchemaOut$VerifyTokenRequest,
};
