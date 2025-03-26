import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * Recurrence20240614
 */
export type Recurrence20240614 = {
  frequency: "monthly" | "weekly" | "yearly";
  /**
   * Repeats every {count} week | month | year
   */
  interval: number;
  /**
   * Repeats for a maximum of {count} events
   */
  occurrences: number;
};

/**
 * @internal
 * Recurrence20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Recurrence20240614 = {
  frequency: "monthly" | "weekly" | "yearly";
  interval: number;
  occurrences: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Recurrence20240614
 */
const SchemaIn$Recurrence20240614: z.ZodType<
  Recurrence20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    frequency: z.enum(["monthly", "weekly", "yearly"]),
    interval: z.number(),
    occurrences: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      frequency: "frequency",
      interval: "interval",
      occurrences: "occurrences",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Recurrence20240614
 */
const SchemaOut$Recurrence20240614: z.ZodType<
  External$Recurrence20240614, // output type of this zod object
  z.ZodTypeDef,
  Recurrence20240614 // the object to be transformed
> = z
  .object({
    frequency: z.enum(["monthly", "weekly", "yearly"]),
    interval: z.number(),
    occurrences: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      frequency: "frequency",
      interval: "interval",
      occurrences: "occurrences",
    });
  });

export const Schemas$Recurrence20240614 = {
  in: SchemaIn$Recurrence20240614,
  out: SchemaOut$Recurrence20240614,
};
