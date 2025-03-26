import {
  External$UserWebhookOutputDto,
  Schemas$UserWebhookOutputDto,
  UserWebhookOutputDto,
} from "./user-webhook-output-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * UserWebhooksOutputResponseDto
 */
export type UserWebhooksOutputResponseDto = {
  data: UserWebhookOutputDto[];
  status: "error" | "success";
};

/**
 * @internal
 * UserWebhooksOutputResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UserWebhooksOutputResponseDto = {
  data: External$UserWebhookOutputDto[];
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UserWebhooksOutputResponseDto
 */
const SchemaIn$UserWebhooksOutputResponseDto: z.ZodType<
  UserWebhooksOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$UserWebhookOutputDto.in),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UserWebhooksOutputResponseDto
 */
const SchemaOut$UserWebhooksOutputResponseDto: z.ZodType<
  External$UserWebhooksOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  UserWebhooksOutputResponseDto // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$UserWebhookOutputDto.out),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$UserWebhooksOutputResponseDto = {
  in: SchemaIn$UserWebhooksOutputResponseDto,
  out: SchemaOut$UserWebhooksOutputResponseDto,
};
