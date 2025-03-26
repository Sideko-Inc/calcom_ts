import {
  BookingOutput20240813,
  External$BookingOutput20240813,
  Schemas$BookingOutput20240813,
} from "./booking-output20240813";
import {
  External$GetRecurringSeatedBookingOutput20240813,
  GetRecurringSeatedBookingOutput20240813,
  Schemas$GetRecurringSeatedBookingOutput20240813,
} from "./get-recurring-seated-booking-output20240813";
import {
  External$GetSeatedBookingOutput20240813,
  GetSeatedBookingOutput20240813,
  Schemas$GetSeatedBookingOutput20240813,
} from "./get-seated-booking-output20240813";
import {
  External$RecurringBookingOutput20240813,
  RecurringBookingOutput20240813,
  Schemas$RecurringBookingOutput20240813,
} from "./recurring-booking-output20240813";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetBookingOutput20240813
 */
export type GetBookingOutput20240813 = {
  /**
   * Booking data, which can be either a BookingOutput object, a RecurringBookingOutput object, or an array of RecurringBookingOutput objects
   */
  data:
    | BookingOutput20240813
    | RecurringBookingOutput20240813
    | RecurringBookingOutput20240813[]
    | GetSeatedBookingOutput20240813
    | GetRecurringSeatedBookingOutput20240813
    | GetRecurringSeatedBookingOutput20240813[];
  error?: Record<string, any> | undefined;
  status: "error" | "success";
};

/**
 * @internal
 * GetBookingOutput20240813 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetBookingOutput20240813 = {
  data:
    | External$BookingOutput20240813
    | External$RecurringBookingOutput20240813
    | External$RecurringBookingOutput20240813[]
    | External$GetSeatedBookingOutput20240813
    | External$GetRecurringSeatedBookingOutput20240813
    | External$GetRecurringSeatedBookingOutput20240813[];
  error?: Record<string, any> | undefined;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetBookingOutput20240813
 */
const SchemaIn$GetBookingOutput20240813: z.ZodType<
  GetBookingOutput20240813, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.union([
      Schemas$BookingOutput20240813.in,
      Schemas$RecurringBookingOutput20240813.in,
      z.array(Schemas$RecurringBookingOutput20240813.in),
      Schemas$GetSeatedBookingOutput20240813.in,
      Schemas$GetRecurringSeatedBookingOutput20240813.in,
      z.array(Schemas$GetRecurringSeatedBookingOutput20240813.in),
    ]),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetBookingOutput20240813
 */
const SchemaOut$GetBookingOutput20240813: z.ZodType<
  External$GetBookingOutput20240813, // output type of this zod object
  z.ZodTypeDef,
  GetBookingOutput20240813 // the object to be transformed
> = z
  .object({
    data: z.union([
      Schemas$BookingOutput20240813.out,
      Schemas$RecurringBookingOutput20240813.out,
      z.array(Schemas$RecurringBookingOutput20240813.out),
      Schemas$GetSeatedBookingOutput20240813.out,
      Schemas$GetRecurringSeatedBookingOutput20240813.out,
      z.array(Schemas$GetRecurringSeatedBookingOutput20240813.out),
    ]),
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

export const Schemas$GetBookingOutput20240813 = {
  in: SchemaIn$GetBookingOutput20240813,
  out: SchemaOut$GetBookingOutput20240813,
};
