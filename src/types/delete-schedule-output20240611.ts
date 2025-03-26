import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DeleteScheduleOutput20240611
 */
export type DeleteScheduleOutput20240611 = {
  status: "error" | "success";
};

/**
 * @internal
 * DeleteScheduleOutput20240611 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteScheduleOutput20240611 = {
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeleteScheduleOutput20240611
 */
const SchemaIn$DeleteScheduleOutput20240611: z.ZodType<
  DeleteScheduleOutput20240611, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeleteScheduleOutput20240611
 */
const SchemaOut$DeleteScheduleOutput20240611: z.ZodType<
  External$DeleteScheduleOutput20240611, // output type of this zod object
  z.ZodTypeDef,
  DeleteScheduleOutput20240611 // the object to be transformed
> = z
  .object({
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      status: "status",
    });
  });

export const Schemas$DeleteScheduleOutput20240611 = {
  in: SchemaIn$DeleteScheduleOutput20240611,
  out: SchemaOut$DeleteScheduleOutput20240611,
};
