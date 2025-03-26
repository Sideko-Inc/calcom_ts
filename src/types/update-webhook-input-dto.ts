import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * UpdateWebhookInputDto
 */
export type UpdateWebhookInputDto = {
  active?: boolean | undefined;
  /**
   * The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information
   */
  payloadTemplate?: string | undefined;
  secret?: string | undefined;
  subscriberUrl?: string | undefined;
  triggers?:
    | (
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
        | "RECORDING_TRANSCRIPTION_GENERATED"
      )
    | undefined;
};

/**
 * @internal
 * UpdateWebhookInputDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateWebhookInputDto = {
  active?: boolean | undefined;
  payloadTemplate?: string | undefined;
  secret?: string | undefined;
  subscriberUrl?: string | undefined;
  triggers?:
    | (
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
        | "RECORDING_TRANSCRIPTION_GENERATED"
      )
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateWebhookInputDto
 */
const SchemaIn$UpdateWebhookInputDto: z.ZodType<
  UpdateWebhookInputDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean().optional(),
    payloadTemplate: z.string().optional(),
    secret: z.string().optional(),
    subscriberUrl: z.string().optional(),
    triggers: z
      .enum([
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
      ])
      .optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateWebhookInputDto
 */
const SchemaOut$UpdateWebhookInputDto: z.ZodType<
  External$UpdateWebhookInputDto, // output type of this zod object
  z.ZodTypeDef,
  UpdateWebhookInputDto // the object to be transformed
> = z
  .object({
    active: z.boolean().optional(),
    payloadTemplate: z.string().optional(),
    secret: z.string().optional(),
    subscriberUrl: z.string().optional(),
    triggers: z
      .enum([
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
      ])
      .optional(),
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

export const Schemas$UpdateWebhookInputDto = {
  in: SchemaIn$UpdateWebhookInputDto,
  out: SchemaOut$UpdateWebhookInputDto,
};
