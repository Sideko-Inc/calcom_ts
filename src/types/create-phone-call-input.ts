import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreatePhoneCallInput
 */
export type CreatePhoneCallInput = {
  /**
   * Begin message
   */
  beginMessage?: string | undefined;
  /**
   * CAL API Key
   */
  calApiKey: string;
  /**
   * Enabled status
   */
  enabled: Record<string, any>;
  /**
   * General prompt
   */
  generalPrompt?: string | undefined;
  /**
   * Guest company
   */
  guestCompany?: string | undefined;
  /**
   * Guest email
   */
  guestEmail?: string | undefined;
  /**
   * Guest name
   */
  guestName?: string | undefined;
  /**
   * Number to call
   */
  numberToCall: string;
  /**
   * Scheduler name
   */
  schedulerName?: string | undefined;
  /**
   * Template type
   */
  templateType: "CHECK_IN_APPOINTMENT" | "CUSTOM_TEMPLATE";
  /**
   * Your phone number
   */
  yourPhoneNumber: string;
};

/**
 * @internal
 * CreatePhoneCallInput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreatePhoneCallInput = {
  beginMessage?: string | undefined;
  calApiKey: string;
  enabled: Record<string, any>;
  generalPrompt?: string | undefined;
  guestCompany?: string | undefined;
  guestEmail?: string | undefined;
  guestName?: string | undefined;
  numberToCall: string;
  schedulerName?: string | undefined;
  templateType: "CHECK_IN_APPOINTMENT" | "CUSTOM_TEMPLATE";
  yourPhoneNumber: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreatePhoneCallInput
 */
const SchemaIn$CreatePhoneCallInput: z.ZodType<
  CreatePhoneCallInput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    beginMessage: z.string().optional(),
    calApiKey: z.string(),
    enabled: z.record(z.string(), z.any()),
    generalPrompt: z.string().optional(),
    guestCompany: z.string().optional(),
    guestEmail: z.string().optional(),
    guestName: z.string().optional(),
    numberToCall: z.string(),
    schedulerName: z.string().optional(),
    templateType: z.enum(["CHECK_IN_APPOINTMENT", "CUSTOM_TEMPLATE"]),
    yourPhoneNumber: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      beginMessage: "beginMessage",
      calApiKey: "calApiKey",
      enabled: "enabled",
      generalPrompt: "generalPrompt",
      guestCompany: "guestCompany",
      guestEmail: "guestEmail",
      guestName: "guestName",
      numberToCall: "numberToCall",
      schedulerName: "schedulerName",
      templateType: "templateType",
      yourPhoneNumber: "yourPhoneNumber",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreatePhoneCallInput
 */
const SchemaOut$CreatePhoneCallInput: z.ZodType<
  External$CreatePhoneCallInput, // output type of this zod object
  z.ZodTypeDef,
  CreatePhoneCallInput // the object to be transformed
> = z
  .object({
    beginMessage: z.string().optional(),
    calApiKey: z.string(),
    enabled: z.record(z.string(), z.any()),
    generalPrompt: z.string().optional(),
    guestCompany: z.string().optional(),
    guestEmail: z.string().optional(),
    guestName: z.string().optional(),
    numberToCall: z.string(),
    schedulerName: z.string().optional(),
    templateType: z.enum(["CHECK_IN_APPOINTMENT", "CUSTOM_TEMPLATE"]),
    yourPhoneNumber: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      beginMessage: "beginMessage",
      calApiKey: "calApiKey",
      enabled: "enabled",
      generalPrompt: "generalPrompt",
      guestCompany: "guestCompany",
      guestEmail: "guestEmail",
      guestName: "guestName",
      numberToCall: "numberToCall",
      schedulerName: "schedulerName",
      templateType: "templateType",
      yourPhoneNumber: "yourPhoneNumber",
    });
  });

export const Schemas$CreatePhoneCallInput = {
  in: SchemaIn$CreatePhoneCallInput,
  out: SchemaOut$CreatePhoneCallInput,
};
