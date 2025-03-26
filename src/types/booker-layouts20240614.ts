import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * BookerLayouts20240614
 */
export type BookerLayouts20240614 = {
  defaultLayout: "column" | "month" | "week";
  enabledLayouts: ("column" | "month" | "week")[];
};

/**
 * @internal
 * BookerLayouts20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BookerLayouts20240614 = {
  defaultLayout: "column" | "month" | "week";
  enabledLayouts: ("column" | "month" | "week")[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BookerLayouts20240614
 */
const SchemaIn$BookerLayouts20240614: z.ZodType<
  BookerLayouts20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    defaultLayout: z.enum(["column", "month", "week"]),
    enabledLayouts: z.array(z.enum(["column", "month", "week"])),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      defaultLayout: "defaultLayout",
      enabledLayouts: "enabledLayouts",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BookerLayouts20240614
 */
const SchemaOut$BookerLayouts20240614: z.ZodType<
  External$BookerLayouts20240614, // output type of this zod object
  z.ZodTypeDef,
  BookerLayouts20240614 // the object to be transformed
> = z
  .object({
    defaultLayout: z.enum(["column", "month", "week"]),
    enabledLayouts: z.array(z.enum(["column", "month", "week"])),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      defaultLayout: "defaultLayout",
      enabledLayouts: "enabledLayouts",
    });
  });

export const Schemas$BookerLayouts20240614 = {
  in: SchemaIn$BookerLayouts20240614,
  out: SchemaOut$BookerLayouts20240614,
};
