import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DisconnectConferencingAppOutputResponseDto
 */
export type DisconnectConferencingAppOutputResponseDto = {
  status: "error" | "success";
};

/**
 * @internal
 * DisconnectConferencingAppOutputResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisconnectConferencingAppOutputResponseDto = {
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisconnectConferencingAppOutputResponseDto
 */
const SchemaIn$DisconnectConferencingAppOutputResponseDto: z.ZodType<
  DisconnectConferencingAppOutputResponseDto, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisconnectConferencingAppOutputResponseDto
 */
const SchemaOut$DisconnectConferencingAppOutputResponseDto: z.ZodType<
  External$DisconnectConferencingAppOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  DisconnectConferencingAppOutputResponseDto // the object to be transformed
> = z
  .object({
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      status: "status",
    });
  });

export const Schemas$DisconnectConferencingAppOutputResponseDto = {
  in: SchemaIn$DisconnectConferencingAppOutputResponseDto,
  out: SchemaOut$DisconnectConferencingAppOutputResponseDto,
};
