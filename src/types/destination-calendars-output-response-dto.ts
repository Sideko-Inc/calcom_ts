import {
  DestinationCalendarsOutputDto,
  External$DestinationCalendarsOutputDto,
  Schemas$DestinationCalendarsOutputDto,
} from "./destination-calendars-output-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DestinationCalendarsOutputResponseDto
 */
export type DestinationCalendarsOutputResponseDto = {
  data: DestinationCalendarsOutputDto;
  status: "error" | "success";
};

/**
 * @internal
 * DestinationCalendarsOutputResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DestinationCalendarsOutputResponseDto = {
  data: External$DestinationCalendarsOutputDto;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DestinationCalendarsOutputResponseDto
 */
const SchemaIn$DestinationCalendarsOutputResponseDto: z.ZodType<
  DestinationCalendarsOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$DestinationCalendarsOutputDto.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DestinationCalendarsOutputResponseDto
 */
const SchemaOut$DestinationCalendarsOutputResponseDto: z.ZodType<
  External$DestinationCalendarsOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  DestinationCalendarsOutputResponseDto // the object to be transformed
> = z
  .object({
    data: Schemas$DestinationCalendarsOutputDto.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$DestinationCalendarsOutputResponseDto = {
  in: SchemaIn$DestinationCalendarsOutputResponseDto,
  out: SchemaOut$DestinationCalendarsOutputResponseDto,
};
