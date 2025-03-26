import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  clientId: string;
  userId: number;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  clientId: string;
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
    clientId: z.string(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientId: "clientId",
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
    clientId: z.string(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientId: "clientId",
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
  clientId: string;
  /**
   * Filter managed users by email. If you want to filter by multiple emails, separate them with a comma.
   */
  emails?: string[] | undefined;
  /**
   * The number of items to return
   */
  limit?: number | undefined;
  /**
   * The number of items to skip
   */
  offset?: number | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  clientId: string;
  emails?: string[] | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
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
    clientId: z.string(),
    emails: z.array(z.string()).optional(),
    limit: z.number().optional(),
    offset: z.number().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientId: "clientId",
      emails: "emails",
      limit: "limit",
      offset: "offset",
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
    clientId: z.string(),
    emails: z.array(z.string()).optional(),
    limit: z.number().optional(),
    offset: z.number().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientId: "clientId",
      emails: "emails",
      limit: "limit",
      offset: "offset",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  clientId: string;
  userId: number;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  clientId: string;
  userId: number;
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
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientId: "clientId",
      userId: "userId",
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
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientId: "clientId",
      userId: "userId",
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
   * URL of the user's avatar image
   */
  avatarUrl?: string | undefined;
  defaultScheduleId?: number | undefined;
  email?: string | undefined;
  locale?:
    | (
        | "ar"
        | "az"
        | "bg"
        | "ca"
        | "cs"
        | "da"
        | "de"
        | "el"
        | "en"
        | "es"
        | "es-419"
        | "et"
        | "eu"
        | "fi"
        | "fr"
        | "he"
        | "hr"
        | "hu"
        | "id"
        | "it"
        | "iw"
        | "ja"
        | "km"
        | "ko"
        | "lv"
        | "nl"
        | "no"
        | "pl"
        | "pt"
        | "pt-BR"
        | "ro"
        | "ru"
        | "sk"
        | "sr"
        | "sv"
        | "ta"
        | "th"
        | "tr"
        | "uk"
        | "vi"
        | "zh-CN"
        | "zh-TW"
      )
    | undefined;
  name?: string | undefined;
  /**
   * Must be 12 or 24
   */
  timeFormat?: number | undefined;
  timeZone?: string | undefined;
  weekStart?:
    | (
        | "Friday"
        | "Monday"
        | "Saturday"
        | "Sunday"
        | "Thursday"
        | "Tuesday"
        | "Wednesday"
      )
    | undefined;
  clientId: string;
  userId: number;
};

/**
 * @internal
 * PatchRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PatchRequest = {
  avatarUrl?: string | undefined;
  defaultScheduleId?: number | undefined;
  email?: string | undefined;
  locale?:
    | (
        | "ar"
        | "az"
        | "bg"
        | "ca"
        | "cs"
        | "da"
        | "de"
        | "el"
        | "en"
        | "es"
        | "es-419"
        | "et"
        | "eu"
        | "fi"
        | "fr"
        | "he"
        | "hr"
        | "hu"
        | "id"
        | "it"
        | "iw"
        | "ja"
        | "km"
        | "ko"
        | "lv"
        | "nl"
        | "no"
        | "pl"
        | "pt"
        | "pt-BR"
        | "ro"
        | "ru"
        | "sk"
        | "sr"
        | "sv"
        | "ta"
        | "th"
        | "tr"
        | "uk"
        | "vi"
        | "zh-CN"
        | "zh-TW"
      )
    | undefined;
  name?: string | undefined;
  timeFormat?: number | undefined;
  timeZone?: string | undefined;
  weekStart?:
    | (
        | "Friday"
        | "Monday"
        | "Saturday"
        | "Sunday"
        | "Thursday"
        | "Tuesday"
        | "Wednesday"
      )
    | undefined;
  clientId: string;
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
    avatarUrl: z.string().optional(),
    defaultScheduleId: z.number().optional(),
    email: z.string().optional(),
    locale: z
      .enum([
        "ar",
        "az",
        "bg",
        "ca",
        "cs",
        "da",
        "de",
        "el",
        "en",
        "es",
        "es-419",
        "et",
        "eu",
        "fi",
        "fr",
        "he",
        "hr",
        "hu",
        "id",
        "it",
        "iw",
        "ja",
        "km",
        "ko",
        "lv",
        "nl",
        "no",
        "pl",
        "pt",
        "pt-BR",
        "ro",
        "ru",
        "sk",
        "sr",
        "sv",
        "ta",
        "th",
        "tr",
        "uk",
        "vi",
        "zh-CN",
        "zh-TW",
      ])
      .optional(),
    name: z.string().optional(),
    timeFormat: z.number().optional(),
    timeZone: z.string().optional(),
    weekStart: z
      .enum([
        "Friday",
        "Monday",
        "Saturday",
        "Sunday",
        "Thursday",
        "Tuesday",
        "Wednesday",
      ])
      .optional(),
    clientId: z.string(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      avatarUrl: "avatarUrl",
      defaultScheduleId: "defaultScheduleId",
      email: "email",
      locale: "locale",
      name: "name",
      timeFormat: "timeFormat",
      timeZone: "timeZone",
      weekStart: "weekStart",
      clientId: "clientId",
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
    avatarUrl: z.string().optional(),
    defaultScheduleId: z.number().optional(),
    email: z.string().optional(),
    locale: z
      .enum([
        "ar",
        "az",
        "bg",
        "ca",
        "cs",
        "da",
        "de",
        "el",
        "en",
        "es",
        "es-419",
        "et",
        "eu",
        "fi",
        "fr",
        "he",
        "hr",
        "hu",
        "id",
        "it",
        "iw",
        "ja",
        "km",
        "ko",
        "lv",
        "nl",
        "no",
        "pl",
        "pt",
        "pt-BR",
        "ro",
        "ru",
        "sk",
        "sr",
        "sv",
        "ta",
        "th",
        "tr",
        "uk",
        "vi",
        "zh-CN",
        "zh-TW",
      ])
      .optional(),
    name: z.string().optional(),
    timeFormat: z.number().optional(),
    timeZone: z.string().optional(),
    weekStart: z
      .enum([
        "Friday",
        "Monday",
        "Saturday",
        "Sunday",
        "Thursday",
        "Tuesday",
        "Wednesday",
      ])
      .optional(),
    clientId: z.string(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      avatarUrl: "avatarUrl",
      defaultScheduleId: "defaultScheduleId",
      email: "email",
      locale: "locale",
      name: "name",
      timeFormat: "timeFormat",
      timeZone: "timeZone",
      weekStart: "weekStart",
      clientId: "clientId",
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
   * URL of the user's avatar image
   */
  avatarUrl?: string | undefined;
  email: string;
  locale?:
    | (
        | "ar"
        | "az"
        | "bg"
        | "ca"
        | "cs"
        | "da"
        | "de"
        | "el"
        | "en"
        | "es"
        | "es-419"
        | "et"
        | "eu"
        | "fi"
        | "fr"
        | "he"
        | "hr"
        | "hu"
        | "id"
        | "it"
        | "iw"
        | "ja"
        | "km"
        | "ko"
        | "lv"
        | "nl"
        | "no"
        | "pl"
        | "pt"
        | "pt-BR"
        | "ro"
        | "ru"
        | "sk"
        | "sr"
        | "sv"
        | "ta"
        | "th"
        | "tr"
        | "uk"
        | "vi"
        | "zh-CN"
        | "zh-TW"
      )
    | undefined;
  /**
   * Managed user's name is used in emails
   */
  name: string;
  /**
   * Must be a number 12 or 24
   */
  timeFormat?: number | undefined;
  /**
   * Timezone is used to create user's default schedule from Monday to Friday from 9AM to 5PM. If it is not passed then user does not have
   *       a default schedule and it must be created manually via the /schedules endpoint. Until the schedule is created, the user can't access availability atom to set his / her availability nor booked.
   *       It will default to Europe/London if not passed.
   */
  timeZone?: string | undefined;
  weekStart?:
    | (
        | "Friday"
        | "Monday"
        | "Saturday"
        | "Sunday"
        | "Thursday"
        | "Tuesday"
        | "Wednesday"
      )
    | undefined;
  clientId: string;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  avatarUrl?: string | undefined;
  email: string;
  locale?:
    | (
        | "ar"
        | "az"
        | "bg"
        | "ca"
        | "cs"
        | "da"
        | "de"
        | "el"
        | "en"
        | "es"
        | "es-419"
        | "et"
        | "eu"
        | "fi"
        | "fr"
        | "he"
        | "hr"
        | "hu"
        | "id"
        | "it"
        | "iw"
        | "ja"
        | "km"
        | "ko"
        | "lv"
        | "nl"
        | "no"
        | "pl"
        | "pt"
        | "pt-BR"
        | "ro"
        | "ru"
        | "sk"
        | "sr"
        | "sv"
        | "ta"
        | "th"
        | "tr"
        | "uk"
        | "vi"
        | "zh-CN"
        | "zh-TW"
      )
    | undefined;
  name: string;
  timeFormat?: number | undefined;
  timeZone?: string | undefined;
  weekStart?:
    | (
        | "Friday"
        | "Monday"
        | "Saturday"
        | "Sunday"
        | "Thursday"
        | "Tuesday"
        | "Wednesday"
      )
    | undefined;
  clientId: string;
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
    avatarUrl: z.string().optional(),
    email: z.string(),
    locale: z
      .enum([
        "ar",
        "az",
        "bg",
        "ca",
        "cs",
        "da",
        "de",
        "el",
        "en",
        "es",
        "es-419",
        "et",
        "eu",
        "fi",
        "fr",
        "he",
        "hr",
        "hu",
        "id",
        "it",
        "iw",
        "ja",
        "km",
        "ko",
        "lv",
        "nl",
        "no",
        "pl",
        "pt",
        "pt-BR",
        "ro",
        "ru",
        "sk",
        "sr",
        "sv",
        "ta",
        "th",
        "tr",
        "uk",
        "vi",
        "zh-CN",
        "zh-TW",
      ])
      .optional(),
    name: z.string(),
    timeFormat: z.number().optional(),
    timeZone: z.string().optional(),
    weekStart: z
      .enum([
        "Friday",
        "Monday",
        "Saturday",
        "Sunday",
        "Thursday",
        "Tuesday",
        "Wednesday",
      ])
      .optional(),
    clientId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      avatarUrl: "avatarUrl",
      email: "email",
      locale: "locale",
      name: "name",
      timeFormat: "timeFormat",
      timeZone: "timeZone",
      weekStart: "weekStart",
      clientId: "clientId",
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
    avatarUrl: z.string().optional(),
    email: z.string(),
    locale: z
      .enum([
        "ar",
        "az",
        "bg",
        "ca",
        "cs",
        "da",
        "de",
        "el",
        "en",
        "es",
        "es-419",
        "et",
        "eu",
        "fi",
        "fr",
        "he",
        "hr",
        "hu",
        "id",
        "it",
        "iw",
        "ja",
        "km",
        "ko",
        "lv",
        "nl",
        "no",
        "pl",
        "pt",
        "pt-BR",
        "ro",
        "ru",
        "sk",
        "sr",
        "sv",
        "ta",
        "th",
        "tr",
        "uk",
        "vi",
        "zh-CN",
        "zh-TW",
      ])
      .optional(),
    name: z.string(),
    timeFormat: z.number().optional(),
    timeZone: z.string().optional(),
    weekStart: z
      .enum([
        "Friday",
        "Monday",
        "Saturday",
        "Sunday",
        "Thursday",
        "Tuesday",
        "Wednesday",
      ])
      .optional(),
    clientId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      avatarUrl: "avatarUrl",
      email: "email",
      locale: "locale",
      name: "name",
      timeFormat: "timeFormat",
      timeZone: "timeZone",
      weekStart: "weekStart",
      clientId: "clientId",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
