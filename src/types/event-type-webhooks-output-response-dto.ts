import {
  EventTypeWebhookOutputDto,
  External$EventTypeWebhookOutputDto,
  Schemas$EventTypeWebhookOutputDto,
} from "./event-type-webhook-output-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * EventTypeWebhooksOutputResponseDto
 */
export type EventTypeWebhooksOutputResponseDto = {
  data: EventTypeWebhookOutputDto[];
  status: "error" | "success";
};

/**
 * @internal
 * EventTypeWebhooksOutputResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$EventTypeWebhooksOutputResponseDto = {
  data: External$EventTypeWebhookOutputDto[];
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object EventTypeWebhooksOutputResponseDto
 */
const SchemaIn$EventTypeWebhooksOutputResponseDto: z.ZodType<
  EventTypeWebhooksOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$EventTypeWebhookOutputDto.in),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$EventTypeWebhooksOutputResponseDto
 */
const SchemaOut$EventTypeWebhooksOutputResponseDto: z.ZodType<
  External$EventTypeWebhooksOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  EventTypeWebhooksOutputResponseDto // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$EventTypeWebhookOutputDto.out),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$EventTypeWebhooksOutputResponseDto = {
  in: SchemaIn$EventTypeWebhooksOutputResponseDto,
  out: SchemaOut$EventTypeWebhooksOutputResponseDto,
};
