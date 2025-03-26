import {
  ConferencingAppsOutputDto,
  External$ConferencingAppsOutputDto,
  Schemas$ConferencingAppsOutputDto,
} from "./conferencing-apps-output-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * ConferencingAppsOutputResponseDto
 */
export type ConferencingAppsOutputResponseDto = {
  data: ConferencingAppsOutputDto[];
  status: "error" | "success";
};

/**
 * @internal
 * ConferencingAppsOutputResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConferencingAppsOutputResponseDto = {
  data: External$ConferencingAppsOutputDto[];
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConferencingAppsOutputResponseDto
 */
const SchemaIn$ConferencingAppsOutputResponseDto: z.ZodType<
  ConferencingAppsOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$ConferencingAppsOutputDto.in),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConferencingAppsOutputResponseDto
 */
const SchemaOut$ConferencingAppsOutputResponseDto: z.ZodType<
  External$ConferencingAppsOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  ConferencingAppsOutputResponseDto // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$ConferencingAppsOutputDto.out),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$ConferencingAppsOutputResponseDto = {
  in: SchemaIn$ConferencingAppsOutputResponseDto,
  out: SchemaOut$ConferencingAppsOutputResponseDto,
};
