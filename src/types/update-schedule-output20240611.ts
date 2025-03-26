import {
  External$ScheduleOutput20240611,
  ScheduleOutput20240611,
  Schemas$ScheduleOutput20240611,
} from "./schedule-output20240611";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * UpdateScheduleOutput20240611
 */
export type UpdateScheduleOutput20240611 = {
  data: ScheduleOutput20240611;
  error?: Record<string, any> | undefined;
  status: "error" | "success";
};

/**
 * @internal
 * UpdateScheduleOutput20240611 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateScheduleOutput20240611 = {
  data: External$ScheduleOutput20240611;
  error?: Record<string, any> | undefined;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateScheduleOutput20240611
 */
const SchemaIn$UpdateScheduleOutput20240611: z.ZodType<
  UpdateScheduleOutput20240611, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$ScheduleOutput20240611.in,
    error: z.record(z.string(), z.any()).optional(),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      error: "error",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateScheduleOutput20240611
 */
const SchemaOut$UpdateScheduleOutput20240611: z.ZodType<
  External$UpdateScheduleOutput20240611, // output type of this zod object
  z.ZodTypeDef,
  UpdateScheduleOutput20240611 // the object to be transformed
> = z
  .object({
    data: Schemas$ScheduleOutput20240611.out,
    error: z.record(z.string(), z.any()).optional(),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      error: "error",
      status: "status",
    });
  });

export const Schemas$UpdateScheduleOutput20240611 = {
  in: SchemaIn$UpdateScheduleOutput20240611,
  out: SchemaOut$UpdateScheduleOutput20240611,
};
