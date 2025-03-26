import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * SelectFieldOutput20240614
 */
export type SelectFieldOutput20240614 = {
  /**
   * Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `language` and options of this select field are ['english', 'italian'] and the URL contains query parameter `&language=italian`,      the 'italian' will be selected and the select field will be disabled.
   */
  disableOnPrefill?: boolean | undefined;
  /**
   * If true show under event type settings but don't show this booking field in the Booker. If false show in both.
   */
  hidden: boolean;
  /**
   * This property is always false because it's not default field but custom field
   */
  isDefault: Record<string, any>;
  label: string;
  options: string[];
  placeholder?: string | undefined;
  required: boolean;
  /**
   * Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking
   */
  slug: string;
  /**
   * only allowed value for type is `select`
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
 * SelectFieldOutput20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SelectFieldOutput20240614 = {
  disableOnPrefill?: boolean | undefined;
  hidden: boolean;
  isDefault: Record<string, any>;
  label: string;
  options: string[];
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
 * Takes network data, validates it, and transforms keys to match typescript object SelectFieldOutput20240614
 */
const SchemaIn$SelectFieldOutput20240614: z.ZodType<
  SelectFieldOutput20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    disableOnPrefill: z.boolean().optional(),
    hidden: z.boolean(),
    isDefault: z.record(z.string(), z.any()),
    label: z.string(),
    options: z.array(z.string()),
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
      hidden: "hidden",
      isDefault: "isDefault",
      label: "label",
      options: "options",
      placeholder: "placeholder",
      required: "required",
      slug: "slug",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SelectFieldOutput20240614
 */
const SchemaOut$SelectFieldOutput20240614: z.ZodType<
  External$SelectFieldOutput20240614, // output type of this zod object
  z.ZodTypeDef,
  SelectFieldOutput20240614 // the object to be transformed
> = z
  .object({
    disableOnPrefill: z.boolean().optional(),
    hidden: z.boolean(),
    isDefault: z.record(z.string(), z.any()),
    label: z.string(),
    options: z.array(z.string()),
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
      hidden: "hidden",
      isDefault: "isDefault",
      label: "label",
      options: "options",
      placeholder: "placeholder",
      required: "required",
      slug: "slug",
      type: "type",
    });
  });

export const Schemas$SelectFieldOutput20240614 = {
  in: SchemaIn$SelectFieldOutput20240614,
  out: SchemaOut$SelectFieldOutput20240614,
};
