import {
  External$OAuthClientWebhookOutputDto,
  OAuthClientWebhookOutputDto,
  Schemas$OAuthClientWebhookOutputDto,
} from "./o-auth-client-webhook-output-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * OAuthClientWebhooksOutputResponseDto
 */
export type OAuthClientWebhooksOutputResponseDto = {
  data: OAuthClientWebhookOutputDto[];
  status: "error" | "success";
};

/**
 * @internal
 * OAuthClientWebhooksOutputResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$OAuthClientWebhooksOutputResponseDto = {
  data: External$OAuthClientWebhookOutputDto[];
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object OAuthClientWebhooksOutputResponseDto
 */
const SchemaIn$OAuthClientWebhooksOutputResponseDto: z.ZodType<
  OAuthClientWebhooksOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$OAuthClientWebhookOutputDto.in),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$OAuthClientWebhooksOutputResponseDto
 */
const SchemaOut$OAuthClientWebhooksOutputResponseDto: z.ZodType<
  External$OAuthClientWebhooksOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  OAuthClientWebhooksOutputResponseDto // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$OAuthClientWebhookOutputDto.out),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$OAuthClientWebhooksOutputResponseDto = {
  in: SchemaIn$OAuthClientWebhooksOutputResponseDto,
  out: SchemaOut$OAuthClientWebhooksOutputResponseDto,
};
