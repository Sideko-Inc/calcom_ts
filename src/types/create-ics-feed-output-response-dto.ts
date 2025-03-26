import {
  CreateIcsFeedOutput,
  External$CreateIcsFeedOutput,
  Schemas$CreateIcsFeedOutput,
} from "./create-ics-feed-output";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateIcsFeedOutputResponseDto
 */
export type CreateIcsFeedOutputResponseDto = {
  data: CreateIcsFeedOutput;
  status: "error" | "success";
};

/**
 * @internal
 * CreateIcsFeedOutputResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateIcsFeedOutputResponseDto = {
  data: External$CreateIcsFeedOutput;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateIcsFeedOutputResponseDto
 */
const SchemaIn$CreateIcsFeedOutputResponseDto: z.ZodType<
  CreateIcsFeedOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$CreateIcsFeedOutput.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateIcsFeedOutputResponseDto
 */
const SchemaOut$CreateIcsFeedOutputResponseDto: z.ZodType<
  External$CreateIcsFeedOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  CreateIcsFeedOutputResponseDto // the object to be transformed
> = z
  .object({
    data: Schemas$CreateIcsFeedOutput.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$CreateIcsFeedOutputResponseDto = {
  in: SchemaIn$CreateIcsFeedOutputResponseDto,
  out: SchemaOut$CreateIcsFeedOutputResponseDto,
};
