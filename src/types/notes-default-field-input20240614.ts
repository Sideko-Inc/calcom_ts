import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * NotesDefaultFieldInput20240614
 */
export type NotesDefaultFieldInput20240614 = {
  /**
   * Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&notes=journey`,      the notes field will be prefilled with this value and disabled.
   */
  disableOnPrefill?: boolean | undefined;
  /**
   * If true show under event type settings but don't show this booking field in the Booker. If false show in both.
   */
  hidden?: boolean | undefined;
  label?: string | undefined;
  placeholder?: string | undefined;
  required?: boolean | undefined;
  /**
   * only allowed value for type is `notes`
   */
  slug: string;
};

/**
 * @internal
 * NotesDefaultFieldInput20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$NotesDefaultFieldInput20240614 = {
  disableOnPrefill?: boolean | undefined;
  hidden?: boolean | undefined;
  label?: string | undefined;
  placeholder?: string | undefined;
  required?: boolean | undefined;
  slug: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object NotesDefaultFieldInput20240614
 */
const SchemaIn$NotesDefaultFieldInput20240614: z.ZodType<
  NotesDefaultFieldInput20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    disableOnPrefill: z.boolean().optional(),
    hidden: z.boolean().optional(),
    label: z.string().optional(),
    placeholder: z.string().optional(),
    required: z.boolean().optional(),
    slug: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disableOnPrefill: "disableOnPrefill",
      hidden: "hidden",
      label: "label",
      placeholder: "placeholder",
      required: "required",
      slug: "slug",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$NotesDefaultFieldInput20240614
 */
const SchemaOut$NotesDefaultFieldInput20240614: z.ZodType<
  External$NotesDefaultFieldInput20240614, // output type of this zod object
  z.ZodTypeDef,
  NotesDefaultFieldInput20240614 // the object to be transformed
> = z
  .object({
    disableOnPrefill: z.boolean().optional(),
    hidden: z.boolean().optional(),
    label: z.string().optional(),
    placeholder: z.string().optional(),
    required: z.boolean().optional(),
    slug: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disableOnPrefill: "disableOnPrefill",
      hidden: "hidden",
      label: "label",
      placeholder: "placeholder",
      required: "required",
      slug: "slug",
    });
  });

export const Schemas$NotesDefaultFieldInput20240614 = {
  in: SchemaIn$NotesDefaultFieldInput20240614,
  out: SchemaOut$NotesDefaultFieldInput20240614,
};
