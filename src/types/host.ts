import { types } from "calcom_ts";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * Host
 */
export type Host = {
  /**
   * Only relevant for round robin event types. If true then the user must attend round robin event always.
   */
  mandatory?: boolean | undefined;
  priority?: ("high" | "highest" | "low" | "lowest" | "medium") | undefined;
  /**
   * Which user is the host of this event
   */
  userId: number;
};

/**
 * @internal
 * Host without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Host = {
  mandatory?: boolean | undefined;
  priority?: ("high" | "highest" | "low" | "lowest" | "medium") | undefined;
  userId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Host
 */
const SchemaIn$Host: z.ZodType<
  Host, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandatory: z.boolean().optional(),
    priority: z.enum(["high", "highest", "low", "lowest", "medium"]).optional(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandatory: "mandatory",
      priority: "priority",
      userId: "userId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Host
 */
const SchemaOut$Host: z.ZodType<
  External$Host, // output type of this zod object
  z.ZodTypeDef,
  Host // the object to be transformed
> = z
  .object({
    mandatory: z.boolean().optional(),
    priority: z.enum(["high", "highest", "low", "lowest", "medium"]).optional(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandatory: "mandatory",
      priority: "priority",
      userId: "userId",
    });
  });

export const Schemas$Host = {
  in: SchemaIn$Host,
  out: SchemaOut$Host,
};
