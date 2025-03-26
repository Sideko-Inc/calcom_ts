import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * TeamOutputDto
 */
export type TeamOutputDto = {
  appIconLogo?: string | undefined;
  appLogo?: string | undefined;
  bannerUrl?: string | undefined;
  bio?: string | undefined;
  brandColor?: string | undefined;
  calVideoLogo?: string | undefined;
  darkBrandColor?: string | undefined;
  hideBookATeamMember?: boolean | undefined;
  hideBranding?: boolean | undefined;
  id: number;
  isOrganization: boolean;
  isPrivate?: boolean | undefined;
  logoUrl?: string | undefined;
  metadata?: Record<string, any> | undefined;
  name: string;
  parentId?: number | undefined;
  slug?: string | undefined;
  theme?: string | undefined;
  timeFormat?: number | undefined;
  timeZone?: string | undefined;
  weekStart?: string | undefined;
};

/**
 * @internal
 * TeamOutputDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TeamOutputDto = {
  appIconLogo?: string | undefined;
  appLogo?: string | undefined;
  bannerUrl?: string | undefined;
  bio?: string | undefined;
  brandColor?: string | undefined;
  calVideoLogo?: string | undefined;
  darkBrandColor?: string | undefined;
  hideBookATeamMember?: boolean | undefined;
  hideBranding?: boolean | undefined;
  id: number;
  isOrganization: boolean;
  isPrivate?: boolean | undefined;
  logoUrl?: string | undefined;
  metadata?: Record<string, any> | undefined;
  name: string;
  parentId?: number | undefined;
  slug?: string | undefined;
  theme?: string | undefined;
  timeFormat?: number | undefined;
  timeZone?: string | undefined;
  weekStart?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TeamOutputDto
 */
const SchemaIn$TeamOutputDto: z.ZodType<
  TeamOutputDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    appIconLogo: z.string().optional(),
    appLogo: z.string().optional(),
    bannerUrl: z.string().optional(),
    bio: z.string().optional(),
    brandColor: z.string().optional(),
    calVideoLogo: z.string().optional(),
    darkBrandColor: z.string().optional(),
    hideBookATeamMember: z.boolean().optional(),
    hideBranding: z.boolean().optional(),
    id: z.number(),
    isOrganization: z.boolean(),
    isPrivate: z.boolean().optional(),
    logoUrl: z.string().optional(),
    metadata: z.record(z.string(), z.any()).optional(),
    name: z.string(),
    parentId: z.number().optional(),
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
      brandColor: "brandColor",
      calVideoLogo: "calVideoLogo",
      darkBrandColor: "darkBrandColor",
      hideBookATeamMember: "hideBookATeamMember",
      hideBranding: "hideBranding",
      id: "id",
      isOrganization: "isOrganization",
      isPrivate: "isPrivate",
      logoUrl: "logoUrl",
      metadata: "metadata",
      name: "name",
      parentId: "parentId",
      slug: "slug",
      theme: "theme",
      timeFormat: "timeFormat",
      timeZone: "timeZone",
      weekStart: "weekStart",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TeamOutputDto
 */
const SchemaOut$TeamOutputDto: z.ZodType<
  External$TeamOutputDto, // output type of this zod object
  z.ZodTypeDef,
  TeamOutputDto // the object to be transformed
> = z
  .object({
    appIconLogo: z.string().optional(),
    appLogo: z.string().optional(),
    bannerUrl: z.string().optional(),
    bio: z.string().optional(),
    brandColor: z.string().optional(),
    calVideoLogo: z.string().optional(),
    darkBrandColor: z.string().optional(),
    hideBookATeamMember: z.boolean().optional(),
    hideBranding: z.boolean().optional(),
    id: z.number(),
    isOrganization: z.boolean(),
    isPrivate: z.boolean().optional(),
    logoUrl: z.string().optional(),
    metadata: z.record(z.string(), z.any()).optional(),
    name: z.string(),
    parentId: z.number().optional(),
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
      brandColor: "brandColor",
      calVideoLogo: "calVideoLogo",
      darkBrandColor: "darkBrandColor",
      hideBookATeamMember: "hideBookATeamMember",
      hideBranding: "hideBranding",
      id: "id",
      isOrganization: "isOrganization",
      isPrivate: "isPrivate",
      logoUrl: "logoUrl",
      metadata: "metadata",
      name: "name",
      parentId: "parentId",
      slug: "slug",
      theme: "theme",
      timeFormat: "timeFormat",
      timeZone: "timeZone",
      weekStart: "weekStart",
    });
  });

export const Schemas$TeamOutputDto = {
  in: SchemaIn$TeamOutputDto,
  out: SchemaOut$TeamOutputDto,
};
