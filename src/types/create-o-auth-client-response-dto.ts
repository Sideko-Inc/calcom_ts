import {
  CreateOAuthClientOutput,
  External$CreateOAuthClientOutput,
  Schemas$CreateOAuthClientOutput,
} from "./create-o-auth-client-output";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateOAuthClientResponseDto
 */
export type CreateOAuthClientResponseDto = {
  data: CreateOAuthClientOutput;
  status: "error" | "success";
};

/**
 * @internal
 * CreateOAuthClientResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateOAuthClientResponseDto = {
  data: External$CreateOAuthClientOutput;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateOAuthClientResponseDto
 */
const SchemaIn$CreateOAuthClientResponseDto: z.ZodType<
  CreateOAuthClientResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$CreateOAuthClientOutput.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateOAuthClientResponseDto
 */
const SchemaOut$CreateOAuthClientResponseDto: z.ZodType<
  External$CreateOAuthClientResponseDto, // output type of this zod object
  z.ZodTypeDef,
  CreateOAuthClientResponseDto // the object to be transformed
> = z
  .object({
    data: Schemas$CreateOAuthClientOutput.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$CreateOAuthClientResponseDto = {
  in: SchemaIn$CreateOAuthClientResponseDto,
  out: SchemaOut$CreateOAuthClientResponseDto,
};
