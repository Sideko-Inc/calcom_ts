import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * OAuthClientWebhookOutputDto
 */
export type OAuthClientWebhookOutputDto = {
  active: boolean;
  id: number;
  oAuthClientId: string;
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
 * OAuthClientWebhookOutputDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$OAuthClientWebhookOutputDto = {
  active: boolean;
  id: number;
  oAuthClientId: string;
  payloadTemplate: string;
  secret?: string | undefined;
  subscriberUrl: string;
  triggers: Record<string, any>[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object OAuthClientWebhookOutputDto
 */
const SchemaIn$OAuthClientWebhookOutputDto: z.ZodType<
  OAuthClientWebhookOutputDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean(),
    id: z.number(),
    oAuthClientId: z.string(),
    payloadTemplate: z.string(),
    secret: z.string().optional(),
    subscriberUrl: z.string(),
    triggers: z.array(z.record(z.string(), z.any())),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      id: "id",
      oAuthClientId: "oAuthClientId",
      payloadTemplate: "payloadTemplate",
      secret: "secret",
      subscriberUrl: "subscriberUrl",
      triggers: "triggers",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$OAuthClientWebhookOutputDto
 */
const SchemaOut$OAuthClientWebhookOutputDto: z.ZodType<
  External$OAuthClientWebhookOutputDto, // output type of this zod object
  z.ZodTypeDef,
  OAuthClientWebhookOutputDto // the object to be transformed
> = z
  .object({
    active: z.boolean(),
    id: z.number(),
    oAuthClientId: z.string(),
    payloadTemplate: z.string(),
    secret: z.string().optional(),
    subscriberUrl: z.string(),
    triggers: z.array(z.record(z.string(), z.any())),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      id: "id",
      oAuthClientId: "oAuthClientId",
      payloadTemplate: "payloadTemplate",
      secret: "secret",
      subscriberUrl: "subscriberUrl",
      triggers: "triggers",
    });
  });

export const Schemas$OAuthClientWebhookOutputDto = {
  in: SchemaIn$OAuthClientWebhookOutputDto,
  out: SchemaOut$OAuthClientWebhookOutputDto,
};
