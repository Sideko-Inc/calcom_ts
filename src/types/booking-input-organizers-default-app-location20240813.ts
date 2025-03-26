import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * BookingInputOrganizersDefaultAppLocation20240813
 */
export type BookingInputOrganizersDefaultAppLocation20240813 = {
  /**
   * only available for team event types and the only allowed value for type is `organizersDefaultApp` - it refers to the default app defined by the organizer.
   */
  type: string;
};

/**
 * @internal
 * BookingInputOrganizersDefaultAppLocation20240813 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BookingInputOrganizersDefaultAppLocation20240813 = {
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BookingInputOrganizersDefaultAppLocation20240813
 */
const SchemaIn$BookingInputOrganizersDefaultAppLocation20240813: z.ZodType<
  BookingInputOrganizersDefaultAppLocation20240813, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BookingInputOrganizersDefaultAppLocation20240813
 */
const SchemaOut$BookingInputOrganizersDefaultAppLocation20240813: z.ZodType<
  External$BookingInputOrganizersDefaultAppLocation20240813, // output type of this zod object
  z.ZodTypeDef,
  BookingInputOrganizersDefaultAppLocation20240813 // the object to be transformed
> = z
  .object({
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$BookingInputOrganizersDefaultAppLocation20240813 = {
  in: SchemaIn$BookingInputOrganizersDefaultAppLocation20240813,
  out: SchemaOut$BookingInputOrganizersDefaultAppLocation20240813,
};
