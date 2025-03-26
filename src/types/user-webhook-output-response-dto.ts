import {
  External$UserWebhookOutputDto,
  Schemas$UserWebhookOutputDto,
  UserWebhookOutputDto,
} from "./user-webhook-output-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * UserWebhookOutputResponseDto
 */
export type UserWebhookOutputResponseDto = {
  data: UserWebhookOutputDto;
  status: "error" | "success";
};

/**
 * @internal
 * UserWebhookOutputResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UserWebhookOutputResponseDto = {
  data: External$UserWebhookOutputDto;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UserWebhookOutputResponseDto
 */
const SchemaIn$UserWebhookOutputResponseDto: z.ZodType<
  UserWebhookOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$UserWebhookOutputDto.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UserWebhookOutputResponseDto
 */
const SchemaOut$UserWebhookOutputResponseDto: z.ZodType<
  External$UserWebhookOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  UserWebhookOutputResponseDto // the object to be transformed
> = z
  .object({
    data: Schemas$UserWebhookOutputDto.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$UserWebhookOutputResponseDto = {
  in: SchemaIn$UserWebhookOutputResponseDto,
  out: SchemaOut$UserWebhookOutputResponseDto,
};
