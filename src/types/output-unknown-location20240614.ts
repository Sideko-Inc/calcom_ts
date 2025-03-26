import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * OutputUnknownLocation20240614
 */
export type OutputUnknownLocation20240614 = {
  location: string;
  /**
   * only allowed value for type is `unknown`
   */
  type:
    | "address"
    | "attendeeAddress"
    | "attendeeDefined"
    | "attendeePhone"
    | "conferencing"
    | "integration"
    | "link"
    | "organizersDefaultApp"
    | "phone"
    | "unknown";
};

/**
 * @internal
 * OutputUnknownLocation20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$OutputUnknownLocation20240614 = {
  location: string;
  type:
    | "address"
    | "attendeeAddress"
    | "attendeeDefined"
    | "attendeePhone"
    | "conferencing"
    | "integration"
    | "link"
    | "organizersDefaultApp"
    | "phone"
    | "unknown";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object OutputUnknownLocation20240614
 */
const SchemaIn$OutputUnknownLocation20240614: z.ZodType<
  OutputUnknownLocation20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    location: z.string(),
    type: z.enum([
      "address",
      "attendeeAddress",
      "attendeeDefined",
      "attendeePhone",
      "conferencing",
      "integration",
      "link",
      "organizersDefaultApp",
      "phone",
      "unknown",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      location: "location",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$OutputUnknownLocation20240614
 */
const SchemaOut$OutputUnknownLocation20240614: z.ZodType<
  External$OutputUnknownLocation20240614, // output type of this zod object
  z.ZodTypeDef,
  OutputUnknownLocation20240614 // the object to be transformed
> = z
  .object({
    location: z.string(),
    type: z.enum([
      "address",
      "attendeeAddress",
      "attendeeDefined",
      "attendeePhone",
      "conferencing",
      "integration",
      "link",
      "organizersDefaultApp",
      "phone",
      "unknown",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      location: "location",
      type: "type",
    });
  });

export const Schemas$OutputUnknownLocation20240614 = {
  in: SchemaIn$OutputUnknownLocation20240614,
  out: SchemaOut$OutputUnknownLocation20240614,
};
