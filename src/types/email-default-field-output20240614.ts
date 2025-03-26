import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * EmailDefaultFieldOutput20240614
 */
export type EmailDefaultFieldOutput20240614 = {
  /**
   * Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&email=bob@gmail.com`,      the email field will be prefilled with this value and disabled.
   */
  disableOnPrefill?: boolean | undefined;
  /**
   * If true show under event type settings but don't show this booking field in the Booker. If false show in both. Can only be hidden
   *       for organization team event types when also providing attendee phone number booking field.
   */
  hidden?: boolean | undefined;
  /**
   * This property is always true because it's a default field
   */
  isDefault: Record<string, any>;
  label?: string | undefined;
  placeholder?: string | undefined;
  /**
   * Can be set to false only for organization team event types and if you also pass booking field {type: "phone", slug: "attendeePhoneNumber", required: true, hidden: false, label: "whatever label"} of booking field type PhoneFieldInput_2024_06_14 - this is done
   *       to enable phone only bookings where during the booking attendee can provide only their phone number and not provide email, so you must pass to the email booking field {hidden: true, required: false}.
   *       If true show under event type settings but don't show this booking field in the Booker. If false show in both.
   */
  required?: Record<string, any> | undefined;
  slug: string;
  /**
   * only allowed value for type is `email`
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
 * EmailDefaultFieldOutput20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$EmailDefaultFieldOutput20240614 = {
  disableOnPrefill?: boolean | undefined;
  hidden?: boolean | undefined;
  isDefault: Record<string, any>;
  label?: string | undefined;
  placeholder?: string | undefined;
  required?: Record<string, any> | undefined;
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
 * Takes network data, validates it, and transforms keys to match typescript object EmailDefaultFieldOutput20240614
 */
const SchemaIn$EmailDefaultFieldOutput20240614: z.ZodType<
  EmailDefaultFieldOutput20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    disableOnPrefill: z.boolean().optional(),
    hidden: z.boolean().optional(),
    isDefault: z.record(z.string(), z.any()),
    label: z.string().optional(),
    placeholder: z.string().optional(),
    required: z.record(z.string(), z.any()).optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$EmailDefaultFieldOutput20240614
 */
const SchemaOut$EmailDefaultFieldOutput20240614: z.ZodType<
  External$EmailDefaultFieldOutput20240614, // output type of this zod object
  z.ZodTypeDef,
  EmailDefaultFieldOutput20240614 // the object to be transformed
> = z
  .object({
    disableOnPrefill: z.boolean().optional(),
    hidden: z.boolean().optional(),
    isDefault: z.record(z.string(), z.any()),
    label: z.string().optional(),
    placeholder: z.string().optional(),
    required: z.record(z.string(), z.any()).optional(),
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

export const Schemas$EmailDefaultFieldOutput20240614 = {
  in: SchemaIn$EmailDefaultFieldOutput20240614,
  out: SchemaOut$EmailDefaultFieldOutput20240614,
};
