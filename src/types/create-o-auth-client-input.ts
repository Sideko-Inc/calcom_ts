import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateOAuthClientInput
 */
export type CreateOAuthClientInput = {
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
 * CreateOAuthClientInput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateOAuthClientInput = {
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
 * Takes network data, validates it, and transforms keys to match typescript object CreateOAuthClientInput
 */
const SchemaIn$CreateOAuthClientInput: z.ZodType<
  CreateOAuthClientInput, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateOAuthClientInput
 */
const SchemaOut$CreateOAuthClientInput: z.ZodType<
  External$CreateOAuthClientInput, // output type of this zod object
  z.ZodTypeDef,
  CreateOAuthClientInput // the object to be transformed
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

export const Schemas$CreateOAuthClientInput = {
  in: SchemaIn$CreateOAuthClientInput,
  out: SchemaOut$CreateOAuthClientInput,
};
