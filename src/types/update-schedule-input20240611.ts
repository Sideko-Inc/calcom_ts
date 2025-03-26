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
 * UpdateScheduleInput20240611
 */
export type UpdateScheduleInput20240611 = {
  availability?: ScheduleAvailabilityInput20240611[] | undefined;
  isDefault?: boolean | undefined;
  name?: string | undefined;
  overrides?: ScheduleOverrideInput20240611[] | undefined;
  timeZone?: string | undefined;
};

/**
 * @internal
 * UpdateScheduleInput20240611 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateScheduleInput20240611 = {
  availability?: External$ScheduleAvailabilityInput20240611[] | undefined;
  isDefault?: boolean | undefined;
  name?: string | undefined;
  overrides?: External$ScheduleOverrideInput20240611[] | undefined;
  timeZone?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateScheduleInput20240611
 */
const SchemaIn$UpdateScheduleInput20240611: z.ZodType<
  UpdateScheduleInput20240611, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    availability: z
      .array(Schemas$ScheduleAvailabilityInput20240611.in)
      .optional(),
    isDefault: z.boolean().optional(),
    name: z.string().optional(),
    overrides: z.array(Schemas$ScheduleOverrideInput20240611.in).optional(),
    timeZone: z.string().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateScheduleInput20240611
 */
const SchemaOut$UpdateScheduleInput20240611: z.ZodType<
  External$UpdateScheduleInput20240611, // output type of this zod object
  z.ZodTypeDef,
  UpdateScheduleInput20240611 // the object to be transformed
> = z
  .object({
    availability: z
      .array(Schemas$ScheduleAvailabilityInput20240611.out)
      .optional(),
    isDefault: z.boolean().optional(),
    name: z.string().optional(),
    overrides: z.array(Schemas$ScheduleOverrideInput20240611.out).optional(),
    timeZone: z.string().optional(),
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

export const Schemas$UpdateScheduleInput20240611 = {
  in: SchemaIn$UpdateScheduleInput20240611,
  out: SchemaOut$UpdateScheduleInput20240611,
};
