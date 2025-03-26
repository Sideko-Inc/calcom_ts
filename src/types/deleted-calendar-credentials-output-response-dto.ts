import {
  DeletedCalendarCredentialsOutputDto,
  External$DeletedCalendarCredentialsOutputDto,
  Schemas$DeletedCalendarCredentialsOutputDto,
} from "./deleted-calendar-credentials-output-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DeletedCalendarCredentialsOutputResponseDto
 */
export type DeletedCalendarCredentialsOutputResponseDto = {
  data: DeletedCalendarCredentialsOutputDto;
  status: "error" | "success";
};

/**
 * @internal
 * DeletedCalendarCredentialsOutputResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeletedCalendarCredentialsOutputResponseDto = {
  data: External$DeletedCalendarCredentialsOutputDto;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeletedCalendarCredentialsOutputResponseDto
 */
const SchemaIn$DeletedCalendarCredentialsOutputResponseDto: z.ZodType<
  DeletedCalendarCredentialsOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$DeletedCalendarCredentialsOutputDto.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeletedCalendarCredentialsOutputResponseDto
 */
const SchemaOut$DeletedCalendarCredentialsOutputResponseDto: z.ZodType<
  External$DeletedCalendarCredentialsOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  DeletedCalendarCredentialsOutputResponseDto // the object to be transformed
> = z
  .object({
    data: Schemas$DeletedCalendarCredentialsOutputDto.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$DeletedCalendarCredentialsOutputResponseDto = {
  in: SchemaIn$DeletedCalendarCredentialsOutputResponseDto,
  out: SchemaOut$DeletedCalendarCredentialsOutputResponseDto,
};
