import {
  BookingOutput20240813,
  External$BookingOutput20240813,
  Schemas$BookingOutput20240813,
} from "./booking-output20240813";
import {
  CreateRecurringSeatedBookingOutput20240813,
  External$CreateRecurringSeatedBookingOutput20240813,
  Schemas$CreateRecurringSeatedBookingOutput20240813,
} from "./create-recurring-seated-booking-output20240813";
import {
  CreateSeatedBookingOutput20240813,
  External$CreateSeatedBookingOutput20240813,
  Schemas$CreateSeatedBookingOutput20240813,
} from "./create-seated-booking-output20240813";
import {
  External$RecurringBookingOutput20240813,
  RecurringBookingOutput20240813,
  Schemas$RecurringBookingOutput20240813,
} from "./recurring-booking-output20240813";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * RescheduleBookingOutput20240813
 */
export type RescheduleBookingOutput20240813 = {
  /**
   * Booking data, which can be either a BookingOutput object or a RecurringBookingOutput object
   */
  data:
    | BookingOutput20240813
    | RecurringBookingOutput20240813
    | CreateSeatedBookingOutput20240813
    | CreateRecurringSeatedBookingOutput20240813;
  status: "error" | "success";
};

/**
 * @internal
 * RescheduleBookingOutput20240813 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RescheduleBookingOutput20240813 = {
  data:
    | External$BookingOutput20240813
    | External$RecurringBookingOutput20240813
    | External$CreateSeatedBookingOutput20240813
    | External$CreateRecurringSeatedBookingOutput20240813;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RescheduleBookingOutput20240813
 */
const SchemaIn$RescheduleBookingOutput20240813: z.ZodType<
  RescheduleBookingOutput20240813, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.union([
      Schemas$BookingOutput20240813.in,
      Schemas$RecurringBookingOutput20240813.in,
      Schemas$CreateSeatedBookingOutput20240813.in,
      Schemas$CreateRecurringSeatedBookingOutput20240813.in,
    ]),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RescheduleBookingOutput20240813
 */
const SchemaOut$RescheduleBookingOutput20240813: z.ZodType<
  External$RescheduleBookingOutput20240813, // output type of this zod object
  z.ZodTypeDef,
  RescheduleBookingOutput20240813 // the object to be transformed
> = z
  .object({
    data: z.union([
      Schemas$BookingOutput20240813.out,
      Schemas$RecurringBookingOutput20240813.out,
      Schemas$CreateSeatedBookingOutput20240813.out,
      Schemas$CreateRecurringSeatedBookingOutput20240813.out,
    ]),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$RescheduleBookingOutput20240813 = {
  in: SchemaIn$RescheduleBookingOutput20240813,
  out: SchemaOut$RescheduleBookingOutput20240813,
};
