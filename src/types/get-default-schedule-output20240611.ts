import {
  External$ScheduleOutput20240611,
  ScheduleOutput20240611,
  Schemas$ScheduleOutput20240611,
} from "./schedule-output20240611";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetDefaultScheduleOutput20240611
 */
export type GetDefaultScheduleOutput20240611 = {
  data: ScheduleOutput20240611;
  status: "error" | "success";
};

/**
 * @internal
 * GetDefaultScheduleOutput20240611 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetDefaultScheduleOutput20240611 = {
  data: External$ScheduleOutput20240611;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetDefaultScheduleOutput20240611
 */
const SchemaIn$GetDefaultScheduleOutput20240611: z.ZodType<
  GetDefaultScheduleOutput20240611, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$ScheduleOutput20240611.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetDefaultScheduleOutput20240611
 */
const SchemaOut$GetDefaultScheduleOutput20240611: z.ZodType<
  External$GetDefaultScheduleOutput20240611, // output type of this zod object
  z.ZodTypeDef,
  GetDefaultScheduleOutput20240611 // the object to be transformed
> = z
  .object({
    data: Schemas$ScheduleOutput20240611.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$GetDefaultScheduleOutput20240611 = {
  in: SchemaIn$GetDefaultScheduleOutput20240611,
  out: SchemaOut$GetDefaultScheduleOutput20240611,
};
