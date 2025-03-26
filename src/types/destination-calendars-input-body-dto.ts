import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DestinationCalendarsInputBodyDto
 */
export type DestinationCalendarsInputBodyDto = {
  delegationCredentialId?: string | undefined;
  /**
   * Unique identifier used to represent the specific calendar, as returned by the /calendars endpoint
   */
  externalId: string;
  /**
   * The calendar service you want to integrate, as returned by the /calendars endpoint
   */
  integration: "apple_calendar" | "google_calendar" | "office365_calendar";
};

/**
 * @internal
 * DestinationCalendarsInputBodyDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DestinationCalendarsInputBodyDto = {
  delegationCredentialId?: string | undefined;
  externalId: string;
  integration: "apple_calendar" | "google_calendar" | "office365_calendar";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DestinationCalendarsInputBodyDto
 */
const SchemaIn$DestinationCalendarsInputBodyDto: z.ZodType<
  DestinationCalendarsInputBodyDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    delegationCredentialId: z.string().optional(),
    externalId: z.string(),
    integration: z.enum([
      "apple_calendar",
      "google_calendar",
      "office365_calendar",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      delegationCredentialId: "delegationCredentialId",
      externalId: "externalId",
      integration: "integration",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DestinationCalendarsInputBodyDto
 */
const SchemaOut$DestinationCalendarsInputBodyDto: z.ZodType<
  External$DestinationCalendarsInputBodyDto, // output type of this zod object
  z.ZodTypeDef,
  DestinationCalendarsInputBodyDto // the object to be transformed
> = z
  .object({
    delegationCredentialId: z.string().optional(),
    externalId: z.string(),
    integration: z.enum([
      "apple_calendar",
      "google_calendar",
      "office365_calendar",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      delegationCredentialId: "delegationCredentialId",
      externalId: "externalId",
      integration: "integration",
    });
  });

export const Schemas$DestinationCalendarsInputBodyDto = {
  in: SchemaIn$DestinationCalendarsInputBodyDto,
  out: SchemaOut$DestinationCalendarsInputBodyDto,
};
