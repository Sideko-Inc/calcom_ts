import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * ScheduleAvailabilityInput20240611
 */
export type ScheduleAvailabilityInput20240611 = {
  /**
   * Array of days when schedule is active.
   */
  days: (
    | "Friday"
    | "Monday"
    | "Saturday"
    | "Sunday"
    | "Thursday"
    | "Tuesday"
    | "Wednesday"
  )[];
  /**
   * endTime must be a valid time in format HH:MM e.g. 15:00
   */
  endTime: string;
  /**
   * startTime must be a valid time in format HH:MM e.g. 08:00
   */
  startTime: string;
};

/**
 * @internal
 * ScheduleAvailabilityInput20240611 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ScheduleAvailabilityInput20240611 = {
  days: (
    | "Friday"
    | "Monday"
    | "Saturday"
    | "Sunday"
    | "Thursday"
    | "Tuesday"
    | "Wednesday"
  )[];
  endTime: string;
  startTime: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ScheduleAvailabilityInput20240611
 */
const SchemaIn$ScheduleAvailabilityInput20240611: z.ZodType<
  ScheduleAvailabilityInput20240611, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    days: z.array(
      z.enum([
        "Friday",
        "Monday",
        "Saturday",
        "Sunday",
        "Thursday",
        "Tuesday",
        "Wednesday",
      ]),
    ),
    endTime: z.string(),
    startTime: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      days: "days",
      endTime: "endTime",
      startTime: "startTime",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ScheduleAvailabilityInput20240611
 */
const SchemaOut$ScheduleAvailabilityInput20240611: z.ZodType<
  External$ScheduleAvailabilityInput20240611, // output type of this zod object
  z.ZodTypeDef,
  ScheduleAvailabilityInput20240611 // the object to be transformed
> = z
  .object({
    days: z.array(
      z.enum([
        "Friday",
        "Monday",
        "Saturday",
        "Sunday",
        "Thursday",
        "Tuesday",
        "Wednesday",
      ]),
    ),
    endTime: z.string(),
    startTime: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      days: "days",
      endTime: "endTime",
      startTime: "startTime",
    });
  });

export const Schemas$ScheduleAvailabilityInput20240611 = {
  in: SchemaIn$ScheduleAvailabilityInput20240611,
  out: SchemaOut$ScheduleAvailabilityInput20240611,
};
