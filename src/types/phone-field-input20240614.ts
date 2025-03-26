import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * PhoneFieldInput20240614
 */
export type PhoneFieldInput20240614 = {
  /**
   * Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `phone` and the URL contains query parameter `&phone=1234567890`,      the phone field will be prefilled with this value and disabled.
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
   * Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking. Special slug is `attendeePhoneNumber` - if you create
   *       a phone input field with this slug for organization team event type you can create an organization team event type that can be booked using phone without requiring an email by setting {"type": "email", "required": false, "hidden": true} to the email booking field input in the request body.
   */
  slug: string;
  /**
   * only allowed value for type is `phone`
   */
  type: string;
};

/**
 * @internal
 * PhoneFieldInput20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PhoneFieldInput20240614 = {
  disableOnPrefill?: boolean | undefined;
  hidden: boolean;
  label: string;
  placeholder: string;
  required: boolean;
  slug: string;
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PhoneFieldInput20240614
 */
const SchemaIn$PhoneFieldInput20240614: z.ZodType<
  PhoneFieldInput20240614, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PhoneFieldInput20240614
 */
const SchemaOut$PhoneFieldInput20240614: z.ZodType<
  External$PhoneFieldInput20240614, // output type of this zod object
  z.ZodTypeDef,
  PhoneFieldInput20240614 // the object to be transformed
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

export const Schemas$PhoneFieldInput20240614 = {
  in: SchemaIn$PhoneFieldInput20240614,
  out: SchemaOut$PhoneFieldInput20240614,
};
