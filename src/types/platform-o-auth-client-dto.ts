import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * PlatformOAuthClientDto
 */
export type PlatformOAuthClientDto = {
  /**
   * If enabled, when creating a managed user the managed user will have 4 default event types: 30 and 60 minutes without Cal video, 30 and 60 minutes with Cal video. Leave this disabled if you want to create a managed user and then manually create event types for the user.
   */
  areDefaultEventTypesEnabled: boolean;
  areEmailsEnabled: boolean;
  bookingCancelRedirectUri?: string | undefined;
  bookingRedirectUri?: string | undefined;
  bookingRescheduleRedirectUri?: string | undefined;
  createdAt: string;
  id: string;
  logo?: Record<string, any> | undefined;
  name: string;
  organizationId: number;
  /**
   * Array of permission keys like ["BOOKING_READ", "BOOKING_WRITE"]
   */
  permissions: (
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
  secret: string;
};

/**
 * @internal
 * PlatformOAuthClientDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PlatformOAuthClientDto = {
  areDefaultEventTypesEnabled: boolean;
  areEmailsEnabled: boolean;
  bookingCancelRedirectUri?: string | undefined;
  bookingRedirectUri?: string | undefined;
  bookingRescheduleRedirectUri?: string | undefined;
  createdAt: string;
  id: string;
  logo?: Record<string, any> | undefined;
  name: string;
  organizationId: number;
  permissions: (
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
  secret: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PlatformOAuthClientDto
 */
const SchemaIn$PlatformOAuthClientDto: z.ZodType<
  PlatformOAuthClientDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    areDefaultEventTypesEnabled: z.boolean(),
    areEmailsEnabled: z.boolean(),
    bookingCancelRedirectUri: z.string().optional(),
    bookingRedirectUri: z.string().optional(),
    bookingRescheduleRedirectUri: z.string().optional(),
    createdAt: z.string(),
    id: z.string(),
    logo: z.record(z.string(), z.any()).optional(),
    name: z.string(),
    organizationId: z.number(),
    permissions: z.array(
      z.enum([
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
    secret: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      areDefaultEventTypesEnabled: "areDefaultEventTypesEnabled",
      areEmailsEnabled: "areEmailsEnabled",
      bookingCancelRedirectUri: "bookingCancelRedirectUri",
      bookingRedirectUri: "bookingRedirectUri",
      bookingRescheduleRedirectUri: "bookingRescheduleRedirectUri",
      createdAt: "createdAt",
      id: "id",
      logo: "logo",
      name: "name",
      organizationId: "organizationId",
      permissions: "permissions",
      redirectUris: "redirectUris",
      secret: "secret",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PlatformOAuthClientDto
 */
const SchemaOut$PlatformOAuthClientDto: z.ZodType<
  External$PlatformOAuthClientDto, // output type of this zod object
  z.ZodTypeDef,
  PlatformOAuthClientDto // the object to be transformed
> = z
  .object({
    areDefaultEventTypesEnabled: z.boolean(),
    areEmailsEnabled: z.boolean(),
    bookingCancelRedirectUri: z.string().optional(),
    bookingRedirectUri: z.string().optional(),
    bookingRescheduleRedirectUri: z.string().optional(),
    createdAt: z.string(),
    id: z.string(),
    logo: z.record(z.string(), z.any()).optional(),
    name: z.string(),
    organizationId: z.number(),
    permissions: z.array(
      z.enum([
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
    secret: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      areDefaultEventTypesEnabled: "areDefaultEventTypesEnabled",
      areEmailsEnabled: "areEmailsEnabled",
      bookingCancelRedirectUri: "bookingCancelRedirectUri",
      bookingRedirectUri: "bookingRedirectUri",
      bookingRescheduleRedirectUri: "bookingRescheduleRedirectUri",
      createdAt: "createdAt",
      id: "id",
      logo: "logo",
      name: "name",
      organizationId: "organizationId",
      permissions: "permissions",
      redirectUris: "redirectUris",
      secret: "secret",
    });
  });

export const Schemas$PlatformOAuthClientDto = {
  in: SchemaIn$PlatformOAuthClientDto,
  out: SchemaOut$PlatformOAuthClientDto,
};
