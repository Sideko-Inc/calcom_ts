import { Attendee, External$Attendee, Schemas$Attendee } from "./attendee";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * MarkAbsentBookingInput20240813
 */
export type MarkAbsentBookingInput20240813 = {
  attendees?: Attendee[] | undefined;
  /**
   * Whether the host was absent
   */
  host?: boolean | undefined;
};

/**
 * @internal
 * MarkAbsentBookingInput20240813 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$MarkAbsentBookingInput20240813 = {
  attendees?: External$Attendee[] | undefined;
  host?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object MarkAbsentBookingInput20240813
 */
const SchemaIn$MarkAbsentBookingInput20240813: z.ZodType<
  MarkAbsentBookingInput20240813, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    attendees: z.array(Schemas$Attendee.in).optional(),
    host: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attendees: "attendees",
      host: "host",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$MarkAbsentBookingInput20240813
 */
const SchemaOut$MarkAbsentBookingInput20240813: z.ZodType<
  External$MarkAbsentBookingInput20240813, // output type of this zod object
  z.ZodTypeDef,
  MarkAbsentBookingInput20240813 // the object to be transformed
> = z
  .object({
    attendees: z.array(Schemas$Attendee.out).optional(),
    host: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attendees: "attendees",
      host: "host",
    });
  });

export const Schemas$MarkAbsentBookingInput20240813 = {
  in: SchemaIn$MarkAbsentBookingInput20240813,
  out: SchemaOut$MarkAbsentBookingInput20240813,
};
