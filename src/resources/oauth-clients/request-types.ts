import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  clientId: string;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  clientId: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeleteRequest
 */
const SchemaIn$DeleteRequest: z.ZodType<
  DeleteRequest, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeleteRequest
 */
const SchemaOut$DeleteRequest: z.ZodType<
  External$DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  DeleteRequest // the object to be transformed
> = z
  .object({
    clientId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientId: "clientId",
    });
  });

export const Schemas$DeleteRequest = {
  in: SchemaIn$DeleteRequest,
  out: SchemaOut$DeleteRequest,
};

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
 * PatchRequest
 */
export type PatchRequest = {
  /**
   * If true, when creating a managed user the managed user will have 4 default event types: 30 and 60 minutes without Cal video, 30 and 60 minutes with Cal video. Set this as false if you want to create a managed user and then manually create event types for the user.
   */
  areDefaultEventTypesEnabled?: boolean | undefined;
  areEmailsEnabled?: boolean | undefined;
  bookingCancelRedirectUri?: string | undefined;
  bookingRedirectUri?: string | undefined;
  bookingRescheduleRedirectUri?: string | undefined;
  logo?: string | undefined;
  name?: string | undefined;
  redirectUris?: string[] | undefined;
  clientId: string;
};

/**
 * @internal
 * PatchRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PatchRequest = {
  areDefaultEventTypesEnabled?: boolean | undefined;
  areEmailsEnabled?: boolean | undefined;
  bookingCancelRedirectUri?: string | undefined;
  bookingRedirectUri?: string | undefined;
  bookingRescheduleRedirectUri?: string | undefined;
  logo?: string | undefined;
  name?: string | undefined;
  redirectUris?: string[] | undefined;
  clientId: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PatchRequest
 */
const SchemaIn$PatchRequest: z.ZodType<
  PatchRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    areDefaultEventTypesEnabled: z.boolean().optional(),
    areEmailsEnabled: z.boolean().optional(),
    bookingCancelRedirectUri: z.string().optional(),
    bookingRedirectUri: z.string().optional(),
    bookingRescheduleRedirectUri: z.string().optional(),
    logo: z.string().optional(),
    name: z.string().optional(),
    redirectUris: z.array(z.string()).optional(),
    clientId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      areDefaultEventTypesEnabled: "areDefaultEventTypesEnabled",
      areEmailsEnabled: "areEmailsEnabled",
      bookingCancelRedirectUri: "bookingCancelRedirectUri",
      bookingRedirectUri: "bookingRedirectUri",
      bookingRescheduleRedirectUri: "bookingRescheduleRedirectUri",
      logo: "logo",
      name: "name",
      redirectUris: "redirectUris",
      clientId: "clientId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PatchRequest
 */
const SchemaOut$PatchRequest: z.ZodType<
  External$PatchRequest, // output type of this zod object
  z.ZodTypeDef,
  PatchRequest // the object to be transformed
> = z
  .object({
    areDefaultEventTypesEnabled: z.boolean().optional(),
    areEmailsEnabled: z.boolean().optional(),
    bookingCancelRedirectUri: z.string().optional(),
    bookingRedirectUri: z.string().optional(),
    bookingRescheduleRedirectUri: z.string().optional(),
    logo: z.string().optional(),
    name: z.string().optional(),
    redirectUris: z.array(z.string()).optional(),
    clientId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      areDefaultEventTypesEnabled: "areDefaultEventTypesEnabled",
      areEmailsEnabled: "areEmailsEnabled",
      bookingCancelRedirectUri: "bookingCancelRedirectUri",
      bookingRedirectUri: "bookingRedirectUri",
      bookingRescheduleRedirectUri: "bookingRescheduleRedirectUri",
      logo: "logo",
      name: "name",
      redirectUris: "redirectUris",
      clientId: "clientId",
    });
  });

export const Schemas$PatchRequest = {
  in: SchemaIn$PatchRequest,
  out: SchemaOut$PatchRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
  /**
   * If true, when creating a managed user the managed user will have 4 default event types: 30 and 60 minutes without Cal video, 30 and 60 minutes with Cal video. Set this as false if you want to create a managed user and then manually create event types for the user.
   */
  areDefaultEventTypesEnabled?: boolean | undefined;
  areEmailsEnabled?: boolean | undefined;
  bookingCancelRedirectUri?: string | undefined;
  bookingRedirectUri?: string | undefined;
  bookingRescheduleRedirectUri?: string | undefined;
  logo?: string | undefined;
  name: string;
  /**
   * Array of permission keys like ["BOOKING_READ", "BOOKING_WRITE"]. Use ["*"] to grant all permissions.
   */
  permissions: (
    | "*"
    | "APPS_READ"
    | "APPS_WRITE"
    | "BOOKING_READ"
    | "BOOKING_WRITE"
    | "EVENT_TYPE_READ"
    | "EVENT_TYPE_WRITE"
    | "PROFILE_READ"
    | "PROFILE_WRITE"
    | "SCHEDULE_READ"
    | "SCHEDULE_WRITE"
  )[];
  redirectUris: string[];
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  areDefaultEventTypesEnabled?: boolean | undefined;
  areEmailsEnabled?: boolean | undefined;
  bookingCancelRedirectUri?: string | undefined;
  bookingRedirectUri?: string | undefined;
  bookingRescheduleRedirectUri?: string | undefined;
  logo?: string | undefined;
  name: string;
  permissions: (
    | "*"
    | "APPS_READ"
    | "APPS_WRITE"
    | "BOOKING_READ"
    | "BOOKING_WRITE"
    | "EVENT_TYPE_READ"
    | "EVENT_TYPE_WRITE"
    | "PROFILE_READ"
    | "PROFILE_WRITE"
    | "SCHEDULE_READ"
    | "SCHEDULE_WRITE"
  )[];
  redirectUris: string[];
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
    areDefaultEventTypesEnabled: z.boolean().optional(),
    areEmailsEnabled: z.boolean().optional(),
    bookingCancelRedirectUri: z.string().optional(),
    bookingRedirectUri: z.string().optional(),
    bookingRescheduleRedirectUri: z.string().optional(),
    logo: z.string().optional(),
    name: z.string(),
    permissions: z.array(
      z.enum([
        "*",
        "APPS_READ",
        "APPS_WRITE",
        "BOOKING_READ",
        "BOOKING_WRITE",
        "EVENT_TYPE_READ",
        "EVENT_TYPE_WRITE",
        "PROFILE_READ",
        "PROFILE_WRITE",
        "SCHEDULE_READ",
        "SCHEDULE_WRITE",
      ]),
    ),
    redirectUris: z.array(z.string()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      areDefaultEventTypesEnabled: "areDefaultEventTypesEnabled",
      areEmailsEnabled: "areEmailsEnabled",
      bookingCancelRedirectUri: "bookingCancelRedirectUri",
      bookingRedirectUri: "bookingRedirectUri",
      bookingRescheduleRedirectUri: "bookingRescheduleRedirectUri",
      logo: "logo",
      name: "name",
      permissions: "permissions",
      redirectUris: "redirectUris",
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
    areDefaultEventTypesEnabled: z.boolean().optional(),
    areEmailsEnabled: z.boolean().optional(),
    bookingCancelRedirectUri: z.string().optional(),
    bookingRedirectUri: z.string().optional(),
    bookingRescheduleRedirectUri: z.string().optional(),
    logo: z.string().optional(),
    name: z.string(),
    permissions: z.array(
      z.enum([
        "*",
        "APPS_READ",
        "APPS_WRITE",
        "BOOKING_READ",
        "BOOKING_WRITE",
        "EVENT_TYPE_READ",
        "EVENT_TYPE_WRITE",
        "PROFILE_READ",
        "PROFILE_WRITE",
        "SCHEDULE_READ",
        "SCHEDULE_WRITE",
      ]),
    ),
    redirectUris: z.array(z.string()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      areDefaultEventTypesEnabled: "areDefaultEventTypesEnabled",
      areEmailsEnabled: "areEmailsEnabled",
      bookingCancelRedirectUri: "bookingCancelRedirectUri",
      bookingRedirectUri: "bookingRedirectUri",
      bookingRescheduleRedirectUri: "bookingRescheduleRedirectUri",
      logo: "logo",
      name: "name",
      permissions: "permissions",
      redirectUris: "redirectUris",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
