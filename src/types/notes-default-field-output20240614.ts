import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * NotesDefaultFieldOutput20240614
 */
export type NotesDefaultFieldOutput20240614 = {
  /**
   * Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&notes=hello`,      the notes field will be prefilled with this value and disabled.
   */
  disableOnPrefill?: boolean | undefined;
  /**
   * If true show under event type settings but don't show this booking field in the Booker. If false show in both.
   */
  hidden?: boolean | undefined;
  /**
   * This property is always true because it's a default field
   */
  isDefault: Record<string, any>;
  label?: string | undefined;
  placeholder?: string | undefined;
  required?: boolean | undefined;
  /**
   * only allowed value for type is `notes`
   */
  slug: "email" | "guests" | "name" | "notes" | "title";
  type: string;
};

/**
 * @internal
 * NotesDefaultFieldOutput20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$NotesDefaultFieldOutput20240614 = {
  disableOnPrefill?: boolean | undefined;
  hidden?: boolean | undefined;
  isDefault: Record<string, any>;
  label?: string | undefined;
  placeholder?: string | undefined;
  required?: boolean | undefined;
  slug: "email" | "guests" | "name" | "notes" | "title";
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object NotesDefaultFieldOutput20240614
 */
const SchemaIn$NotesDefaultFieldOutput20240614: z.ZodType<
  NotesDefaultFieldOutput20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    disableOnPrefill: z.boolean().optional(),
    hidden: z.boolean().optional(),
    isDefault: z.record(z.string(), z.any()),
    label: z.string().optional(),
    placeholder: z.string().optional(),
    required: z.boolean().optional(),
    slug: z.enum(["email", "guests", "name", "notes", "title"]),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disableOnPrefill: "disableOnPrefill",
      hidden: "hidden",
      isDefault: "isDefault",
      label: "label",
      placeholder: "placeholder",
      required: "required",
      slug: "slug",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$NotesDefaultFieldOutput20240614
 */
const SchemaOut$NotesDefaultFieldOutput20240614: z.ZodType<
  External$NotesDefaultFieldOutput20240614, // output type of this zod object
  z.ZodTypeDef,
  NotesDefaultFieldOutput20240614 // the object to be transformed
> = z
  .object({
    disableOnPrefill: z.boolean().optional(),
    hidden: z.boolean().optional(),
    isDefault: z.record(z.string(), z.any()),
    label: z.string().optional(),
    placeholder: z.string().optional(),
    required: z.boolean().optional(),
    slug: z.enum(["email", "guests", "name", "notes", "title"]),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disableOnPrefill: "disableOnPrefill",
      hidden: "hidden",
      isDefault: "isDefault",
      label: "label",
      placeholder: "placeholder",
      required: "required",
      slug: "slug",
      type: "type",
    });
  });

export const Schemas$NotesDefaultFieldOutput20240614 = {
  in: SchemaIn$NotesDefaultFieldOutput20240614,
  out: SchemaOut$NotesDefaultFieldOutput20240614,
};
