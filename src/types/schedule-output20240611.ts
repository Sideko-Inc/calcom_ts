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
 * ScheduleOutput20240611
 */
export type ScheduleOutput20240611 = {
  availability: ScheduleAvailabilityInput20240611[];
  id: number;
  isDefault: boolean;
  name: string;
  overrides: ScheduleOverrideInput20240611[];
  ownerId: number;
  timeZone: string;
};

/**
 * @internal
 * ScheduleOutput20240611 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ScheduleOutput20240611 = {
  availability: External$ScheduleAvailabilityInput20240611[];
  id: number;
  isDefault: boolean;
  name: string;
  overrides: External$ScheduleOverrideInput20240611[];
  ownerId: number;
  timeZone: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ScheduleOutput20240611
 */
const SchemaIn$ScheduleOutput20240611: z.ZodType<
  ScheduleOutput20240611, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    availability: z.array(Schemas$ScheduleAvailabilityInput20240611.in),
    id: z.number(),
    isDefault: z.boolean(),
    name: z.string(),
    overrides: z.array(Schemas$ScheduleOverrideInput20240611.in),
    ownerId: z.number(),
    timeZone: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      availability: "availability",
      id: "id",
      isDefault: "isDefault",
      name: "name",
      overrides: "overrides",
      ownerId: "ownerId",
      timeZone: "timeZone",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ScheduleOutput20240611
 */
const SchemaOut$ScheduleOutput20240611: z.ZodType<
  External$ScheduleOutput20240611, // output type of this zod object
  z.ZodTypeDef,
  ScheduleOutput20240611 // the object to be transformed
> = z
  .object({
    availability: z.array(Schemas$ScheduleAvailabilityInput20240611.out),
    id: z.number(),
    isDefault: z.boolean(),
    name: z.string(),
    overrides: z.array(Schemas$ScheduleOverrideInput20240611.out),
    ownerId: z.number(),
    timeZone: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      availability: "availability",
      id: "id",
      isDefault: "isDefault",
      name: "name",
      overrides: "overrides",
      ownerId: "ownerId",
      timeZone: "timeZone",
    });
  });

export const Schemas$ScheduleOutput20240611 = {
  in: SchemaIn$ScheduleOutput20240611,
  out: SchemaOut$ScheduleOutput20240611,
};
