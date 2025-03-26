import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * OutputPhoneLocation20240614
 */
export type OutputPhoneLocation20240614 = {
  phone: string;
  public: boolean;
  /**
   * only allowed value for type is `phone`
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
 * OutputPhoneLocation20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$OutputPhoneLocation20240614 = {
  phone: string;
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
 * Takes network data, validates it, and transforms keys to match typescript object OutputPhoneLocation20240614
 */
const SchemaIn$OutputPhoneLocation20240614: z.ZodType<
  OutputPhoneLocation20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    phone: z.string(),
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
      phone: "phone",
      public: "public",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$OutputPhoneLocation20240614
 */
const SchemaOut$OutputPhoneLocation20240614: z.ZodType<
  External$OutputPhoneLocation20240614, // output type of this zod object
  z.ZodTypeDef,
  OutputPhoneLocation20240614 // the object to be transformed
> = z
  .object({
    phone: z.string(),
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
      phone: "phone",
      public: "public",
      type: "type",
    });
  });

export const Schemas$OutputPhoneLocation20240614 = {
  in: SchemaIn$OutputPhoneLocation20240614,
  out: SchemaOut$OutputPhoneLocation20240614,
};
