import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * OutputIntegrationLocation20240614
 */
export type OutputIntegrationLocation20240614 = {
  /**
   * Credential ID associated with the integration
   */
  credentialId?: number | undefined;
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
  link?: string | undefined;
  /**
   * Only allowed value for type is `integration`
   */
  type:
    | "address"
    | "attendeeAddress"
    | "attendeeDefined"
    | "attendeePhone"
    | "conferencing"
    | "integration"
    | "link"
    | "organizersDefaultApp"
    | "phone"
    | "unknown";
};

/**
 * @internal
 * OutputIntegrationLocation20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$OutputIntegrationLocation20240614 = {
  credentialId?: number | undefined;
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
  link?: string | undefined;
  type:
    | "address"
    | "attendeeAddress"
    | "attendeeDefined"
    | "attendeePhone"
    | "conferencing"
    | "integration"
    | "link"
    | "organizersDefaultApp"
    | "phone"
    | "unknown";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object OutputIntegrationLocation20240614
 */
const SchemaIn$OutputIntegrationLocation20240614: z.ZodType<
  OutputIntegrationLocation20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    credentialId: z.number().optional(),
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
    link: z.string().optional(),
    type: z.enum([
      "address",
      "attendeeAddress",
      "attendeeDefined",
      "attendeePhone",
      "conferencing",
      "integration",
      "link",
      "organizersDefaultApp",
      "phone",
      "unknown",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      credentialId: "credentialId",
      integration: "integration",
      link: "link",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$OutputIntegrationLocation20240614
 */
const SchemaOut$OutputIntegrationLocation20240614: z.ZodType<
  External$OutputIntegrationLocation20240614, // output type of this zod object
  z.ZodTypeDef,
  OutputIntegrationLocation20240614 // the object to be transformed
> = z
  .object({
    credentialId: z.number().optional(),
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
    link: z.string().optional(),
    type: z.enum([
      "address",
      "attendeeAddress",
      "attendeeDefined",
      "attendeePhone",
      "conferencing",
      "integration",
      "link",
      "organizersDefaultApp",
      "phone",
      "unknown",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      credentialId: "credentialId",
      integration: "integration",
      link: "link",
      type: "type",
    });
  });

export const Schemas$OutputIntegrationLocation20240614 = {
  in: SchemaIn$OutputIntegrationLocation20240614,
  out: SchemaOut$OutputIntegrationLocation20240614,
};
