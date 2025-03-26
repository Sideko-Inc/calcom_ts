import {
  External$ScheduleAvailabilityInput20240611,
  ScheduleAvailabilityInput20240611,
  Schemas$ScheduleAvailabilityInput20240611,
} from "./schedule-availability-input20240611";
import {
  External$ScheduleOverrideInput20240611,
  ScheduleOverrideInput20240611,
  Schemas$ScheduleOverrideInput20240611,
} from "./schedule-override-input20240611";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateScheduleInput20240611
 */
export type CreateScheduleInput20240611 = {
  /**
   * Each object contains days and times when the user is available. If not passed, the default availability is Monday to Friday from 09:00 to 17:00.
   */
  availability?: ScheduleAvailabilityInput20240611[] | undefined;
  /**
   * Each user should have 1 default schedule. If you specified `timeZone` when creating managed user, then the default schedule will be created with that timezone.
   *     Default schedule means that if an event type is not tied to a specific schedule then the default schedule is used.
   */
  isDefault: boolean;
  name: string;
  /**
   * Need to change availability for a specific date? Add an override.
   */
  overrides?: ScheduleOverrideInput20240611[] | undefined;
  /**
   * Timezone is used to calculate available times when an event using the schedule is booked.
   */
  timeZone: string;
};

/**
 * @internal
 * CreateScheduleInput20240611 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateScheduleInput20240611 = {
  availability?: External$ScheduleAvailabilityInput20240611[] | undefined;
  isDefault: boolean;
  name: string;
  overrides?: External$ScheduleOverrideInput20240611[] | undefined;
  timeZone: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateScheduleInput20240611
 */
const SchemaIn$CreateScheduleInput20240611: z.ZodType<
  CreateScheduleInput20240611, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    availability: z
      .array(Schemas$ScheduleAvailabilityInput20240611.in)
      .optional(),
    isDefault: z.boolean(),
    name: z.string(),
    overrides: z.array(Schemas$ScheduleOverrideInput20240611.in).optional(),
    timeZone: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      availability: "availability",
      isDefault: "isDefault",
      name: "name",
      overrides: "overrides",
      timeZone: "timeZone",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateScheduleInput20240611
 */
const SchemaOut$CreateScheduleInput20240611: z.ZodType<
  External$CreateScheduleInput20240611, // output type of this zod object
  z.ZodTypeDef,
  CreateScheduleInput20240611 // the object to be transformed
> = z
  .object({
    availability: z
      .array(Schemas$ScheduleAvailabilityInput20240611.out)
      .optional(),
    isDefault: z.boolean(),
    name: z.string(),
    overrides: z.array(Schemas$ScheduleOverrideInput20240611.out).optional(),
    timeZone: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      availability: "availability",
      isDefault: "isDefault",
      name: "name",
      overrides: "overrides",
      timeZone: "timeZone",
    });
  });

export const Schemas$CreateScheduleInput20240611 = {
  in: SchemaIn$CreateScheduleInput20240611,
  out: SchemaOut$CreateScheduleInput20240611,
};
