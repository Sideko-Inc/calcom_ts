import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * UpdateOrgTeamDto
 */
export type UpdateOrgTeamDto = {
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
};

/**
 * @internal
 * UpdateOrgTeamDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateOrgTeamDto = {
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
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateOrgTeamDto
 */
const SchemaIn$UpdateOrgTeamDto: z.ZodType<
  UpdateOrgTeamDto, // output type of this zod object
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
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateOrgTeamDto
 */
const SchemaOut$UpdateOrgTeamDto: z.ZodType<
  External$UpdateOrgTeamDto, // output type of this zod object
  z.ZodTypeDef,
  UpdateOrgTeamDto // the object to be transformed
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
    });
  });

export const Schemas$UpdateOrgTeamDto = {
  in: SchemaIn$UpdateOrgTeamDto,
  out: SchemaOut$UpdateOrgTeamDto,
};
