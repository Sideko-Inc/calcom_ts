import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  teamId: number;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  teamId: number;
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
    teamId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      teamId: "teamId",
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
    teamId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      teamId: "teamId",
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
  teamId: number;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  teamId: number;
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
    teamId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      teamId: "teamId",
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
    teamId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      teamId: "teamId",
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
  appIconLogo?: string | undefined;
  appLogo?: string | undefined;
  /**
   * URL of the teams banner image which is shown on booker
   */
  bannerUrl?: string | undefined;
  bio?: string | undefined;
  bookingLimits?: string | undefined;
  brandColor?: string | undefined;
  calVideoLogo?: string | undefined;
  darkBrandColor?: string | undefined;
  hideBookATeamMember?: boolean | undefined;
  hideBranding?: boolean | undefined;
  includeManagedEventsInLimits?: boolean | undefined;
  isPrivate?: boolean | undefined;
  /**
   * URL of the teams logo image
   */
  logoUrl?: string | undefined;
  /**
   * You can store any additional data you want here.
   * Metadata must have at most 50 keys, each key up to 40 characters.
   * Values can be strings (up to 500 characters), numbers, or booleans.
   */
  metadata?: Record<string, any> | undefined;
  /**
   * Name of the team
   */
  name?: string | undefined;
  /**
   * Team slug
   */
  slug?: string | undefined;
  theme?: string | undefined;
  timeFormat?: number | undefined;
  /**
   * Timezone is used to create teams's default schedule from Monday to Friday from 9AM to 5PM. It will default to Europe/London if not passed.
   */
  timeZone?: string | undefined;
  weekStart?: string | undefined;
  teamId: number;
};

/**
 * @internal
 * PatchRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PatchRequest = {
  appIconLogo?: string | undefined;
  appLogo?: string | undefined;
  bannerUrl?: string | undefined;
  bio?: string | undefined;
  bookingLimits?: string | undefined;
  brandColor?: string | undefined;
  calVideoLogo?: string | undefined;
  darkBrandColor?: string | undefined;
  hideBookATeamMember?: boolean | undefined;
  hideBranding?: boolean | undefined;
  includeManagedEventsInLimits?: boolean | undefined;
  isPrivate?: boolean | undefined;
  logoUrl?: string | undefined;
  metadata?: Record<string, any> | undefined;
  name?: string | undefined;
  slug?: string | undefined;
  theme?: string | undefined;
  timeFormat?: number | undefined;
  timeZone?: string | undefined;
  weekStart?: string | undefined;
  teamId: number;
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
    appIconLogo: z.string().optional(),
    appLogo: z.string().optional(),
    bannerUrl: z.string().optional(),
    bio: z.string().optional(),
    bookingLimits: z.string().optional(),
    brandColor: z.string().optional(),
    calVideoLogo: z.string().optional(),
    darkBrandColor: z.string().optional(),
    hideBookATeamMember: z.boolean().optional(),
    hideBranding: z.boolean().optional(),
    includeManagedEventsInLimits: z.boolean().optional(),
    isPrivate: z.boolean().optional(),
    logoUrl: z.string().optional(),
    metadata: z.record(z.string(), z.any()).optional(),
    name: z.string().optional(),
    slug: z.string().optional(),
    theme: z.string().optional(),
    timeFormat: z.number().optional(),
    timeZone: z.string().optional(),
    weekStart: z.string().optional(),
    teamId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      appIconLogo: "appIconLogo",
      appLogo: "appLogo",
      bannerUrl: "bannerUrl",
      bio: "bio",
      bookingLimits: "bookingLimits",
      brandColor: "brandColor",
      calVideoLogo: "calVideoLogo",
      darkBrandColor: "darkBrandColor",
      hideBookATeamMember: "hideBookATeamMember",
      hideBranding: "hideBranding",
      includeManagedEventsInLimits: "includeManagedEventsInLimits",
      isPrivate: "isPrivate",
      logoUrl: "logoUrl",
      metadata: "metadata",
      name: "name",
      slug: "slug",
      theme: "theme",
      timeFormat: "timeFormat",
      timeZone: "timeZone",
      weekStart: "weekStart",
      teamId: "teamId",
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
    appIconLogo: z.string().optional(),
    appLogo: z.string().optional(),
    bannerUrl: z.string().optional(),
    bio: z.string().optional(),
    bookingLimits: z.string().optional(),
    brandColor: z.string().optional(),
    calVideoLogo: z.string().optional(),
    darkBrandColor: z.string().optional(),
    hideBookATeamMember: z.boolean().optional(),
    hideBranding: z.boolean().optional(),
    includeManagedEventsInLimits: z.boolean().optional(),
    isPrivate: z.boolean().optional(),
    logoUrl: z.string().optional(),
    metadata: z.record(z.string(), z.any()).optional(),
    name: z.string().optional(),
    slug: z.string().optional(),
    theme: z.string().optional(),
    timeFormat: z.number().optional(),
    timeZone: z.string().optional(),
    weekStart: z.string().optional(),
    teamId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      appIconLogo: "appIconLogo",
      appLogo: "appLogo",
      bannerUrl: "bannerUrl",
      bio: "bio",
      bookingLimits: "bookingLimits",
      brandColor: "brandColor",
      calVideoLogo: "calVideoLogo",
      darkBrandColor: "darkBrandColor",
      hideBookATeamMember: "hideBookATeamMember",
      hideBranding: "hideBranding",
      includeManagedEventsInLimits: "includeManagedEventsInLimits",
      isPrivate: "isPrivate",
      logoUrl: "logoUrl",
      metadata: "metadata",
      name: "name",
      slug: "slug",
      theme: "theme",
      timeFormat: "timeFormat",
      timeZone: "timeZone",
      weekStart: "weekStart",
      teamId: "teamId",
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
  appIconLogo?: string | undefined;
  appLogo?: string | undefined;
  autoAcceptCreator?: boolean | undefined;
  /**
   * URL of the teams banner image which is shown on booker
   */
  bannerUrl?: string | undefined;
  bio?: string | undefined;
  brandColor?: string | undefined;
  calVideoLogo?: string | undefined;
  darkBrandColor?: string | undefined;
  hideBookATeamMember?: boolean | undefined;
  hideBranding?: boolean | undefined;
  isPrivate?: boolean | undefined;
  /**
   * URL of the teams logo image
   */
  logoUrl?: string | undefined;
  /**
   * You can store any additional data you want here.
   * Metadata must have at most 50 keys, each key up to 40 characters.
   * Values can be strings (up to 500 characters), numbers, or booleans.
   */
  metadata?: Record<string, any> | undefined;
  /**
   * Name of the team
   */
  name: string;
  /**
   * Team slug
   */
  slug?: string | undefined;
  theme?: string | undefined;
  timeFormat?: number | undefined;
  /**
   * Timezone is used to create teams's default schedule from Monday to Friday from 9AM to 5PM. It will default to Europe/London if not passed.
   */
  timeZone?: string | undefined;
  weekStart?: string | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  appIconLogo?: string | undefined;
  appLogo?: string | undefined;
  autoAcceptCreator?: boolean | undefined;
  bannerUrl?: string | undefined;
  bio?: string | undefined;
  brandColor?: string | undefined;
  calVideoLogo?: string | undefined;
  darkBrandColor?: string | undefined;
  hideBookATeamMember?: boolean | undefined;
  hideBranding?: boolean | undefined;
  isPrivate?: boolean | undefined;
  logoUrl?: string | undefined;
  metadata?: Record<string, any> | undefined;
  name: string;
  slug?: string | undefined;
  theme?: string | undefined;
  timeFormat?: number | undefined;
  timeZone?: string | undefined;
  weekStart?: string | undefined;
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
    appIconLogo: z.string().optional(),
    appLogo: z.string().optional(),
    autoAcceptCreator: z.boolean().optional(),
    bannerUrl: z.string().optional(),
    bio: z.string().optional(),
    brandColor: z.string().optional(),
    calVideoLogo: z.string().optional(),
    darkBrandColor: z.string().optional(),
    hideBookATeamMember: z.boolean().optional(),
    hideBranding: z.boolean().optional(),
    isPrivate: z.boolean().optional(),
    logoUrl: z.string().optional(),
    metadata: z.record(z.string(), z.any()).optional(),
    name: z.string(),
    slug: z.string().optional(),
    theme: z.string().optional(),
    timeFormat: z.number().optional(),
    timeZone: z.string().optional(),
    weekStart: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      appIconLogo: "appIconLogo",
      appLogo: "appLogo",
      autoAcceptCreator: "autoAcceptCreator",
      bannerUrl: "bannerUrl",
      bio: "bio",
      brandColor: "brandColor",
      calVideoLogo: "calVideoLogo",
      darkBrandColor: "darkBrandColor",
      hideBookATeamMember: "hideBookATeamMember",
      hideBranding: "hideBranding",
      isPrivate: "isPrivate",
      logoUrl: "logoUrl",
      metadata: "metadata",
      name: "name",
      slug: "slug",
      theme: "theme",
      timeFormat: "timeFormat",
      timeZone: "timeZone",
      weekStart: "weekStart",
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
    appIconLogo: z.string().optional(),
    appLogo: z.string().optional(),
    autoAcceptCreator: z.boolean().optional(),
    bannerUrl: z.string().optional(),
    bio: z.string().optional(),
    brandColor: z.string().optional(),
    calVideoLogo: z.string().optional(),
    darkBrandColor: z.string().optional(),
    hideBookATeamMember: z.boolean().optional(),
    hideBranding: z.boolean().optional(),
    isPrivate: z.boolean().optional(),
    logoUrl: z.string().optional(),
    metadata: z.record(z.string(), z.any()).optional(),
    name: z.string(),
    slug: z.string().optional(),
    theme: z.string().optional(),
    timeFormat: z.number().optional(),
    timeZone: z.string().optional(),
    weekStart: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      appIconLogo: "appIconLogo",
      appLogo: "appLogo",
      autoAcceptCreator: "autoAcceptCreator",
      bannerUrl: "bannerUrl",
      bio: "bio",
      brandColor: "brandColor",
      calVideoLogo: "calVideoLogo",
      darkBrandColor: "darkBrandColor",
      hideBookATeamMember: "hideBookATeamMember",
      hideBranding: "hideBranding",
      isPrivate: "isPrivate",
      logoUrl: "logoUrl",
      metadata: "metadata",
      name: "name",
      slug: "slug",
      theme: "theme",
      timeFormat: "timeFormat",
      timeZone: "timeZone",
      weekStart: "weekStart",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
