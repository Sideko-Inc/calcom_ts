import { zodTransform } from "calcom_ts/core";
import {
  External$ScheduleAvailabilityInput20240611,
  ScheduleAvailabilityInput20240611,
  Schemas$ScheduleAvailabilityInput20240611,
} from "calcom_ts/types/schedule-availability-input20240611";
import {
  External$ScheduleOverrideInput20240611,
  ScheduleOverrideInput20240611,
  Schemas$ScheduleOverrideInput20240611,
} from "calcom_ts/types/schedule-override-input20240611";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  orgId: number;
  scheduleId: number;
  userId: number;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  orgId: number;
  scheduleId: number;
  userId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeleteRequest
 */
const SchemaIn$DeleteRequest: z.ZodType<
  DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    orgId: z.number(),
    scheduleId: z.number(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      scheduleId: "scheduleId",
      userId: "userId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeleteRequest
 */
const SchemaOut$DeleteRequest: z.ZodType<
  External$DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  DeleteRequest // the object to be transformed
> = z
  .object({
    orgId: z.number(),
    scheduleId: z.number(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      scheduleId: "scheduleId",
      userId: "userId",
    });
  });

export const Schemas$DeleteRequest = {
  in: SchemaIn$DeleteRequest,
  out: SchemaOut$DeleteRequest,
};

/**
 * ListRequest
 */
export type ListRequest = {
  orgId: number;
  userId: number;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  orgId: number;
  userId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    orgId: z.number(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      userId: "userId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    orgId: z.number(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      userId: "userId",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  orgId: number;
  scheduleId: number;
  userId: number;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  orgId: number;
  scheduleId: number;
  userId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    orgId: z.number(),
    scheduleId: z.number(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      scheduleId: "scheduleId",
      userId: "userId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    orgId: z.number(),
    scheduleId: z.number(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      scheduleId: "scheduleId",
      userId: "userId",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * PatchRequest
 */
export type PatchRequest = {
  availability?: ScheduleAvailabilityInput20240611[] | undefined;
  isDefault?: boolean | undefined;
  name?: string | undefined;
  overrides?: ScheduleOverrideInput20240611[] | undefined;
  timeZone?: string | undefined;
  orgId: number;
  scheduleId: number;
  userId: number;
};

/**
 * @internal
 * PatchRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PatchRequest = {
  availability?: External$ScheduleAvailabilityInput20240611[] | undefined;
  isDefault?: boolean | undefined;
  name?: string | undefined;
  overrides?: External$ScheduleOverrideInput20240611[] | undefined;
  timeZone?: string | undefined;
  orgId: number;
  scheduleId: number;
  userId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PatchRequest
 */
const SchemaIn$PatchRequest: z.ZodType<
  PatchRequest, // output type of this zod object
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
    orgId: z.number(),
    scheduleId: z.number(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      availability: "availability",
      isDefault: "isDefault",
      name: "name",
      overrides: "overrides",
      timeZone: "timeZone",
      orgId: "orgId",
      scheduleId: "scheduleId",
      userId: "userId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PatchRequest
 */
const SchemaOut$PatchRequest: z.ZodType<
  External$PatchRequest, // output type of this zod object
  z.ZodTypeDef,
  PatchRequest // the object to be transformed
> = z
  .object({
    availability: z
      .array(Schemas$ScheduleAvailabilityInput20240611.out)
      .optional(),
    isDefault: z.boolean().optional(),
    name: z.string().optional(),
    overrides: z.array(Schemas$ScheduleOverrideInput20240611.out).optional(),
    timeZone: z.string().optional(),
    orgId: z.number(),
    scheduleId: z.number(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      availability: "availability",
      isDefault: "isDefault",
      name: "name",
      overrides: "overrides",
      timeZone: "timeZone",
      orgId: "orgId",
      scheduleId: "scheduleId",
      userId: "userId",
    });
  });

export const Schemas$PatchRequest = {
  in: SchemaIn$PatchRequest,
  out: SchemaOut$PatchRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
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
  orgId: number;
  userId: number;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  availability?: External$ScheduleAvailabilityInput20240611[] | undefined;
  isDefault: boolean;
  name: string;
  overrides?: External$ScheduleOverrideInput20240611[] | undefined;
  timeZone: string;
  orgId: number;
  userId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
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
    orgId: z.number(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      availability: "availability",
      isDefault: "isDefault",
      name: "name",
      overrides: "overrides",
      timeZone: "timeZone",
      orgId: "orgId",
      userId: "userId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
> = z
  .object({
    availability: z
      .array(Schemas$ScheduleAvailabilityInput20240611.out)
      .optional(),
    isDefault: z.boolean(),
    name: z.string(),
    overrides: z.array(Schemas$ScheduleOverrideInput20240611.out).optional(),
    timeZone: z.string(),
    orgId: z.number(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      availability: "availability",
      isDefault: "isDefault",
      name: "name",
      overrides: "overrides",
      timeZone: "timeZone",
      orgId: "orgId",
      userId: "userId",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
