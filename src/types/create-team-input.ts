import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateTeamInput
 */
export type CreateTeamInput = {
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
 * CreateTeamInput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateTeamInput = {
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
 * Takes network data, validates it, and transforms keys to match typescript object CreateTeamInput
 */
const SchemaIn$CreateTeamInput: z.ZodType<
  CreateTeamInput, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateTeamInput
 */
const SchemaOut$CreateTeamInput: z.ZodType<
  External$CreateTeamInput, // output type of this zod object
  z.ZodTypeDef,
  CreateTeamInput // the object to be transformed
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

export const Schemas$CreateTeamInput = {
  in: SchemaIn$CreateTeamInput,
  out: SchemaOut$CreateTeamInput,
};
