import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * SeatedAttendee
 */
export type SeatedAttendee = {
  absent: boolean;
  /**
   * Booking field responses consisting of an object with booking field slug as keys and user response as values.
   */
  bookingFieldsResponses: Record<string, any>;
  email: string;
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
  metadata?: Record<string, any> | undefined;
  name: string;
  phoneNumber?: string | undefined;
  seatUid: string;
  timeZone: string;
};

/**
 * @internal
 * SeatedAttendee without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SeatedAttendee = {
  absent: boolean;
  bookingFieldsResponses: Record<string, any>;
  email: string;
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
  metadata?: Record<string, any> | undefined;
  name: string;
  phoneNumber?: string | undefined;
  seatUid: string;
  timeZone: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SeatedAttendee
 */
const SchemaIn$SeatedAttendee: z.ZodType<
  SeatedAttendee, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    absent: z.boolean(),
    bookingFieldsResponses: z.record(z.string(), z.any()),
    email: z.string(),
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
    metadata: z.record(z.string(), z.any()).optional(),
    name: z.string(),
    phoneNumber: z.string().optional(),
    seatUid: z.string(),
    timeZone: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      absent: "absent",
      bookingFieldsResponses: "bookingFieldsResponses",
      email: "email",
      language: "language",
      metadata: "metadata",
      name: "name",
      phoneNumber: "phoneNumber",
      seatUid: "seatUid",
      timeZone: "timeZone",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SeatedAttendee
 */
const SchemaOut$SeatedAttendee: z.ZodType<
  External$SeatedAttendee, // output type of this zod object
  z.ZodTypeDef,
  SeatedAttendee // the object to be transformed
> = z
  .object({
    absent: z.boolean(),
    bookingFieldsResponses: z.record(z.string(), z.any()),
    email: z.string(),
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
    metadata: z.record(z.string(), z.any()).optional(),
    name: z.string(),
    phoneNumber: z.string().optional(),
    seatUid: z.string(),
    timeZone: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      absent: "absent",
      bookingFieldsResponses: "bookingFieldsResponses",
      email: "email",
      language: "language",
      metadata: "metadata",
      name: "name",
      phoneNumber: "phoneNumber",
      seatUid: "seatUid",
      timeZone: "timeZone",
    });
  });

export const Schemas$SeatedAttendee = {
  in: SchemaIn$SeatedAttendee,
  out: SchemaOut$SeatedAttendee,
};
