import {
  DefaultConferencingAppsOutputDto,
  External$DefaultConferencingAppsOutputDto,
  Schemas$DefaultConferencingAppsOutputDto,
} from "./default-conferencing-apps-output-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetDefaultConferencingAppOutputResponseDto
 */
export type GetDefaultConferencingAppOutputResponseDto = {
  data?: DefaultConferencingAppsOutputDto | undefined;
  status: "error" | "success";
};

/**
 * @internal
 * GetDefaultConferencingAppOutputResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetDefaultConferencingAppOutputResponseDto = {
  data?: External$DefaultConferencingAppsOutputDto | undefined;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetDefaultConferencingAppOutputResponseDto
 */
const SchemaIn$GetDefaultConferencingAppOutputResponseDto: z.ZodType<
  GetDefaultConferencingAppOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$DefaultConferencingAppsOutputDto.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetDefaultConferencingAppOutputResponseDto
 */
const SchemaOut$GetDefaultConferencingAppOutputResponseDto: z.ZodType<
  External$GetDefaultConferencingAppOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  GetDefaultConferencingAppOutputResponseDto // the object to be transformed
> = z
  .object({
    data: Schemas$DefaultConferencingAppsOutputDto.out.optional(),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$GetDefaultConferencingAppOutputResponseDto = {
  in: SchemaIn$GetDefaultConferencingAppOutputResponseDto,
  out: SchemaOut$GetDefaultConferencingAppOutputResponseDto,
};
