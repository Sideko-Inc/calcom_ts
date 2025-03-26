import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * InputAddressLocation20240614
 */
export type InputAddressLocation20240614 = {
  address: string;
  public: boolean;
  /**
   * only allowed value for type is `address`
   */
  type: string;
};

/**
 * @internal
 * InputAddressLocation20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InputAddressLocation20240614 = {
  address: string;
  public: boolean;
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InputAddressLocation20240614
 */
const SchemaIn$InputAddressLocation20240614: z.ZodType<
  InputAddressLocation20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: z.string(),
    public: z.boolean(),
    type: z.string(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InputAddressLocation20240614
 */
const SchemaOut$InputAddressLocation20240614: z.ZodType<
  External$InputAddressLocation20240614, // output type of this zod object
  z.ZodTypeDef,
  InputAddressLocation20240614 // the object to be transformed
> = z
  .object({
    address: z.string(),
    public: z.boolean(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      public: "public",
      type: "type",
    });
  });

export const Schemas$InputAddressLocation20240614 = {
  in: SchemaIn$InputAddressLocation20240614,
  out: SchemaOut$InputAddressLocation20240614,
};
