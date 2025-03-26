import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  orgId: number;
  webhookId: string;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  orgId: number;
  webhookId: string;
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
    webhookId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      webhookId: "webhookId",
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
    webhookId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      webhookId: "webhookId",
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
    skip: z.number().optional(),
    take: z.number().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
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
    skip: z.number().optional(),
    take: z.number().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      skip: "skip",
      take: "take",
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
  orgId: number;
  webhookId: string;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  orgId: number;
  webhookId: string;
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
    orgId: z.number(),
    webhookId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      webhookId: "webhookId",
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
    orgId: z.number(),
    webhookId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      webhookId: "webhookId",
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
  orgId: number;
  webhookId: string;
};

/**
 * @internal
 * PatchRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PatchRequest = {
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
  orgId: number;
  webhookId: string;
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
    orgId: z.number(),
    webhookId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      payloadTemplate: "payloadTemplate",
      secret: "secret",
      subscriberUrl: "subscriberUrl",
      triggers: "triggers",
      orgId: "orgId",
      webhookId: "webhookId",
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
    orgId: z.number(),
    webhookId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      payloadTemplate: "payloadTemplate",
      secret: "secret",
      subscriberUrl: "subscriberUrl",
      triggers: "triggers",
      orgId: "orgId",
      webhookId: "webhookId",
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
  orgId: number;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
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
    orgId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      payloadTemplate: "payloadTemplate",
      secret: "secret",
      subscriberUrl: "subscriberUrl",
      triggers: "triggers",
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
    orgId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      payloadTemplate: "payloadTemplate",
      secret: "secret",
      subscriberUrl: "subscriberUrl",
      triggers: "triggers",
      orgId: "orgId",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
