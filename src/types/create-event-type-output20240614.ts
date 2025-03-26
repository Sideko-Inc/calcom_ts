import {
  EventTypeOutput20240614,
  External$EventTypeOutput20240614,
  Schemas$EventTypeOutput20240614,
} from "./event-type-output20240614";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateEventTypeOutput20240614
 */
export type CreateEventTypeOutput20240614 = {
  data: EventTypeOutput20240614;
  status: "error" | "success";
};

/**
 * @internal
 * CreateEventTypeOutput20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateEventTypeOutput20240614 = {
  data: External$EventTypeOutput20240614;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateEventTypeOutput20240614
 */
const SchemaIn$CreateEventTypeOutput20240614: z.ZodType<
  CreateEventTypeOutput20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$EventTypeOutput20240614.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateEventTypeOutput20240614
 */
const SchemaOut$CreateEventTypeOutput20240614: z.ZodType<
  External$CreateEventTypeOutput20240614, // output type of this zod object
  z.ZodTypeDef,
  CreateEventTypeOutput20240614 // the object to be transformed
> = z
  .object({
    data: Schemas$EventTypeOutput20240614.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$CreateEventTypeOutput20240614 = {
  in: SchemaIn$CreateEventTypeOutput20240614,
  out: SchemaOut$CreateEventTypeOutput20240614,
};
