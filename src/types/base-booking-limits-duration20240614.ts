import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * BaseBookingLimitsDuration20240614
 */
export type BaseBookingLimitsDuration20240614 = {
  /**
   * The duration of bookings per day (must be a multiple of 15)
   */
  day?: number | undefined;
  /**
   * The duration of bookings per month (must be a multiple of 15)
   */
  month?: number | undefined;
  /**
   * The duration of bookings per week (must be a multiple of 15)
   */
  week?: number | undefined;
  /**
   * The duration of bookings per year (must be a multiple of 15)
   */
  year?: number | undefined;
};

/**
 * @internal
 * BaseBookingLimitsDuration20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BaseBookingLimitsDuration20240614 = {
  day?: number | undefined;
  month?: number | undefined;
  week?: number | undefined;
  year?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BaseBookingLimitsDuration20240614
 */
const SchemaIn$BaseBookingLimitsDuration20240614: z.ZodType<
  BaseBookingLimitsDuration20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    day: z.number().optional(),
    month: z.number().optional(),
    week: z.number().optional(),
    year: z.number().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      day: "day",
      month: "month",
      week: "week",
      year: "year",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BaseBookingLimitsDuration20240614
 */
const SchemaOut$BaseBookingLimitsDuration20240614: z.ZodType<
  External$BaseBookingLimitsDuration20240614, // output type of this zod object
  z.ZodTypeDef,
  BaseBookingLimitsDuration20240614 // the object to be transformed
> = z
  .object({
    day: z.number().optional(),
    month: z.number().optional(),
    week: z.number().optional(),
    year: z.number().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      day: "day",
      month: "month",
      week: "week",
      year: "year",
    });
  });

export const Schemas$BaseBookingLimitsDuration20240614 = {
  in: SchemaIn$BaseBookingLimitsDuration20240614,
  out: SchemaOut$BaseBookingLimitsDuration20240614,
};
