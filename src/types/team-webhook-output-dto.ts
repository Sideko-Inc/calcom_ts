import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * TeamWebhookOutputDto
 */
export type TeamWebhookOutputDto = {
  active: boolean;
  id: number;
  /**
   * The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information
   */
  payloadTemplate: string;
  secret?: string | undefined;
  subscriberUrl: string;
  teamId: number;
  triggers: Record<string, any>[];
};

/**
 * @internal
 * TeamWebhookOutputDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TeamWebhookOutputDto = {
  active: boolean;
  id: number;
  payloadTemplate: string;
  secret?: string | undefined;
  subscriberUrl: string;
  teamId: number;
  triggers: Record<string, any>[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TeamWebhookOutputDto
 */
const SchemaIn$TeamWebhookOutputDto: z.ZodType<
  TeamWebhookOutputDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean(),
    id: z.number(),
    payloadTemplate: z.string(),
    secret: z.string().optional(),
    subscriberUrl: z.string(),
    teamId: z.number(),
    triggers: z.array(z.record(z.string(), z.any())),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      id: "id",
      payloadTemplate: "payloadTemplate",
      secret: "secret",
      subscriberUrl: "subscriberUrl",
      teamId: "teamId",
      triggers: "triggers",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TeamWebhookOutputDto
 */
const SchemaOut$TeamWebhookOutputDto: z.ZodType<
  External$TeamWebhookOutputDto, // output type of this zod object
  z.ZodTypeDef,
  TeamWebhookOutputDto // the object to be transformed
> = z
  .object({
    active: z.boolean(),
    id: z.number(),
    payloadTemplate: z.string(),
    secret: z.string().optional(),
    subscriberUrl: z.string(),
    teamId: z.number(),
    triggers: z.array(z.record(z.string(), z.any())),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      id: "id",
      payloadTemplate: "payloadTemplate",
      secret: "secret",
      subscriberUrl: "subscriberUrl",
      teamId: "teamId",
      triggers: "triggers",
    });
  });

export const Schemas$TeamWebhookOutputDto = {
  in: SchemaIn$TeamWebhookOutputDto,
  out: SchemaOut$TeamWebhookOutputDto,
};
