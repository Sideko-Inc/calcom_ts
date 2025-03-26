import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetConferencingAppsOauthUrlResponseDto
 */
export type GetConferencingAppsOauthUrlResponseDto = {
  status: "error" | "success";
};

/**
 * @internal
 * GetConferencingAppsOauthUrlResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetConferencingAppsOauthUrlResponseDto = {
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetConferencingAppsOauthUrlResponseDto
 */
const SchemaIn$GetConferencingAppsOauthUrlResponseDto: z.ZodType<
  GetConferencingAppsOauthUrlResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetConferencingAppsOauthUrlResponseDto
 */
const SchemaOut$GetConferencingAppsOauthUrlResponseDto: z.ZodType<
  External$GetConferencingAppsOauthUrlResponseDto, // output type of this zod object
  z.ZodTypeDef,
  GetConferencingAppsOauthUrlResponseDto // the object to be transformed
> = z
  .object({
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      status: "status",
    });
  });

export const Schemas$GetConferencingAppsOauthUrlResponseDto = {
  in: SchemaIn$GetConferencingAppsOauthUrlResponseDto,
  out: SchemaOut$GetConferencingAppsOauthUrlResponseDto,
};
