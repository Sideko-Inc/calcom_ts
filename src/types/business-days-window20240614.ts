import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * BusinessDaysWindow20240614
 */
export type BusinessDaysWindow20240614 = {
  /**
   *
   *       Determines the behavior of the booking window:
   *       - If **true**, the window is rolling. This means the number of available days will always be equal the specified 'value'
   *         and adjust dynamically as bookings are made. For example, if 'value' is 3 and availability is only on Mondays,
   *         a booker attempting to schedule on November 10 will see slots on November 11, 18, and 25. As one of these days
   *         becomes fully booked, a new day (e.g., December 2) will open up to ensure 3 available days are always visible.
   *       - If **false**, the window is fixed. This means the booking window only considers the next 'value' days from the
   *         moment someone is trying to book. For example, if 'value' is 3, availability is only on Mondays, and the current
   *         date is November 10, the booker will only see slots on November 11 because the window is restricted to the next
   *         3 calendar days (November 10–12).
   *
   */
  rolling?: boolean | undefined;
  /**
   * Whether the window should be business days, calendar days or a range of dates
   */
  type: "businessDays" | "calendarDays" | "range";
  /**
   * How many business day into the future can this event be booked
   */
  value: number;
};

/**
 * @internal
 * BusinessDaysWindow20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BusinessDaysWindow20240614 = {
  rolling?: boolean | undefined;
  type: "businessDays" | "calendarDays" | "range";
  value: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BusinessDaysWindow20240614
 */
const SchemaIn$BusinessDaysWindow20240614: z.ZodType<
  BusinessDaysWindow20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    rolling: z.boolean().optional(),
    type: z.enum(["businessDays", "calendarDays", "range"]),
    value: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      rolling: "rolling",
      type: "type",
      value: "value",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BusinessDaysWindow20240614
 */
const SchemaOut$BusinessDaysWindow20240614: z.ZodType<
  External$BusinessDaysWindow20240614, // output type of this zod object
  z.ZodTypeDef,
  BusinessDaysWindow20240614 // the object to be transformed
> = z
  .object({
    rolling: z.boolean().optional(),
    type: z.enum(["businessDays", "calendarDays", "range"]),
    value: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      rolling: "rolling",
      type: "type",
      value: "value",
    });
  });

export const Schemas$BusinessDaysWindow20240614 = {
  in: SchemaIn$BusinessDaysWindow20240614,
  out: SchemaOut$BusinessDaysWindow20240614,
};
