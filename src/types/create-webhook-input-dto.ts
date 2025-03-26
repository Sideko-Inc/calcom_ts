import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateWebhookInputDto
 */
export type CreateWebhookInputDto = {
  active: boolean;
  /**
   * The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information
   */
  payloadTemplate?: string | undefined;
  secret?: string | undefined;
  subscriberUrl: string;
  triggers:
    | "AFTER_GUESTS_CAL_VIDEO_NO_SHOW"
    | "AFTER_HOSTS_CAL_VIDEO_NO_SHOW"
    | "BOOKING_CANCELLED"
    | "BOOKING_CREATED"
    | "BOOKING_NO_SHOW_UPDATED"
    | "BOOKING_PAID"
    | "BOOKING_PAYMENT_INITIATED"
    | "BOOKING_REJECTED"
    | "BOOKING_REQUESTED"
    | "BOOKING_RESCHEDULED"
    | "FORM_SUBMITTED"
    | "FORM_SUBMITTED_NO_EVENT"
    | "INSTANT_MEETING"
    | "MEETING_ENDED"
    | "MEETING_STARTED"
    | "OOO_CREATED"
    | "RECORDING_READY"
    | "RECORDING_TRANSCRIPTION_GENERATED";
};

/**
 * @internal
 * CreateWebhookInputDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateWebhookInputDto = {
  active: boolean;
  payloadTemplate?: string | undefined;
  secret?: string | undefined;
  subscriberUrl: string;
  triggers:
    | "AFTER_GUESTS_CAL_VIDEO_NO_SHOW"
    | "AFTER_HOSTS_CAL_VIDEO_NO_SHOW"
    | "BOOKING_CANCELLED"
    | "BOOKING_CREATED"
    | "BOOKING_NO_SHOW_UPDATED"
    | "BOOKING_PAID"
    | "BOOKING_PAYMENT_INITIATED"
    | "BOOKING_REJECTED"
    | "BOOKING_REQUESTED"
    | "BOOKING_RESCHEDULED"
    | "FORM_SUBMITTED"
    | "FORM_SUBMITTED_NO_EVENT"
    | "INSTANT_MEETING"
    | "MEETING_ENDED"
    | "MEETING_STARTED"
    | "OOO_CREATED"
    | "RECORDING_READY"
    | "RECORDING_TRANSCRIPTION_GENERATED";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateWebhookInputDto
 */
const SchemaIn$CreateWebhookInputDto: z.ZodType<
  CreateWebhookInputDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean(),
    payloadTemplate: z.string().optional(),
    secret: z.string().optional(),
    subscriberUrl: z.string(),
    triggers: z.enum([
      "AFTER_GUESTS_CAL_VIDEO_NO_SHOW",
      "AFTER_HOSTS_CAL_VIDEO_NO_SHOW",
      "BOOKING_CANCELLED",
      "BOOKING_CREATED",
      "BOOKING_NO_SHOW_UPDATED",
      "BOOKING_PAID",
      "BOOKING_PAYMENT_INITIATED",
      "BOOKING_REJECTED",
      "BOOKING_REQUESTED",
      "BOOKING_RESCHEDULED",
      "FORM_SUBMITTED",
      "FORM_SUBMITTED_NO_EVENT",
      "INSTANT_MEETING",
      "MEETING_ENDED",
      "MEETING_STARTED",
      "OOO_CREATED",
      "RECORDING_READY",
      "RECORDING_TRANSCRIPTION_GENERATED",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      payloadTemplate: "payloadTemplate",
      secret: "secret",
      subscriberUrl: "subscriberUrl",
      triggers: "triggers",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateWebhookInputDto
 */
const SchemaOut$CreateWebhookInputDto: z.ZodType<
  External$CreateWebhookInputDto, // output type of this zod object
  z.ZodTypeDef,
  CreateWebhookInputDto // the object to be transformed
> = z
  .object({
    active: z.boolean(),
    payloadTemplate: z.string().optional(),
    secret: z.string().optional(),
    subscriberUrl: z.string(),
    triggers: z.enum([
      "AFTER_GUESTS_CAL_VIDEO_NO_SHOW",
      "AFTER_HOSTS_CAL_VIDEO_NO_SHOW",
      "BOOKING_CANCELLED",
      "BOOKING_CREATED",
      "BOOKING_NO_SHOW_UPDATED",
      "BOOKING_PAID",
      "BOOKING_PAYMENT_INITIATED",
      "BOOKING_REJECTED",
      "BOOKING_REQUESTED",
      "BOOKING_RESCHEDULED",
      "FORM_SUBMITTED",
      "FORM_SUBMITTED_NO_EVENT",
      "INSTANT_MEETING",
      "MEETING_ENDED",
      "MEETING_STARTED",
      "OOO_CREATED",
      "RECORDING_READY",
      "RECORDING_TRANSCRIPTION_GENERATED",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      payloadTemplate: "payloadTemplate",
      secret: "secret",
      subscriberUrl: "subscriberUrl",
      triggers: "triggers",
    });
  });

export const Schemas$CreateWebhookInputDto = {
  in: SchemaIn$CreateWebhookInputDto,
  out: SchemaOut$CreateWebhookInputDto,
};
