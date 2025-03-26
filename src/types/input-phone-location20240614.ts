import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * InputPhoneLocation20240614
 */
export type InputPhoneLocation20240614 = {
  phone: string;
  public: boolean;
  /**
   * only allowed value for type is `phone`
   */
  type: string;
};

/**
 * @internal
 * InputPhoneLocation20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InputPhoneLocation20240614 = {
  phone: string;
  public: boolean;
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InputPhoneLocation20240614
 */
const SchemaIn$InputPhoneLocation20240614: z.ZodType<
  InputPhoneLocation20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    phone: z.string(),
    public: z.boolean(),
    type: z.string(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InputPhoneLocation20240614
 */
const SchemaOut$InputPhoneLocation20240614: z.ZodType<
  External$InputPhoneLocation20240614, // output type of this zod object
  z.ZodTypeDef,
  InputPhoneLocation20240614 // the object to be transformed
> = z
  .object({
    phone: z.string(),
    public: z.boolean(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      phone: "phone",
      public: "public",
      type: "type",
    });
  });

export const Schemas$InputPhoneLocation20240614 = {
  in: SchemaIn$InputPhoneLocation20240614,
  out: SchemaOut$InputPhoneLocation20240614,
};
