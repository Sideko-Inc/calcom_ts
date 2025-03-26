import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateManagedUserInput
 */
export type CreateManagedUserInput = {
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
};

/**
 * @internal
 * CreateManagedUserInput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateManagedUserInput = {
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
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateManagedUserInput
 */
const SchemaIn$CreateManagedUserInput: z.ZodType<
  CreateManagedUserInput, // output type of this zod object
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
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateManagedUserInput
 */
const SchemaOut$CreateManagedUserInput: z.ZodType<
  External$CreateManagedUserInput, // output type of this zod object
  z.ZodTypeDef,
  CreateManagedUserInput // the object to be transformed
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
    });
  });

export const Schemas$CreateManagedUserInput = {
  in: SchemaIn$CreateManagedUserInput,
  out: SchemaOut$CreateManagedUserInput,
};
