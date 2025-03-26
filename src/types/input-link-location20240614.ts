import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * InputLinkLocation20240614
 */
export type InputLinkLocation20240614 = {
  link: string;
  public: boolean;
  /**
   * only allowed value for type is `link`
   */
  type: string;
};

/**
 * @internal
 * InputLinkLocation20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InputLinkLocation20240614 = {
  link: string;
  public: boolean;
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InputLinkLocation20240614
 */
const SchemaIn$InputLinkLocation20240614: z.ZodType<
  InputLinkLocation20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    link: z.string(),
    public: z.boolean(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      link: "link",
      public: "public",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InputLinkLocation20240614
 */
const SchemaOut$InputLinkLocation20240614: z.ZodType<
  External$InputLinkLocation20240614, // output type of this zod object
  z.ZodTypeDef,
  InputLinkLocation20240614 // the object to be transformed
> = z
  .object({
    link: z.string(),
    public: z.boolean(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      link: "link",
      public: "public",
      type: "type",
    });
  });

export const Schemas$InputLinkLocation20240614 = {
  in: SchemaIn$InputLinkLocation20240614,
  out: SchemaOut$InputLinkLocation20240614,
};
