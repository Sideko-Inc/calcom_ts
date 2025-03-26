import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * EventTypeWebhookOutputDto
 */
export type EventTypeWebhookOutputDto = {
  active: boolean;
  eventTypeId: number;
  id: number;
  /**
   * The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information
   */
  payloadTemplate: string;
  secret?: string | undefined;
  subscriberUrl: string;
  triggers: Record<string, any>[];
};

/**
 * @internal
 * EventTypeWebhookOutputDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$EventTypeWebhookOutputDto = {
  active: boolean;
  eventTypeId: number;
  id: number;
  payloadTemplate: string;
  secret?: string | undefined;
  subscriberUrl: string;
  triggers: Record<string, any>[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object EventTypeWebhookOutputDto
 */
const SchemaIn$EventTypeWebhookOutputDto: z.ZodType<
  EventTypeWebhookOutputDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean(),
    eventTypeId: z.number(),
    id: z.number(),
    payloadTemplate: z.string(),
    secret: z.string().optional(),
    subscriberUrl: z.string(),
    triggers: z.array(z.record(z.string(), z.any())),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      eventTypeId: "eventTypeId",
      id: "id",
      payloadTemplate: "payloadTemplate",
      secret: "secret",
      subscriberUrl: "subscriberUrl",
      triggers: "triggers",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$EventTypeWebhookOutputDto
 */
const SchemaOut$EventTypeWebhookOutputDto: z.ZodType<
  External$EventTypeWebhookOutputDto, // output type of this zod object
  z.ZodTypeDef,
  EventTypeWebhookOutputDto // the object to be transformed
> = z
  .object({
    active: z.boolean(),
    eventTypeId: z.number(),
    id: z.number(),
    payloadTemplate: z.string(),
    secret: z.string().optional(),
    subscriberUrl: z.string(),
    triggers: z.array(z.record(z.string(), z.any())),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      eventTypeId: "eventTypeId",
      id: "id",
      payloadTemplate: "payloadTemplate",
      secret: "secret",
      subscriberUrl: "subscriberUrl",
      triggers: "triggers",
    });
  });

export const Schemas$EventTypeWebhookOutputDto = {
  in: SchemaIn$EventTypeWebhookOutputDto,
  out: SchemaOut$EventTypeWebhookOutputDto,
};
