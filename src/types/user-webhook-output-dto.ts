import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * UserWebhookOutputDto
 */
export type UserWebhookOutputDto = {
  active: boolean;
  id: number;
  /**
   * The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information
   */
  payloadTemplate: string;
  secret?: string | undefined;
  subscriberUrl: string;
  triggers: Record<string, any>[];
  userId: number;
};

/**
 * @internal
 * UserWebhookOutputDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UserWebhookOutputDto = {
  active: boolean;
  id: number;
  payloadTemplate: string;
  secret?: string | undefined;
  subscriberUrl: string;
  triggers: Record<string, any>[];
  userId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UserWebhookOutputDto
 */
const SchemaIn$UserWebhookOutputDto: z.ZodType<
  UserWebhookOutputDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean(),
    id: z.number(),
    payloadTemplate: z.string(),
    secret: z.string().optional(),
    subscriberUrl: z.string(),
    triggers: z.array(z.record(z.string(), z.any())),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      id: "id",
      payloadTemplate: "payloadTemplate",
      secret: "secret",
      subscriberUrl: "subscriberUrl",
      triggers: "triggers",
      userId: "userId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UserWebhookOutputDto
 */
const SchemaOut$UserWebhookOutputDto: z.ZodType<
  External$UserWebhookOutputDto, // output type of this zod object
  z.ZodTypeDef,
  UserWebhookOutputDto // the object to be transformed
> = z
  .object({
    active: z.boolean(),
    id: z.number(),
    payloadTemplate: z.string(),
    secret: z.string().optional(),
    subscriberUrl: z.string(),
    triggers: z.array(z.record(z.string(), z.any())),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      id: "id",
      payloadTemplate: "payloadTemplate",
      secret: "secret",
      subscriberUrl: "subscriberUrl",
      triggers: "triggers",
      userId: "userId",
    });
  });

export const Schemas$UserWebhookOutputDto = {
  in: SchemaIn$UserWebhookOutputDto,
  out: SchemaOut$UserWebhookOutputDto,
};
