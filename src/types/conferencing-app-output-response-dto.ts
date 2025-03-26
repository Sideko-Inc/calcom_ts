import {
  ConferencingAppsOutputDto,
  External$ConferencingAppsOutputDto,
  Schemas$ConferencingAppsOutputDto,
} from "./conferencing-apps-output-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * ConferencingAppOutputResponseDto
 */
export type ConferencingAppOutputResponseDto = {
  data: ConferencingAppsOutputDto;
  status: "error" | "success";
};

/**
 * @internal
 * ConferencingAppOutputResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConferencingAppOutputResponseDto = {
  data: External$ConferencingAppsOutputDto;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConferencingAppOutputResponseDto
 */
const SchemaIn$ConferencingAppOutputResponseDto: z.ZodType<
  ConferencingAppOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$ConferencingAppsOutputDto.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConferencingAppOutputResponseDto
 */
const SchemaOut$ConferencingAppOutputResponseDto: z.ZodType<
  External$ConferencingAppOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  ConferencingAppOutputResponseDto // the object to be transformed
> = z
  .object({
    data: Schemas$ConferencingAppsOutputDto.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$ConferencingAppOutputResponseDto = {
  in: SchemaIn$ConferencingAppOutputResponseDto,
  out: SchemaOut$ConferencingAppOutputResponseDto,
};
