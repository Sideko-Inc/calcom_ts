import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * BaseBookingLimitsCount20240614
 */
export type BaseBookingLimitsCount20240614 = {
  /**
   * The number of bookings per day
   */
  day?: number | undefined;
  disabled?: boolean | undefined;
  /**
   * The number of bookings per month
   */
  month?: number | undefined;
  /**
   * The number of bookings per week
   */
  week?: number | undefined;
  /**
   * The number of bookings per year
   */
  year?: number | undefined;
};

/**
 * @internal
 * BaseBookingLimitsCount20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BaseBookingLimitsCount20240614 = {
  day?: number | undefined;
  disabled?: boolean | undefined;
  month?: number | undefined;
  week?: number | undefined;
  year?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BaseBookingLimitsCount20240614
 */
const SchemaIn$BaseBookingLimitsCount20240614: z.ZodType<
  BaseBookingLimitsCount20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    day: z.number().optional(),
    disabled: z.boolean().optional(),
    month: z.number().optional(),
    week: z.number().optional(),
    year: z.number().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      day: "day",
      disabled: "disabled",
      month: "month",
      week: "week",
      year: "year",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BaseBookingLimitsCount20240614
 */
const SchemaOut$BaseBookingLimitsCount20240614: z.ZodType<
  External$BaseBookingLimitsCount20240614, // output type of this zod object
  z.ZodTypeDef,
  BaseBookingLimitsCount20240614 // the object to be transformed
> = z
  .object({
    day: z.number().optional(),
    disabled: z.boolean().optional(),
    month: z.number().optional(),
    week: z.number().optional(),
    year: z.number().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      day: "day",
      disabled: "disabled",
      month: "month",
      week: "week",
      year: "year",
    });
  });

export const Schemas$BaseBookingLimitsCount20240614 = {
  in: SchemaIn$BaseBookingLimitsCount20240614,
  out: SchemaOut$BaseBookingLimitsCount20240614,
};
