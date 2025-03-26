import {
  CalendarLink,
  External$CalendarLink,
  Schemas$CalendarLink,
} from "./calendar-link";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CalendarLinksOutput20240813
 */
export type CalendarLinksOutput20240813 = {
  /**
   * Calendar links for the booking
   */
  data: CalendarLink[];
  /**
   * The status of the request, always 'success' for successful responses
   */
  status: Record<string, any>;
};

/**
 * @internal
 * CalendarLinksOutput20240813 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CalendarLinksOutput20240813 = {
  data: External$CalendarLink[];
  status: Record<string, any>;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CalendarLinksOutput20240813
 */
const SchemaIn$CalendarLinksOutput20240813: z.ZodType<
  CalendarLinksOutput20240813, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$CalendarLink.in),
    status: z.record(z.string(), z.any()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CalendarLinksOutput20240813
 */
const SchemaOut$CalendarLinksOutput20240813: z.ZodType<
  External$CalendarLinksOutput20240813, // output type of this zod object
  z.ZodTypeDef,
  CalendarLinksOutput20240813 // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$CalendarLink.out),
    status: z.record(z.string(), z.any()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$CalendarLinksOutput20240813 = {
  in: SchemaIn$CalendarLinksOutput20240813,
  out: SchemaOut$CalendarLinksOutput20240813,
};
