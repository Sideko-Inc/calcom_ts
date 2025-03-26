import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * Attendee
 */
export type Attendee = {
  /**
   * The email of the attendee.
   */
  email?: string | undefined;
  /**
   * The preferred language of the attendee. Used for booking confirmation.
   */
  language?:
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
   * The name of the attendee.
   */
  name: string;
  /**
   * The phone number of the attendee in international format.
   */
  phoneNumber?: string | undefined;
  /**
   * The time zone of the attendee.
   */
  timeZone: string;
};

/**
 * @internal
 * Attendee without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Attendee = {
  email?: string | undefined;
  language?:
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
  phoneNumber?: string | undefined;
  timeZone: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Attendee
 */
const SchemaIn$Attendee: z.ZodType<
  Attendee, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    email: z.string().optional(),
    language: z
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
    phoneNumber: z.string().optional(),
    timeZone: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      email: "email",
      language: "language",
      name: "name",
      phoneNumber: "phoneNumber",
      timeZone: "timeZone",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Attendee
 */
const SchemaOut$Attendee: z.ZodType<
  External$Attendee, // output type of this zod object
  z.ZodTypeDef,
  Attendee // the object to be transformed
> = z
  .object({
    email: z.string().optional(),
    language: z
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
    phoneNumber: z.string().optional(),
    timeZone: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      email: "email",
      language: "language",
      name: "name",
      phoneNumber: "phoneNumber",
      timeZone: "timeZone",
    });
  });

export const Schemas$Attendee = {
  in: SchemaIn$Attendee,
  out: SchemaOut$Attendee,
};
