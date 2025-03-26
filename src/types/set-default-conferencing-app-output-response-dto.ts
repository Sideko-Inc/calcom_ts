import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * SetDefaultConferencingAppOutputResponseDto
 */
export type SetDefaultConferencingAppOutputResponseDto = {
  status: "error" | "success";
};

/**
 * @internal
 * SetDefaultConferencingAppOutputResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetDefaultConferencingAppOutputResponseDto = {
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetDefaultConferencingAppOutputResponseDto
 */
const SchemaIn$SetDefaultConferencingAppOutputResponseDto: z.ZodType<
  SetDefaultConferencingAppOutputResponseDto, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetDefaultConferencingAppOutputResponseDto
 */
const SchemaOut$SetDefaultConferencingAppOutputResponseDto: z.ZodType<
  External$SetDefaultConferencingAppOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  SetDefaultConferencingAppOutputResponseDto // the object to be transformed
> = z
  .object({
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      status: "status",
    });
  });

export const Schemas$SetDefaultConferencingAppOutputResponseDto = {
  in: SchemaIn$SetDefaultConferencingAppOutputResponseDto,
  out: SchemaOut$SetDefaultConferencingAppOutputResponseDto,
};
