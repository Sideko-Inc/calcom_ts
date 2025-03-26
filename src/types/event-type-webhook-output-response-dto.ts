import {
  EventTypeWebhookOutputDto,
  External$EventTypeWebhookOutputDto,
  Schemas$EventTypeWebhookOutputDto,
} from "./event-type-webhook-output-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * EventTypeWebhookOutputResponseDto
 */
export type EventTypeWebhookOutputResponseDto = {
  data: EventTypeWebhookOutputDto;
  status: "error" | "success";
};

/**
 * @internal
 * EventTypeWebhookOutputResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$EventTypeWebhookOutputResponseDto = {
  data: External$EventTypeWebhookOutputDto;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object EventTypeWebhookOutputResponseDto
 */
const SchemaIn$EventTypeWebhookOutputResponseDto: z.ZodType<
  EventTypeWebhookOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$EventTypeWebhookOutputDto.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$EventTypeWebhookOutputResponseDto
 */
const SchemaOut$EventTypeWebhookOutputResponseDto: z.ZodType<
  External$EventTypeWebhookOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  EventTypeWebhookOutputResponseDto // the object to be transformed
> = z
  .object({
    data: Schemas$EventTypeWebhookOutputDto.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$EventTypeWebhookOutputResponseDto = {
  in: SchemaIn$EventTypeWebhookOutputResponseDto,
  out: SchemaOut$EventTypeWebhookOutputResponseDto,
};
