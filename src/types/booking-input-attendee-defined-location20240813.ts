import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * BookingInputAttendeeDefinedLocation20240813
 */
export type BookingInputAttendeeDefinedLocation20240813 = {
  location: string;
  /**
   * only allowed value for type is `attendeeDefined`
   */
  type: string;
};

/**
 * @internal
 * BookingInputAttendeeDefinedLocation20240813 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BookingInputAttendeeDefinedLocation20240813 = {
  location: string;
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BookingInputAttendeeDefinedLocation20240813
 */
const SchemaIn$BookingInputAttendeeDefinedLocation20240813: z.ZodType<
  BookingInputAttendeeDefinedLocation20240813, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    location: z.string(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      location: "location",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BookingInputAttendeeDefinedLocation20240813
 */
const SchemaOut$BookingInputAttendeeDefinedLocation20240813: z.ZodType<
  External$BookingInputAttendeeDefinedLocation20240813, // output type of this zod object
  z.ZodTypeDef,
  BookingInputAttendeeDefinedLocation20240813 // the object to be transformed
> = z
  .object({
    location: z.string(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      location: "location",
      type: "type",
    });
  });

export const Schemas$BookingInputAttendeeDefinedLocation20240813 = {
  in: SchemaIn$BookingInputAttendeeDefinedLocation20240813,
  out: SchemaOut$BookingInputAttendeeDefinedLocation20240813,
};
