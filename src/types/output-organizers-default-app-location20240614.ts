import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * OutputOrganizersDefaultAppLocation20240614
 */
export type OutputOrganizersDefaultAppLocation20240614 = {
  /**
   * only allowed value for type is `organizersDefaultApp`
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
 * OutputOrganizersDefaultAppLocation20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$OutputOrganizersDefaultAppLocation20240614 = {
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
 * Takes network data, validates it, and transforms keys to match typescript object OutputOrganizersDefaultAppLocation20240614
 */
const SchemaIn$OutputOrganizersDefaultAppLocation20240614: z.ZodType<
  OutputOrganizersDefaultAppLocation20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
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
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$OutputOrganizersDefaultAppLocation20240614
 */
const SchemaOut$OutputOrganizersDefaultAppLocation20240614: z.ZodType<
  External$OutputOrganizersDefaultAppLocation20240614, // output type of this zod object
  z.ZodTypeDef,
  OutputOrganizersDefaultAppLocation20240614 // the object to be transformed
> = z
  .object({
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
      type: "type",
    });
  });

export const Schemas$OutputOrganizersDefaultAppLocation20240614 = {
  in: SchemaIn$OutputOrganizersDefaultAppLocation20240614,
  out: SchemaOut$OutputOrganizersDefaultAppLocation20240614,
};
