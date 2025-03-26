import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * NameDefaultFieldOutput20240614
 */
export type NameDefaultFieldOutput20240614 = {
  /**
   * Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&name=bob`,      the name field will be prefilled with this value and disabled.
   */
  disableOnPrefill?: boolean | undefined;
  /**
   * This property is always true because it's a default field
   */
  isDefault: Record<string, any>;
  label?: string | undefined;
  placeholder?: string | undefined;
  required: boolean;
  slug: string;
  /**
   * only allowed value for type is `name`. Used for having 1 booking field for both first name and last name.
   */
  type:
    | "address"
    | "boolean"
    | "checkbox"
    | "email"
    | "multiemail"
    | "multiselect"
    | "name"
    | "number"
    | "phone"
    | "radio"
    | "select"
    | "text"
    | "textarea"
    | "url";
};

/**
 * @internal
 * NameDefaultFieldOutput20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$NameDefaultFieldOutput20240614 = {
  disableOnPrefill?: boolean | undefined;
  isDefault: Record<string, any>;
  label?: string | undefined;
  placeholder?: string | undefined;
  required: boolean;
  slug: string;
  type:
    | "address"
    | "boolean"
    | "checkbox"
    | "email"
    | "multiemail"
    | "multiselect"
    | "name"
    | "number"
    | "phone"
    | "radio"
    | "select"
    | "text"
    | "textarea"
    | "url";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object NameDefaultFieldOutput20240614
 */
const SchemaIn$NameDefaultFieldOutput20240614: z.ZodType<
  NameDefaultFieldOutput20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    disableOnPrefill: z.boolean().optional(),
    isDefault: z.record(z.string(), z.any()),
    label: z.string().optional(),
    placeholder: z.string().optional(),
    required: z.boolean(),
    slug: z.string(),
    type: z.enum([
      "address",
      "boolean",
      "checkbox",
      "email",
      "multiemail",
      "multiselect",
      "name",
      "number",
      "phone",
      "radio",
      "select",
      "text",
      "textarea",
      "url",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disableOnPrefill: "disableOnPrefill",
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$NameDefaultFieldOutput20240614
 */
const SchemaOut$NameDefaultFieldOutput20240614: z.ZodType<
  External$NameDefaultFieldOutput20240614, // output type of this zod object
  z.ZodTypeDef,
  NameDefaultFieldOutput20240614 // the object to be transformed
> = z
  .object({
    disableOnPrefill: z.boolean().optional(),
    isDefault: z.record(z.string(), z.any()),
    label: z.string().optional(),
    placeholder: z.string().optional(),
    required: z.boolean(),
    slug: z.string(),
    type: z.enum([
      "address",
      "boolean",
      "checkbox",
      "email",
      "multiemail",
      "multiselect",
      "name",
      "number",
      "phone",
      "radio",
      "select",
      "text",
      "textarea",
      "url",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disableOnPrefill: "disableOnPrefill",
      isDefault: "isDefault",
      label: "label",
      placeholder: "placeholder",
      required: "required",
      slug: "slug",
      type: "type",
    });
  });

export const Schemas$NameDefaultFieldOutput20240614 = {
  in: SchemaIn$NameDefaultFieldOutput20240614,
  out: SchemaOut$NameDefaultFieldOutput20240614,
};
