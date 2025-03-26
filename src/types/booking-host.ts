import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * BookingHost
 */
export type BookingHost = {
  email: string;
  id: number;
  name: string;
  timeZone: string;
  username: string;
};

/**
 * @internal
 * BookingHost without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BookingHost = {
  email: string;
  id: number;
  name: string;
  timeZone: string;
  username: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BookingHost
 */
const SchemaIn$BookingHost: z.ZodType<
  BookingHost, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    email: z.string(),
    id: z.number(),
    name: z.string(),
    timeZone: z.string(),
    username: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      email: "email",
      id: "id",
      name: "name",
      timeZone: "timeZone",
      username: "username",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BookingHost
 */
const SchemaOut$BookingHost: z.ZodType<
  External$BookingHost, // output type of this zod object
  z.ZodTypeDef,
  BookingHost // the object to be transformed
> = z
  .object({
    email: z.string(),
    id: z.number(),
    name: z.string(),
    timeZone: z.string(),
    username: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      email: "email",
      id: "id",
      name: "name",
      timeZone: "timeZone",
      username: "username",
    });
  });

export const Schemas$BookingHost = {
  in: SchemaIn$BookingHost,
  out: SchemaOut$BookingHost,
};
