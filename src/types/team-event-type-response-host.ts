import { types } from "calcom_ts";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * TeamEventTypeResponseHost
 */
export type TeamEventTypeResponseHost = {
  avatarUrl?: string | null | undefined;
  /**
   * Only relevant for round robin event types. If true then the user must attend round robin event always.
   */
  mandatory?: boolean | undefined;
  name: string;
  priority?: ("high" | "highest" | "low" | "lowest" | "medium") | undefined;
  /**
   * Which user is the host of this event
   */
  userId: number;
};

/**
 * @internal
 * TeamEventTypeResponseHost without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TeamEventTypeResponseHost = {
  avatarUrl?: string | null | undefined;
  mandatory?: boolean | undefined;
  name: string;
  priority?: ("high" | "highest" | "low" | "lowest" | "medium") | undefined;
  userId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TeamEventTypeResponseHost
 */
const SchemaIn$TeamEventTypeResponseHost: z.ZodType<
  TeamEventTypeResponseHost, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    avatarUrl: z.string().nullable().optional(),
    mandatory: z.boolean().optional(),
    name: z.string(),
    priority: z.enum(["high", "highest", "low", "lowest", "medium"]).optional(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      avatarUrl: "avatarUrl",
      mandatory: "mandatory",
      name: "name",
      priority: "priority",
      userId: "userId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TeamEventTypeResponseHost
 */
const SchemaOut$TeamEventTypeResponseHost: z.ZodType<
  External$TeamEventTypeResponseHost, // output type of this zod object
  z.ZodTypeDef,
  TeamEventTypeResponseHost // the object to be transformed
> = z
  .object({
    avatarUrl: z.string().nullable().optional(),
    mandatory: z.boolean().optional(),
    name: z.string(),
    priority: z.enum(["high", "highest", "low", "lowest", "medium"]).optional(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      avatarUrl: "avatarUrl",
      mandatory: "mandatory",
      name: "name",
      priority: "priority",
      userId: "userId",
    });
  });

export const Schemas$TeamEventTypeResponseHost = {
  in: SchemaIn$TeamEventTypeResponseHost,
  out: SchemaOut$TeamEventTypeResponseHost,
};
