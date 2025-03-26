import {
  External$TeamWebhookOutputDto,
  Schemas$TeamWebhookOutputDto,
  TeamWebhookOutputDto,
} from "./team-webhook-output-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * TeamWebhookOutputResponseDto
 */
export type TeamWebhookOutputResponseDto = {
  data: TeamWebhookOutputDto;
  status: "error" | "success";
};

/**
 * @internal
 * TeamWebhookOutputResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TeamWebhookOutputResponseDto = {
  data: External$TeamWebhookOutputDto;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TeamWebhookOutputResponseDto
 */
const SchemaIn$TeamWebhookOutputResponseDto: z.ZodType<
  TeamWebhookOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TeamWebhookOutputDto.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TeamWebhookOutputResponseDto
 */
const SchemaOut$TeamWebhookOutputResponseDto: z.ZodType<
  External$TeamWebhookOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  TeamWebhookOutputResponseDto // the object to be transformed
> = z
  .object({
    data: Schemas$TeamWebhookOutputDto.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$TeamWebhookOutputResponseDto = {
  in: SchemaIn$TeamWebhookOutputResponseDto,
  out: SchemaOut$TeamWebhookOutputResponseDto,
};
