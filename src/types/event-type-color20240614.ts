import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * EventTypeColor20240614
 */
export type EventTypeColor20240614 = {
  /**
   * Color used for event types in dark theme
   */
  darkThemeHex: string;
  /**
   * Color used for event types in light theme
   */
  lightThemeHex: string;
};

/**
 * @internal
 * EventTypeColor20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$EventTypeColor20240614 = {
  darkThemeHex: string;
  lightThemeHex: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object EventTypeColor20240614
 */
const SchemaIn$EventTypeColor20240614: z.ZodType<
  EventTypeColor20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    darkThemeHex: z.string(),
    lightThemeHex: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      darkThemeHex: "darkThemeHex",
      lightThemeHex: "lightThemeHex",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$EventTypeColor20240614
 */
const SchemaOut$EventTypeColor20240614: z.ZodType<
  External$EventTypeColor20240614, // output type of this zod object
  z.ZodTypeDef,
  EventTypeColor20240614 // the object to be transformed
> = z
  .object({
    darkThemeHex: z.string(),
    lightThemeHex: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      darkThemeHex: "darkThemeHex",
      lightThemeHex: "lightThemeHex",
    });
  });

export const Schemas$EventTypeColor20240614 = {
  in: SchemaIn$EventTypeColor20240614,
  out: SchemaOut$EventTypeColor20240614,
};
