import {
  ConnectedCalendarsData,
  External$ConnectedCalendarsData,
  Schemas$ConnectedCalendarsData,
} from "./connected-calendars-data";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * ConnectedCalendarsOutput
 */
export type ConnectedCalendarsOutput = {
  data: ConnectedCalendarsData;
  status: "error" | "success";
};

/**
 * @internal
 * ConnectedCalendarsOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConnectedCalendarsOutput = {
  data: External$ConnectedCalendarsData;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConnectedCalendarsOutput
 */
const SchemaIn$ConnectedCalendarsOutput: z.ZodType<
  ConnectedCalendarsOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$ConnectedCalendarsData.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConnectedCalendarsOutput
 */
const SchemaOut$ConnectedCalendarsOutput: z.ZodType<
  External$ConnectedCalendarsOutput, // output type of this zod object
  z.ZodTypeDef,
  ConnectedCalendarsOutput // the object to be transformed
> = z
  .object({
    data: Schemas$ConnectedCalendarsData.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$ConnectedCalendarsOutput = {
  in: SchemaIn$ConnectedCalendarsOutput,
  out: SchemaOut$ConnectedCalendarsOutput,
};
