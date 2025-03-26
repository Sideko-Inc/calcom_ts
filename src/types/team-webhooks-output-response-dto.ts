import {
  External$TeamWebhookOutputDto,
  Schemas$TeamWebhookOutputDto,
  TeamWebhookOutputDto,
} from "./team-webhook-output-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * TeamWebhooksOutputResponseDto
 */
export type TeamWebhooksOutputResponseDto = {
  data: TeamWebhookOutputDto[];
  status: "error" | "success";
};

/**
 * @internal
 * TeamWebhooksOutputResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TeamWebhooksOutputResponseDto = {
  data: External$TeamWebhookOutputDto[];
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TeamWebhooksOutputResponseDto
 */
const SchemaIn$TeamWebhooksOutputResponseDto: z.ZodType<
  TeamWebhooksOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$TeamWebhookOutputDto.in),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TeamWebhooksOutputResponseDto
 */
const SchemaOut$TeamWebhooksOutputResponseDto: z.ZodType<
  External$TeamWebhooksOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  TeamWebhooksOutputResponseDto // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$TeamWebhookOutputDto.out),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$TeamWebhooksOutputResponseDto = {
  in: SchemaIn$TeamWebhooksOutputResponseDto,
  out: SchemaOut$TeamWebhooksOutputResponseDto,
};
