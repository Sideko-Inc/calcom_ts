import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * BookingInputIntegrationLocation20240813
 */
export type BookingInputIntegrationLocation20240813 = {
  integration:
    | "around-video"
    | "cal-video"
    | "campfire-video"
    | "demodesk-video"
    | "discord-video"
    | "eightxeight-video"
    | "element-call-video"
    | "facetime-video"
    | "google-meet"
    | "huddle"
    | "jelly-conferencing"
    | "jelly-video"
    | "jitsi"
    | "mirotalk-video"
    | "office365-video"
    | "ping-video"
    | "riverside-video"
    | "roam-video"
    | "salesroom-video"
    | "shimmer-video"
    | "signal-video"
    | "sirius-video"
    | "skype-video"
    | "sylaps-video"
    | "tandem"
    | "telegram-video"
    | "webex-video"
    | "whatsapp-video"
    | "whereby-video"
    | "zoom";
  /**
   * only allowed value for type is `integration`
   */
  type: string;
};

/**
 * @internal
 * BookingInputIntegrationLocation20240813 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BookingInputIntegrationLocation20240813 = {
  integration:
    | "around-video"
    | "cal-video"
    | "campfire-video"
    | "demodesk-video"
    | "discord-video"
    | "eightxeight-video"
    | "element-call-video"
    | "facetime-video"
    | "google-meet"
    | "huddle"
    | "jelly-conferencing"
    | "jelly-video"
    | "jitsi"
    | "mirotalk-video"
    | "office365-video"
    | "ping-video"
    | "riverside-video"
    | "roam-video"
    | "salesroom-video"
    | "shimmer-video"
    | "signal-video"
    | "sirius-video"
    | "skype-video"
    | "sylaps-video"
    | "tandem"
    | "telegram-video"
    | "webex-video"
    | "whatsapp-video"
    | "whereby-video"
    | "zoom";
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BookingInputIntegrationLocation20240813
 */
const SchemaIn$BookingInputIntegrationLocation20240813: z.ZodType<
  BookingInputIntegrationLocation20240813, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    integration: z.enum([
      "around-video",
      "cal-video",
      "campfire-video",
      "demodesk-video",
      "discord-video",
      "eightxeight-video",
      "element-call-video",
      "facetime-video",
      "google-meet",
      "huddle",
      "jelly-conferencing",
      "jelly-video",
      "jitsi",
      "mirotalk-video",
      "office365-video",
      "ping-video",
      "riverside-video",
      "roam-video",
      "salesroom-video",
      "shimmer-video",
      "signal-video",
      "sirius-video",
      "skype-video",
      "sylaps-video",
      "tandem",
      "telegram-video",
      "webex-video",
      "whatsapp-video",
      "whereby-video",
      "zoom",
    ]),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      integration: "integration",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BookingInputIntegrationLocation20240813
 */
const SchemaOut$BookingInputIntegrationLocation20240813: z.ZodType<
  External$BookingInputIntegrationLocation20240813, // output type of this zod object
  z.ZodTypeDef,
  BookingInputIntegrationLocation20240813 // the object to be transformed
> = z
  .object({
    integration: z.enum([
      "around-video",
      "cal-video",
      "campfire-video",
      "demodesk-video",
      "discord-video",
      "eightxeight-video",
      "element-call-video",
      "facetime-video",
      "google-meet",
      "huddle",
      "jelly-conferencing",
      "jelly-video",
      "jitsi",
      "mirotalk-video",
      "office365-video",
      "ping-video",
      "riverside-video",
      "roam-video",
      "salesroom-video",
      "shimmer-video",
      "signal-video",
      "sirius-video",
      "skype-video",
      "sylaps-video",
      "tandem",
      "telegram-video",
      "webex-video",
      "whatsapp-video",
      "whereby-video",
      "zoom",
    ]),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      integration: "integration",
      type: "type",
    });
  });

export const Schemas$BookingInputIntegrationLocation20240813 = {
  in: SchemaIn$BookingInputIntegrationLocation20240813,
  out: SchemaOut$BookingInputIntegrationLocation20240813,
};
