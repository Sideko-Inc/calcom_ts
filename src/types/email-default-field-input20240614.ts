import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * EmailDefaultFieldInput20240614
 */
export type EmailDefaultFieldInput20240614 = {
  /**
   * Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&email=bob@gmail.com`,      the email field will be prefilled with this value and disabled.
   */
  disableOnPrefill?: boolean | undefined;
  /**
   * Can be set to true only for organization team event types and if you also pass booking field {type: "phone", slug: "attendeePhoneNumber", required: true, hidden: false, label: "whatever label"} of booking field type PhoneFieldInput_2024_06_14 - this is done
   *       to enable phone only bookings where during the booking attendee can provide only their phone number and not provide email, so you must pass to the email booking field {hidden: true, required: false}.
   *       If true show under event type settings but don't show this booking field in the Booker. If false show in both.
   */
  hidden?: boolean | undefined;
  label: string;
  placeholder: string;
  /**
   * Can be set to false only for organization team event types and if you also pass booking field {type: "phone", slug: "attendeePhoneNumber", required: true, hidden: false, label: "whatever label"} of booking field type PhoneFieldInput_2024_06_14 - this is done
   *       to enable phone only bookings where during the booking attendee can provide only their phone number and not provide email, so you must pass to the email booking field {hidden: true, required: false}.
   *       If true show under event type settings but don't show this booking field in the Booker. If false show in both.
   */
  required?: Record<string, any> | undefined;
  /**
   * only allowed value for type is `email`
   */
  type: string;
};

/**
 * @internal
 * EmailDefaultFieldInput20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$EmailDefaultFieldInput20240614 = {
  disableOnPrefill?: boolean | undefined;
  hidden?: boolean | undefined;
  label: string;
  placeholder: string;
  required?: Record<string, any> | undefined;
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object EmailDefaultFieldInput20240614
 */
const SchemaIn$EmailDefaultFieldInput20240614: z.ZodType<
  EmailDefaultFieldInput20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    disableOnPrefill: z.boolean().optional(),
    hidden: z.boolean().optional(),
    label: z.string(),
    placeholder: z.string(),
    required: z.record(z.string(), z.any()).optional(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disableOnPrefill: "disableOnPrefill",
      hidden: "hidden",
      label: "label",
      placeholder: "placeholder",
      required: "required",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$EmailDefaultFieldInput20240614
 */
const SchemaOut$EmailDefaultFieldInput20240614: z.ZodType<
  External$EmailDefaultFieldInput20240614, // output type of this zod object
  z.ZodTypeDef,
  EmailDefaultFieldInput20240614 // the object to be transformed
> = z
  .object({
    disableOnPrefill: z.boolean().optional(),
    hidden: z.boolean().optional(),
    label: z.string(),
    placeholder: z.string(),
    required: z.record(z.string(), z.any()).optional(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disableOnPrefill: "disableOnPrefill",
      hidden: "hidden",
      label: "label",
      placeholder: "placeholder",
      required: "required",
      type: "type",
    });
  });

export const Schemas$EmailDefaultFieldInput20240614 = {
  in: SchemaIn$EmailDefaultFieldInput20240614,
  out: SchemaOut$EmailDefaultFieldInput20240614,
};
