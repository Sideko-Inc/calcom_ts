import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * OutputLinkLocation20240614
 */
export type OutputLinkLocation20240614 = {
  link: string;
  public: boolean;
  /**
   * only allowed value for type is `link`
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
 * OutputLinkLocation20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$OutputLinkLocation20240614 = {
  link: string;
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
 * Takes network data, validates it, and transforms keys to match typescript object OutputLinkLocation20240614
 */
const SchemaIn$OutputLinkLocation20240614: z.ZodType<
  OutputLinkLocation20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    link: z.string(),
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
      link: "link",
      public: "public",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$OutputLinkLocation20240614
 */
const SchemaOut$OutputLinkLocation20240614: z.ZodType<
  External$OutputLinkLocation20240614, // output type of this zod object
  z.ZodTypeDef,
  OutputLinkLocation20240614 // the object to be transformed
> = z
  .object({
    link: z.string(),
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
      link: "link",
      public: "public",
      type: "type",
    });
  });

export const Schemas$OutputLinkLocation20240614 = {
  in: SchemaIn$OutputLinkLocation20240614,
  out: SchemaOut$OutputLinkLocation20240614,
};
