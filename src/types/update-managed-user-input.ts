import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * UpdateManagedUserInput
 */
export type UpdateManagedUserInput = {
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
};

/**
 * @internal
 * UpdateManagedUserInput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateManagedUserInput = {
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
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateManagedUserInput
 */
const SchemaIn$UpdateManagedUserInput: z.ZodType<
  UpdateManagedUserInput, // output type of this zod object
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
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateManagedUserInput
 */
const SchemaOut$UpdateManagedUserInput: z.ZodType<
  External$UpdateManagedUserInput, // output type of this zod object
  z.ZodTypeDef,
  UpdateManagedUserInput // the object to be transformed
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
    });
  });

export const Schemas$UpdateManagedUserInput = {
  in: SchemaIn$UpdateManagedUserInput,
  out: SchemaOut$UpdateManagedUserInput,
};
