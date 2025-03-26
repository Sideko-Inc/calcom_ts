import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * MultiEmailFieldInput20240614
 */
export type MultiEmailFieldInput20240614 = {
  /**
   * Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `consultants` and the URL contains query parameter `&consultants=alice@gmail.com&consultants=bob@gmail.com`,      the these emails will be added and none more can be added.
   */
  disableOnPrefill?: boolean | undefined;
  /**
   * If true show under event type settings but don't show this booking field in the Booker. If false show in both.
   */
  hidden: boolean;
  label: string;
  placeholder: string;
  required: boolean;
  /**
   * Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking
   */
  slug: string;
  /**
   * only allowed value for type is `multiemail`
   */
  type: string;
};

/**
 * @internal
 * MultiEmailFieldInput20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$MultiEmailFieldInput20240614 = {
  disableOnPrefill?: boolean | undefined;
  hidden: boolean;
  label: string;
  placeholder: string;
  required: boolean;
  slug: string;
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object MultiEmailFieldInput20240614
 */
const SchemaIn$MultiEmailFieldInput20240614: z.ZodType<
  MultiEmailFieldInput20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    disableOnPrefill: z.boolean().optional(),
    hidden: z.boolean(),
    label: z.string(),
    placeholder: z.string(),
    required: z.boolean(),
    slug: z.string(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disableOnPrefill: "disableOnPrefill",
      hidden: "hidden",
      label: "label",
      placeholder: "placeholder",
      required: "required",
      slug: "slug",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$MultiEmailFieldInput20240614
 */
const SchemaOut$MultiEmailFieldInput20240614: z.ZodType<
  External$MultiEmailFieldInput20240614, // output type of this zod object
  z.ZodTypeDef,
  MultiEmailFieldInput20240614 // the object to be transformed
> = z
  .object({
    disableOnPrefill: z.boolean().optional(),
    hidden: z.boolean(),
    label: z.string(),
    placeholder: z.string(),
    required: z.boolean(),
    slug: z.string(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disableOnPrefill: "disableOnPrefill",
      hidden: "hidden",
      label: "label",
      placeholder: "placeholder",
      required: "required",
      slug: "slug",
      type: "type",
    });
  });

export const Schemas$MultiEmailFieldInput20240614 = {
  in: SchemaIn$MultiEmailFieldInput20240614,
  out: SchemaOut$MultiEmailFieldInput20240614,
};
