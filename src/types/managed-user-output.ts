import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * ManagedUserOutput
 */
export type ManagedUserOutput = {
  /**
   * URL of the user's avatar image
   */
  avatarUrl?: string | null | undefined;
  createdDate: string;
  defaultScheduleId: number | null;
  email: string;
  id: number;
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
  name: string | null;
  timeFormat: number | null;
  timeZone: string;
  username: string | null;
  weekStart: string;
};

/**
 * @internal
 * ManagedUserOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ManagedUserOutput = {
  avatarUrl?: string | null | undefined;
  createdDate: string;
  defaultScheduleId: number | null;
  email: string;
  id: number;
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
  name: string | null;
  timeFormat: number | null;
  timeZone: string;
  username: string | null;
  weekStart: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ManagedUserOutput
 */
const SchemaIn$ManagedUserOutput: z.ZodType<
  ManagedUserOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    avatarUrl: z.string().nullable().optional(),
    createdDate: z.string(),
    defaultScheduleId: z.number().nullable(),
    email: z.string(),
    id: z.number(),
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
    name: z.string().nullable(),
    timeFormat: z.number().nullable(),
    timeZone: z.string(),
    username: z.string().nullable(),
    weekStart: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      avatarUrl: "avatarUrl",
      createdDate: "createdDate",
      defaultScheduleId: "defaultScheduleId",
      email: "email",
      id: "id",
      locale: "locale",
      name: "name",
      timeFormat: "timeFormat",
      timeZone: "timeZone",
      username: "username",
      weekStart: "weekStart",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ManagedUserOutput
 */
const SchemaOut$ManagedUserOutput: z.ZodType<
  External$ManagedUserOutput, // output type of this zod object
  z.ZodTypeDef,
  ManagedUserOutput // the object to be transformed
> = z
  .object({
    avatarUrl: z.string().nullable().optional(),
    createdDate: z.string(),
    defaultScheduleId: z.number().nullable(),
    email: z.string(),
    id: z.number(),
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
    name: z.string().nullable(),
    timeFormat: z.number().nullable(),
    timeZone: z.string(),
    username: z.string().nullable(),
    weekStart: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      avatarUrl: "avatarUrl",
      createdDate: "createdDate",
      defaultScheduleId: "defaultScheduleId",
      email: "email",
      id: "id",
      locale: "locale",
      name: "name",
      timeFormat: "timeFormat",
      timeZone: "timeZone",
      username: "username",
      weekStart: "weekStart",
    });
  });

export const Schemas$ManagedUserOutput = {
  in: SchemaIn$ManagedUserOutput,
  out: SchemaOut$ManagedUserOutput,
};
