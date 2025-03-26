import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * BookingInputAttendeeAddressLocation20240813
 */
export type BookingInputAttendeeAddressLocation20240813 = {
  address: string;
  /**
   * only allowed value for type is `attendeeAddress`
   */
  type: string;
};

/**
 * @internal
 * BookingInputAttendeeAddressLocation20240813 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BookingInputAttendeeAddressLocation20240813 = {
  address: string;
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BookingInputAttendeeAddressLocation20240813
 */
const SchemaIn$BookingInputAttendeeAddressLocation20240813: z.ZodType<
  BookingInputAttendeeAddressLocation20240813, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: z.string(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BookingInputAttendeeAddressLocation20240813
 */
const SchemaOut$BookingInputAttendeeAddressLocation20240813: z.ZodType<
  External$BookingInputAttendeeAddressLocation20240813, // output type of this zod object
  z.ZodTypeDef,
  BookingInputAttendeeAddressLocation20240813 // the object to be transformed
> = z
  .object({
    address: z.string(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      type: "type",
    });
  });

export const Schemas$BookingInputAttendeeAddressLocation20240813 = {
  in: SchemaIn$BookingInputAttendeeAddressLocation20240813,
  out: SchemaOut$BookingInputAttendeeAddressLocation20240813,
};
