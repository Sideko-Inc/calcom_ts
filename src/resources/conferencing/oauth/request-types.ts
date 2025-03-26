import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * AuthUrlRequest
 */
export type AuthUrlRequest = {
  /**
   * Conferencing application type
   */
  app: "msteams" | "zoom";
  onErrorReturnTo: string;
  returnTo: string;
};

/**
 * @internal
 * AuthUrlRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AuthUrlRequest = {
  app: "msteams" | "zoom";
  onErrorReturnTo: string;
  returnTo: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AuthUrlRequest
 */
const SchemaIn$AuthUrlRequest: z.ZodType<
  AuthUrlRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    app: z.enum(["msteams", "zoom"]),
    onErrorReturnTo: z.string(),
    returnTo: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      app: "app",
      onErrorReturnTo: "onErrorReturnTo",
      returnTo: "returnTo",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AuthUrlRequest
 */
const SchemaOut$AuthUrlRequest: z.ZodType<
  External$AuthUrlRequest, // output type of this zod object
  z.ZodTypeDef,
  AuthUrlRequest // the object to be transformed
> = z
  .object({
    app: z.enum(["msteams", "zoom"]),
    onErrorReturnTo: z.string(),
    returnTo: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      app: "app",
      onErrorReturnTo: "onErrorReturnTo",
      returnTo: "returnTo",
    });
  });

export const Schemas$AuthUrlRequest = {
  in: SchemaIn$AuthUrlRequest,
  out: SchemaOut$AuthUrlRequest,
};

/**
 * CallbackRequest
 */
export type CallbackRequest = {
  /**
   * Conferencing application type
   */
  app: "msteams" | "zoom";
  code: string;
  state: string;
};

/**
 * @internal
 * CallbackRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CallbackRequest = {
  app: "msteams" | "zoom";
  code: string;
  state: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CallbackRequest
 */
const SchemaIn$CallbackRequest: z.ZodType<
  CallbackRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    app: z.enum(["msteams", "zoom"]),
    code: z.string(),
    state: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      app: "app",
      code: "code",
      state: "state",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CallbackRequest
 */
const SchemaOut$CallbackRequest: z.ZodType<
  External$CallbackRequest, // output type of this zod object
  z.ZodTypeDef,
  CallbackRequest // the object to be transformed
> = z
  .object({
    app: z.enum(["msteams", "zoom"]),
    code: z.string(),
    state: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      app: "app",
      code: "code",
      state: "state",
    });
  });

export const Schemas$CallbackRequest = {
  in: SchemaIn$CallbackRequest,
  out: SchemaOut$CallbackRequest,
};
