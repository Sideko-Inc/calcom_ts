import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * ReassignBookingOutput20240813
 */
export type ReassignBookingOutput20240813 = {
  data: Record<string, any>;
  status: "error" | "success";
};

/**
 * @internal
 * ReassignBookingOutput20240813 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ReassignBookingOutput20240813 = {
  data: Record<string, any>;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ReassignBookingOutput20240813
 */
const SchemaIn$ReassignBookingOutput20240813: z.ZodType<
  ReassignBookingOutput20240813, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.record(z.string(), z.any()),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ReassignBookingOutput20240813
 */
const SchemaOut$ReassignBookingOutput20240813: z.ZodType<
  External$ReassignBookingOutput20240813, // output type of this zod object
  z.ZodTypeDef,
  ReassignBookingOutput20240813 // the object to be transformed
> = z
  .object({
    data: z.record(z.string(), z.any()),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$ReassignBookingOutput20240813 = {
  in: SchemaIn$ReassignBookingOutput20240813,
  out: SchemaOut$ReassignBookingOutput20240813,
};
