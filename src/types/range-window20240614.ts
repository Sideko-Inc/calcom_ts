import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * RangeWindow20240614
 */
export type RangeWindow20240614 = {
  /**
   * Whether the window should be business days, calendar days or a range of dates
   */
  type: "businessDays" | "calendarDays" | "range";
  /**
   * Date range for when this event can be booked.
   */
  value: string[];
};

/**
 * @internal
 * RangeWindow20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RangeWindow20240614 = {
  type: "businessDays" | "calendarDays" | "range";
  value: string[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RangeWindow20240614
 */
const SchemaIn$RangeWindow20240614: z.ZodType<
  RangeWindow20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    type: z.enum(["businessDays", "calendarDays", "range"]),
    value: z.array(z.string()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
      value: "value",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RangeWindow20240614
 */
const SchemaOut$RangeWindow20240614: z.ZodType<
  External$RangeWindow20240614, // output type of this zod object
  z.ZodTypeDef,
  RangeWindow20240614 // the object to be transformed
> = z
  .object({
    type: z.enum(["businessDays", "calendarDays", "range"]),
    value: z.array(z.string()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
      value: "value",
    });
  });

export const Schemas$RangeWindow20240614 = {
  in: SchemaIn$RangeWindow20240614,
  out: SchemaOut$RangeWindow20240614,
};
