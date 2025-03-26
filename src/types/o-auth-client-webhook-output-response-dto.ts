import {
  External$OAuthClientWebhookOutputDto,
  OAuthClientWebhookOutputDto,
  Schemas$OAuthClientWebhookOutputDto,
} from "./o-auth-client-webhook-output-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * OAuthClientWebhookOutputResponseDto
 */
export type OAuthClientWebhookOutputResponseDto = {
  data: OAuthClientWebhookOutputDto;
  status: "error" | "success";
};

/**
 * @internal
 * OAuthClientWebhookOutputResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$OAuthClientWebhookOutputResponseDto = {
  data: External$OAuthClientWebhookOutputDto;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object OAuthClientWebhookOutputResponseDto
 */
const SchemaIn$OAuthClientWebhookOutputResponseDto: z.ZodType<
  OAuthClientWebhookOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$OAuthClientWebhookOutputDto.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$OAuthClientWebhookOutputResponseDto
 */
const SchemaOut$OAuthClientWebhookOutputResponseDto: z.ZodType<
  External$OAuthClientWebhookOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  OAuthClientWebhookOutputResponseDto // the object to be transformed
> = z
  .object({
    data: Schemas$OAuthClientWebhookOutputDto.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$OAuthClientWebhookOutputResponseDto = {
  in: SchemaIn$OAuthClientWebhookOutputResponseDto,
  out: SchemaOut$OAuthClientWebhookOutputResponseDto,
};
