import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * OutputAddressLocation20240614
 */
export type OutputAddressLocation20240614 = {
  address: string;
  public: boolean;
  /**
   * only allowed value for type is `address`
   */
  type:
    | "address"
    | "attendeeAddress"
    | "attendeeDefined"
    | "attendeePhone"
    | "integration"
    | "link"
    | "organizersDefaultApp"
    | "phone";
};

/**
 * @internal
 * OutputAddressLocation20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$OutputAddressLocation20240614 = {
  address: string;
  public: boolean;
  type:
    | "address"
    | "attendeeAddress"
    | "attendeeDefined"
    | "attendeePhone"
    | "integration"
    | "link"
    | "organizersDefaultApp"
    | "phone";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object OutputAddressLocation20240614
 */
const SchemaIn$OutputAddressLocation20240614: z.ZodType<
  OutputAddressLocation20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: z.string(),
    public: z.boolean(),
    type: z.enum([
      "address",
      "attendeeAddress",
      "attendeeDefined",
      "attendeePhone",
      "integration",
      "link",
      "organizersDefaultApp",
      "phone",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      public: "public",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$OutputAddressLocation20240614
 */
const SchemaOut$OutputAddressLocation20240614: z.ZodType<
  External$OutputAddressLocation20240614, // output type of this zod object
  z.ZodTypeDef,
  OutputAddressLocation20240614 // the object to be transformed
> = z
  .object({
    address: z.string(),
    public: z.boolean(),
    type: z.enum([
      "address",
      "attendeeAddress",
      "attendeeDefined",
      "attendeePhone",
      "integration",
      "link",
      "organizersDefaultApp",
      "phone",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      public: "public",
      type: "type",
    });
  });

export const Schemas$OutputAddressLocation20240614 = {
  in: SchemaIn$OutputAddressLocation20240614,
  out: SchemaOut$OutputAddressLocation20240614,
};
