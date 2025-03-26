import {
  ConnectedCalendar,
  External$ConnectedCalendar,
  Schemas$ConnectedCalendar,
} from "./connected-calendar";
import {
  DestinationCalendar,
  External$DestinationCalendar,
  Schemas$DestinationCalendar,
} from "./destination-calendar";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * ConnectedCalendarsData
 */
export type ConnectedCalendarsData = {
  connectedCalendars: ConnectedCalendar[];
  destinationCalendar: DestinationCalendar;
};

/**
 * @internal
 * ConnectedCalendarsData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConnectedCalendarsData = {
  connectedCalendars: External$ConnectedCalendar[];
  destinationCalendar: External$DestinationCalendar;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConnectedCalendarsData
 */
const SchemaIn$ConnectedCalendarsData: z.ZodType<
  ConnectedCalendarsData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    connectedCalendars: z.array(Schemas$ConnectedCalendar.in),
    destinationCalendar: Schemas$DestinationCalendar.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      connectedCalendars: "connectedCalendars",
      destinationCalendar: "destinationCalendar",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConnectedCalendarsData
 */
const SchemaOut$ConnectedCalendarsData: z.ZodType<
  External$ConnectedCalendarsData, // output type of this zod object
  z.ZodTypeDef,
  ConnectedCalendarsData // the object to be transformed
> = z
  .object({
    connectedCalendars: z.array(Schemas$ConnectedCalendar.out),
    destinationCalendar: Schemas$DestinationCalendar.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      connectedCalendars: "connectedCalendars",
      destinationCalendar: "destinationCalendar",
    });
  });

export const Schemas$ConnectedCalendarsData = {
  in: SchemaIn$ConnectedCalendarsData,
  out: SchemaOut$ConnectedCalendarsData,
};
