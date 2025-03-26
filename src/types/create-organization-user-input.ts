import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateOrganizationUserInput
 */
export type CreateOrganizationUserInput = {
  /**
   * Application theme
   */
  appTheme?: string | null | undefined;
  autoAccept?: boolean | undefined;
  /**
   * Avatar URL
   */
  avatarUrl?: string | undefined;
  /**
   * Brand color in HEX format
   */
  brandColor?: string | undefined;
  /**
   * Dark brand color in HEX format
   */
  darkBrandColor?: string | undefined;
  /**
   * Default schedule ID
   */
  defaultScheduleId?: number | undefined;
  /**
   * User email address
   */
  email: string;
  /**
   * Hide branding
   */
  hideBranding?: boolean | undefined;
  /**
   * Locale
   */
  locale?: string | null | undefined;
  organizationRole?: ("ADMIN" | "MEMBER" | "OWNER") | undefined;
  /**
   * Theme
   */
  theme?: string | null | undefined;
  /**
   * Time format
   */
  timeFormat?: number | undefined;
  /**
   * Time zone
   */
  timeZone?: string | undefined;
  /**
   * Username
   */
  username?: string | undefined;
  /**
   * Preferred weekday
   */
  weekday?: string | undefined;
};

/**
 * @internal
 * CreateOrganizationUserInput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateOrganizationUserInput = {
  appTheme?: string | null | undefined;
  autoAccept?: boolean | undefined;
  avatarUrl?: string | undefined;
  brandColor?: string | undefined;
  darkBrandColor?: string | undefined;
  defaultScheduleId?: number | undefined;
  email: string;
  hideBranding?: boolean | undefined;
  locale?: string | null | undefined;
  organizationRole?: ("ADMIN" | "MEMBER" | "OWNER") | undefined;
  theme?: string | null | undefined;
  timeFormat?: number | undefined;
  timeZone?: string | undefined;
  username?: string | undefined;
  weekday?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateOrganizationUserInput
 */
const SchemaIn$CreateOrganizationUserInput: z.ZodType<
  CreateOrganizationUserInput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    appTheme: z.string().nullable().optional(),
    autoAccept: z.boolean().optional(),
    avatarUrl: z.string().optional(),
    brandColor: z.string().optional(),
    darkBrandColor: z.string().optional(),
    defaultScheduleId: z.number().optional(),
    email: z.string(),
    hideBranding: z.boolean().optional(),
    locale: z.string().nullable().optional(),
    organizationRole: z.enum(["ADMIN", "MEMBER", "OWNER"]).optional(),
    theme: z.string().nullable().optional(),
    timeFormat: z.number().optional(),
    timeZone: z.string().optional(),
    username: z.string().optional(),
    weekday: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      appTheme: "appTheme",
      autoAccept: "autoAccept",
      avatarUrl: "avatarUrl",
      brandColor: "brandColor",
      darkBrandColor: "darkBrandColor",
      defaultScheduleId: "defaultScheduleId",
      email: "email",
      hideBranding: "hideBranding",
      locale: "locale",
      organizationRole: "organizationRole",
      theme: "theme",
      timeFormat: "timeFormat",
      timeZone: "timeZone",
      username: "username",
      weekday: "weekday",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateOrganizationUserInput
 */
const SchemaOut$CreateOrganizationUserInput: z.ZodType<
  External$CreateOrganizationUserInput, // output type of this zod object
  z.ZodTypeDef,
  CreateOrganizationUserInput // the object to be transformed
> = z
  .object({
    appTheme: z.string().nullable().optional(),
    autoAccept: z.boolean().optional(),
    avatarUrl: z.string().optional(),
    brandColor: z.string().optional(),
    darkBrandColor: z.string().optional(),
    defaultScheduleId: z.number().optional(),
    email: z.string(),
    hideBranding: z.boolean().optional(),
    locale: z.string().nullable().optional(),
    organizationRole: z.enum(["ADMIN", "MEMBER", "OWNER"]).optional(),
    theme: z.string().nullable().optional(),
    timeFormat: z.number().optional(),
    timeZone: z.string().optional(),
    username: z.string().optional(),
    weekday: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      appTheme: "appTheme",
      autoAccept: "autoAccept",
      avatarUrl: "avatarUrl",
      brandColor: "brandColor",
      darkBrandColor: "darkBrandColor",
      defaultScheduleId: "defaultScheduleId",
      email: "email",
      hideBranding: "hideBranding",
      locale: "locale",
      organizationRole: "organizationRole",
      theme: "theme",
      timeFormat: "timeFormat",
      timeZone: "timeZone",
      username: "username",
      weekday: "weekday",
    });
  });

export const Schemas$CreateOrganizationUserInput = {
  in: SchemaIn$CreateOrganizationUserInput,
  out: SchemaOut$CreateOrganizationUserInput,
};
