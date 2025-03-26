import {
  External$SelectedCalendarOutputDto,
  Schemas$SelectedCalendarOutputDto,
  SelectedCalendarOutputDto,
} from "./selected-calendar-output-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * SelectedCalendarOutputResponseDto
 */
export type SelectedCalendarOutputResponseDto = {
  data: SelectedCalendarOutputDto;
  status: "error" | "success";
};

/**
 * @internal
 * SelectedCalendarOutputResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SelectedCalendarOutputResponseDto = {
  data: External$SelectedCalendarOutputDto;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SelectedCalendarOutputResponseDto
 */
const SchemaIn$SelectedCalendarOutputResponseDto: z.ZodType<
  SelectedCalendarOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$SelectedCalendarOutputDto.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SelectedCalendarOutputResponseDto
 */
const SchemaOut$SelectedCalendarOutputResponseDto: z.ZodType<
  External$SelectedCalendarOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  SelectedCalendarOutputResponseDto // the object to be transformed
> = z
  .object({
    data: Schemas$SelectedCalendarOutputDto.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$SelectedCalendarOutputResponseDto = {
  in: SchemaIn$SelectedCalendarOutputResponseDto,
  out: SchemaOut$SelectedCalendarOutputResponseDto,
};
