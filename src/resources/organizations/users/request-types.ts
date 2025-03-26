import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  orgId: number;
  userId: number;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  orgId: number;
  userId: number;
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
    orgId: z.number(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      userId: "userId",
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
    orgId: z.number(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      userId: "userId",
    });
  });

export const Schemas$DeleteRequest = {
  in: SchemaIn$DeleteRequest,
  out: SchemaOut$DeleteRequest,
};

/**
 * ListRequest
 */
export type ListRequest = {
  orgId: number;
  /**
   * The email address or an array of email addresses to filter by
   */
  emails?: string[] | undefined;
  /**
   * The number of items to skip
   */
  skip?: number | undefined;
  /**
   * The number of items to return
   */
  take?: number | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  orgId: number;
  emails?: string[] | undefined;
  skip?: number | undefined;
  take?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    orgId: z.number(),
    emails: z.array(z.string()).optional(),
    skip: z.number().optional(),
    take: z.number().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      emails: "emails",
      skip: "skip",
      take: "take",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    orgId: z.number(),
    emails: z.array(z.string()).optional(),
    skip: z.number().optional(),
    take: z.number().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      emails: "emails",
      skip: "skip",
      take: "take",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * PatchRequest
 */
export type PatchRequest = {
  data: Record<string, any>;
  orgId: number;
  userId: number;
};

/**
 * @internal
 * PatchRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PatchRequest = {
  data: Record<string, any>;
  orgId: number;
  userId: number;
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
    data: z.record(z.string(), z.any()),
    orgId: z.number(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      orgId: "orgId",
      userId: "userId",
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
    data: z.record(z.string(), z.any()),
    orgId: z.number(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      orgId: "orgId",
      userId: "userId",
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
  orgId: number;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
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
  orgId: number;
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
    orgId: z.number(),
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
      orgId: "orgId",
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
    orgId: z.number(),
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
      orgId: "orgId",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
