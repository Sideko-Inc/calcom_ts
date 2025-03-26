import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CalendarLink
 */
export type CalendarLink = {
  /**
   * The label of the calendar link
   */
  label: string;
  /**
   * The link to the calendar
   */
  link: string;
};

/**
 * @internal
 * CalendarLink without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CalendarLink = {
  label: string;
  link: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CalendarLink
 */
const SchemaIn$CalendarLink: z.ZodType<
  CalendarLink, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    label: z.string(),
    link: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      label: "label",
      link: "link",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CalendarLink
 */
const SchemaOut$CalendarLink: z.ZodType<
  External$CalendarLink, // output type of this zod object
  z.ZodTypeDef,
  CalendarLink // the object to be transformed
> = z
  .object({
    label: z.string(),
    link: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      label: "label",
      link: "link",
    });
  });

export const Schemas$CalendarLink = {
  in: SchemaIn$CalendarLink,
  out: SchemaOut$CalendarLink,
};
