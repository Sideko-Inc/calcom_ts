import {
  External$PlatformOAuthClientDto,
  PlatformOAuthClientDto,
  Schemas$PlatformOAuthClientDto,
} from "./platform-o-auth-client-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetOAuthClientsResponseDto
 */
export type GetOAuthClientsResponseDto = {
  data: PlatformOAuthClientDto[];
  status: "error" | "success";
};

/**
 * @internal
 * GetOAuthClientsResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetOAuthClientsResponseDto = {
  data: External$PlatformOAuthClientDto[];
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetOAuthClientsResponseDto
 */
const SchemaIn$GetOAuthClientsResponseDto: z.ZodType<
  GetOAuthClientsResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$PlatformOAuthClientDto.in),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetOAuthClientsResponseDto
 */
const SchemaOut$GetOAuthClientsResponseDto: z.ZodType<
  External$GetOAuthClientsResponseDto, // output type of this zod object
  z.ZodTypeDef,
  GetOAuthClientsResponseDto // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$PlatformOAuthClientDto.out),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$GetOAuthClientsResponseDto = {
  in: SchemaIn$GetOAuthClientsResponseDto,
  out: SchemaOut$GetOAuthClientsResponseDto,
};
