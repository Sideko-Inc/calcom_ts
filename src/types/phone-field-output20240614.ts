import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * PhoneFieldOutput20240614
 */
export type PhoneFieldOutput20240614 = {
  /**
   * Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `phone` and the URL contains query parameter `&phone=1234567890`,      the phone field will be prefilled with this value and disabled.
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
  placeholder?: string | undefined;
  required: boolean;
  /**
   * Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking. Special slug is `attendeePhoneNumber` - if you create
   *       a phone input field with this slug for organization team event type you can create an organization team event type that can be booked using phone without requiring an email by setting {"type": "email", "required": false, "hidden": true} to the email booking field input in the request body.
   */
  slug: string;
  /**
   * only allowed value for type is `phone`
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
 * PhoneFieldOutput20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PhoneFieldOutput20240614 = {
  disableOnPrefill?: boolean | undefined;
  hidden: boolean;
  isDefault: Record<string, any>;
  label: string;
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
 * Takes network data, validates it, and transforms keys to match typescript object PhoneFieldOutput20240614
 */
const SchemaIn$PhoneFieldOutput20240614: z.ZodType<
  PhoneFieldOutput20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    disableOnPrefill: z.boolean().optional(),
    hidden: z.boolean(),
    isDefault: z.record(z.string(), z.any()),
    label: z.string(),
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
      placeholder: "placeholder",
      required: "required",
      slug: "slug",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PhoneFieldOutput20240614
 */
const SchemaOut$PhoneFieldOutput20240614: z.ZodType<
  External$PhoneFieldOutput20240614, // output type of this zod object
  z.ZodTypeDef,
  PhoneFieldOutput20240614 // the object to be transformed
> = z
  .object({
    disableOnPrefill: z.boolean().optional(),
    hidden: z.boolean(),
    isDefault: z.record(z.string(), z.any()),
    label: z.string(),
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
      placeholder: "placeholder",
      required: "required",
      slug: "slug",
      type: "type",
    });
  });

export const Schemas$PhoneFieldOutput20240614 = {
  in: SchemaIn$PhoneFieldOutput20240614,
  out: SchemaOut$PhoneFieldOutput20240614,
};
