import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DestinationCalendar20240614
 */
export type DestinationCalendar20240614 = {
  /**
   * The external ID of the destination calendar. Refer to the /api/v2/calendars endpoint to retrieve the external IDs of your connected calendars.
   */
  externalId: string;
  /**
   * The integration type of the destination calendar. Refer to the /api/v2/calendars endpoint to retrieve the integration type of your connected calendars.
   */
  integration: string;
};

/**
 * @internal
 * DestinationCalendar20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DestinationCalendar20240614 = {
  externalId: string;
  integration: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DestinationCalendar20240614
 */
const SchemaIn$DestinationCalendar20240614: z.ZodType<
  DestinationCalendar20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    externalId: z.string(),
    integration: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      externalId: "externalId",
      integration: "integration",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DestinationCalendar20240614
 */
const SchemaOut$DestinationCalendar20240614: z.ZodType<
  External$DestinationCalendar20240614, // output type of this zod object
  z.ZodTypeDef,
  DestinationCalendar20240614 // the object to be transformed
> = z
  .object({
    externalId: z.string(),
    integration: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      externalId: "externalId",
      integration: "integration",
    });
  });

export const Schemas$DestinationCalendar20240614 = {
  in: SchemaIn$DestinationCalendar20240614,
  out: SchemaOut$DestinationCalendar20240614,
};
