import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DisconnectRequest
 */
export type DisconnectRequest = {
  /**
   * Conferencing application type
   */
  app: "google-meet" | "msteams" | "zoom";
};

/**
 * @internal
 * DisconnectRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisconnectRequest = {
  app: "google-meet" | "msteams" | "zoom";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisconnectRequest
 */
const SchemaIn$DisconnectRequest: z.ZodType<
  DisconnectRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    app: z.enum(["google-meet", "msteams", "zoom"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      app: "app",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisconnectRequest
 */
const SchemaOut$DisconnectRequest: z.ZodType<
  External$DisconnectRequest, // output type of this zod object
  z.ZodTypeDef,
  DisconnectRequest // the object to be transformed
> = z
  .object({
    app: z.enum(["google-meet", "msteams", "zoom"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      app: "app",
    });
  });

export const Schemas$DisconnectRequest = {
  in: SchemaIn$DisconnectRequest,
  out: SchemaOut$DisconnectRequest,
};

/**
 * ConnectRequest
 */
export type ConnectRequest = {
  /**
   * Conferencing application type
   */
  app: "google-meet";
};

/**
 * @internal
 * ConnectRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConnectRequest = {
  app: "google-meet";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConnectRequest
 */
const SchemaIn$ConnectRequest: z.ZodType<
  ConnectRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    app: z.enum(["google-meet"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      app: "app",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConnectRequest
 */
const SchemaOut$ConnectRequest: z.ZodType<
  External$ConnectRequest, // output type of this zod object
  z.ZodTypeDef,
  ConnectRequest // the object to be transformed
> = z
  .object({
    app: z.enum(["google-meet"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      app: "app",
    });
  });

export const Schemas$ConnectRequest = {
  in: SchemaIn$ConnectRequest,
  out: SchemaOut$ConnectRequest,
};

/**
 * DefaultRequest
 */
export type DefaultRequest = {
  /**
   * Conferencing application type
   */
  app: "daily-video" | "google-meet" | "msteams" | "zoom";
};

/**
 * @internal
 * DefaultRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DefaultRequest = {
  app: "daily-video" | "google-meet" | "msteams" | "zoom";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DefaultRequest
 */
const SchemaIn$DefaultRequest: z.ZodType<
  DefaultRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    app: z.enum(["daily-video", "google-meet", "msteams", "zoom"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      app: "app",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DefaultRequest
 */
const SchemaOut$DefaultRequest: z.ZodType<
  External$DefaultRequest, // output type of this zod object
  z.ZodTypeDef,
  DefaultRequest // the object to be transformed
> = z
  .object({
    app: z.enum(["daily-video", "google-meet", "msteams", "zoom"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      app: "app",
    });
  });

export const Schemas$DefaultRequest = {
  in: SchemaIn$DefaultRequest,
  out: SchemaOut$DefaultRequest,
};
