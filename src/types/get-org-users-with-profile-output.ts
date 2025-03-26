import {
  External$ProfileOutput,
  ProfileOutput,
  Schemas$ProfileOutput,
} from "./profile-output";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetOrgUsersWithProfileOutput
 */
export type GetOrgUsersWithProfileOutput = {
  /**
   * Whether dynamic booking is allowed for the user
   */
  allowDynamicBooking?: boolean | null | undefined;
  /**
   * The app theme of the user
   */
  appTheme?: string | null | undefined;
  /**
   * The URL of the user's avatar
   */
  avatarUrl?: string | null | undefined;
  /**
   * The bio of the user
   */
  bio?: string | null | undefined;
  /**
   * The brand color of the user
   */
  brandColor?: string | null | undefined;
  /**
   * The date when the user was created
   */
  createdDate: string;
  /**
   * The dark brand color of the user
   */
  darkBrandColor?: string | null | undefined;
  /**
   * The ID of the default schedule for the user
   */
  defaultScheduleId?: number | null | undefined;
  /**
   * The email of the user
   */
  email: string;
  /**
   * The date when the email was verified
   */
  emailVerified?: string | null | undefined;
  /**
   * Whether to hide branding for the user
   */
  hideBranding: boolean;
  /**
   * The ID of the user
   */
  id: number;
  /**
   * The ID of the user who invited this user
   */
  invitedTo?: number | null | undefined;
  /**
   * The locale of the user
   */
  locale?: string | null | undefined;
  /**
   * The name of the user
   */
  name?: string | null | undefined;
  profile: ProfileOutput;
  /**
   * The theme of the user
   */
  theme?: string | null | undefined;
  /**
   * The time format of the user
   */
  timeFormat?: number | null | undefined;
  /**
   * The time zone of the user
   */
  timeZone: string;
  /**
   * The username of the user
   */
  username?: string | null | undefined;
  /**
   * Whether the user is verified
   */
  verified?: boolean | null | undefined;
  /**
   * The week start day of the user
   */
  weekStart: string;
};

/**
 * @internal
 * GetOrgUsersWithProfileOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetOrgUsersWithProfileOutput = {
  allowDynamicBooking?: boolean | null | undefined;
  appTheme?: string | null | undefined;
  avatarUrl?: string | null | undefined;
  bio?: string | null | undefined;
  brandColor?: string | null | undefined;
  createdDate: string;
  darkBrandColor?: string | null | undefined;
  defaultScheduleId?: number | null | undefined;
  email: string;
  emailVerified?: string | null | undefined;
  hideBranding: boolean;
  id: number;
  invitedTo?: number | null | undefined;
  locale?: string | null | undefined;
  name?: string | null | undefined;
  profile: External$ProfileOutput;
  theme?: string | null | undefined;
  timeFormat?: number | null | undefined;
  timeZone: string;
  username?: string | null | undefined;
  verified?: boolean | null | undefined;
  weekStart: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetOrgUsersWithProfileOutput
 */
const SchemaIn$GetOrgUsersWithProfileOutput: z.ZodType<
  GetOrgUsersWithProfileOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    allowDynamicBooking: z.boolean().nullable().optional(),
    appTheme: z.string().nullable().optional(),
    avatarUrl: z.string().nullable().optional(),
    bio: z.string().nullable().optional(),
    brandColor: z.string().nullable().optional(),
    createdDate: z.string(),
    darkBrandColor: z.string().nullable().optional(),
    defaultScheduleId: z.number().nullable().optional(),
    email: z.string(),
    emailVerified: z.string().nullable().optional(),
    hideBranding: z.boolean(),
    id: z.number(),
    invitedTo: z.number().nullable().optional(),
    locale: z.string().nullable().optional(),
    name: z.string().nullable().optional(),
    profile: Schemas$ProfileOutput.in,
    theme: z.string().nullable().optional(),
    timeFormat: z.number().nullable().optional(),
    timeZone: z.string(),
    username: z.string().nullable().optional(),
    verified: z.boolean().nullable().optional(),
    weekStart: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allowDynamicBooking: "allowDynamicBooking",
      appTheme: "appTheme",
      avatarUrl: "avatarUrl",
      bio: "bio",
      brandColor: "brandColor",
      createdDate: "createdDate",
      darkBrandColor: "darkBrandColor",
      defaultScheduleId: "defaultScheduleId",
      email: "email",
      emailVerified: "emailVerified",
      hideBranding: "hideBranding",
      id: "id",
      invitedTo: "invitedTo",
      locale: "locale",
      name: "name",
      profile: "profile",
      theme: "theme",
      timeFormat: "timeFormat",
      timeZone: "timeZone",
      username: "username",
      verified: "verified",
      weekStart: "weekStart",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetOrgUsersWithProfileOutput
 */
const SchemaOut$GetOrgUsersWithProfileOutput: z.ZodType<
  External$GetOrgUsersWithProfileOutput, // output type of this zod object
  z.ZodTypeDef,
  GetOrgUsersWithProfileOutput // the object to be transformed
> = z
  .object({
    allowDynamicBooking: z.boolean().nullable().optional(),
    appTheme: z.string().nullable().optional(),
    avatarUrl: z.string().nullable().optional(),
    bio: z.string().nullable().optional(),
    brandColor: z.string().nullable().optional(),
    createdDate: z.string(),
    darkBrandColor: z.string().nullable().optional(),
    defaultScheduleId: z.number().nullable().optional(),
    email: z.string(),
    emailVerified: z.string().nullable().optional(),
    hideBranding: z.boolean(),
    id: z.number(),
    invitedTo: z.number().nullable().optional(),
    locale: z.string().nullable().optional(),
    name: z.string().nullable().optional(),
    profile: Schemas$ProfileOutput.out,
    theme: z.string().nullable().optional(),
    timeFormat: z.number().nullable().optional(),
    timeZone: z.string(),
    username: z.string().nullable().optional(),
    verified: z.boolean().nullable().optional(),
    weekStart: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allowDynamicBooking: "allowDynamicBooking",
      appTheme: "appTheme",
      avatarUrl: "avatarUrl",
      bio: "bio",
      brandColor: "brandColor",
      createdDate: "createdDate",
      darkBrandColor: "darkBrandColor",
      defaultScheduleId: "defaultScheduleId",
      email: "email",
      emailVerified: "emailVerified",
      hideBranding: "hideBranding",
      id: "id",
      invitedTo: "invitedTo",
      locale: "locale",
      name: "name",
      profile: "profile",
      theme: "theme",
      timeFormat: "timeFormat",
      timeZone: "timeZone",
      username: "username",
      verified: "verified",
      weekStart: "weekStart",
    });
  });

export const Schemas$GetOrgUsersWithProfileOutput = {
  in: SchemaIn$GetOrgUsersWithProfileOutput,
  out: SchemaOut$GetOrgUsersWithProfileOutput,
};
