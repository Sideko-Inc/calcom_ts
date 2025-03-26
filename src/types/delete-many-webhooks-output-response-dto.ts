import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DeleteManyWebhooksOutputResponseDto
 */
export type DeleteManyWebhooksOutputResponseDto = {
  data: string;
  status: "error" | "success";
};

/**
 * @internal
 * DeleteManyWebhooksOutputResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteManyWebhooksOutputResponseDto = {
  data: string;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeleteManyWebhooksOutputResponseDto
 */
const SchemaIn$DeleteManyWebhooksOutputResponseDto: z.ZodType<
  DeleteManyWebhooksOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.string(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeleteManyWebhooksOutputResponseDto
 */
const SchemaOut$DeleteManyWebhooksOutputResponseDto: z.ZodType<
  External$DeleteManyWebhooksOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  DeleteManyWebhooksOutputResponseDto // the object to be transformed
> = z
  .object({
    data: z.string(),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$DeleteManyWebhooksOutputResponseDto = {
  in: SchemaIn$DeleteManyWebhooksOutputResponseDto,
  out: SchemaOut$DeleteManyWebhooksOutputResponseDto,
};
