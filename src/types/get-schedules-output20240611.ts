import {
  External$ScheduleOutput20240611,
  ScheduleOutput20240611,
  Schemas$ScheduleOutput20240611,
} from "./schedule-output20240611";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetSchedulesOutput20240611
 */
export type GetSchedulesOutput20240611 = {
  data: ScheduleOutput20240611[];
  error?: Record<string, any> | undefined;
  status: "error" | "success";
};

/**
 * @internal
 * GetSchedulesOutput20240611 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetSchedulesOutput20240611 = {
  data: External$ScheduleOutput20240611[];
  error?: Record<string, any> | undefined;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetSchedulesOutput20240611
 */
const SchemaIn$GetSchedulesOutput20240611: z.ZodType<
  GetSchedulesOutput20240611, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$ScheduleOutput20240611.in),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetSchedulesOutput20240611
 */
const SchemaOut$GetSchedulesOutput20240611: z.ZodType<
  External$GetSchedulesOutput20240611, // output type of this zod object
  z.ZodTypeDef,
  GetSchedulesOutput20240611 // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$ScheduleOutput20240611.out),
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

export const Schemas$GetSchedulesOutput20240611 = {
  in: SchemaIn$GetSchedulesOutput20240611,
  out: SchemaOut$GetSchedulesOutput20240611,
};
