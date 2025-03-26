import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * InputIntegrationLocation20240614
 */
export type InputIntegrationLocation20240614 = {
  integration: "cal-video" | "google-meet" | "office365-video" | "zoom";
  /**
   * only allowed value for type is `integration`
   */
  type: string;
};

/**
 * @internal
 * InputIntegrationLocation20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InputIntegrationLocation20240614 = {
  integration: "cal-video" | "google-meet" | "office365-video" | "zoom";
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InputIntegrationLocation20240614
 */
const SchemaIn$InputIntegrationLocation20240614: z.ZodType<
  InputIntegrationLocation20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    integration: z.enum([
      "cal-video",
      "google-meet",
      "office365-video",
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InputIntegrationLocation20240614
 */
const SchemaOut$InputIntegrationLocation20240614: z.ZodType<
  External$InputIntegrationLocation20240614, // output type of this zod object
  z.ZodTypeDef,
  InputIntegrationLocation20240614 // the object to be transformed
> = z
  .object({
    integration: z.enum([
      "cal-video",
      "google-meet",
      "office365-video",
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

export const Schemas$InputIntegrationLocation20240614 = {
  in: SchemaIn$InputIntegrationLocation20240614,
  out: SchemaOut$InputIntegrationLocation20240614,
};
