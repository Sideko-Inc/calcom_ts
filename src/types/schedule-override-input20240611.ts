import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * ScheduleOverrideInput20240611
 */
export type ScheduleOverrideInput20240611 = {
  date: string;
  /**
   * endTime must be a valid time in format HH:MM e.g. 13:00
   */
  endTime: string;
  /**
   * startTime must be a valid time in format HH:MM e.g. 12:00
   */
  startTime: string;
};

/**
 * @internal
 * ScheduleOverrideInput20240611 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ScheduleOverrideInput20240611 = {
  date: string;
  endTime: string;
  startTime: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ScheduleOverrideInput20240611
 */
const SchemaIn$ScheduleOverrideInput20240611: z.ZodType<
  ScheduleOverrideInput20240611, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    date: z.string(),
    endTime: z.string(),
    startTime: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      date: "date",
      endTime: "endTime",
      startTime: "startTime",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ScheduleOverrideInput20240611
 */
const SchemaOut$ScheduleOverrideInput20240611: z.ZodType<
  External$ScheduleOverrideInput20240611, // output type of this zod object
  z.ZodTypeDef,
  ScheduleOverrideInput20240611 // the object to be transformed
> = z
  .object({
    date: z.string(),
    endTime: z.string(),
    startTime: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      date: "date",
      endTime: "endTime",
      startTime: "startTime",
    });
  });

export const Schemas$ScheduleOverrideInput20240611 = {
  in: SchemaIn$ScheduleOverrideInput20240611,
  out: SchemaOut$ScheduleOverrideInput20240611,
};
