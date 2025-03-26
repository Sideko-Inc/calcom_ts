import {
  External$PlatformOAuthClientDto,
  PlatformOAuthClientDto,
  Schemas$PlatformOAuthClientDto,
} from "./platform-o-auth-client-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetOAuthClientResponseDto
 */
export type GetOAuthClientResponseDto = {
  data: PlatformOAuthClientDto;
  status: "error" | "success";
};

/**
 * @internal
 * GetOAuthClientResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetOAuthClientResponseDto = {
  data: External$PlatformOAuthClientDto;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetOAuthClientResponseDto
 */
const SchemaIn$GetOAuthClientResponseDto: z.ZodType<
  GetOAuthClientResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$PlatformOAuthClientDto.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetOAuthClientResponseDto
 */
const SchemaOut$GetOAuthClientResponseDto: z.ZodType<
  External$GetOAuthClientResponseDto, // output type of this zod object
  z.ZodTypeDef,
  GetOAuthClientResponseDto // the object to be transformed
> = z
  .object({
    data: Schemas$PlatformOAuthClientDto.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$GetOAuthClientResponseDto = {
  in: SchemaIn$GetOAuthClientResponseDto,
  out: SchemaOut$GetOAuthClientResponseDto,
};
