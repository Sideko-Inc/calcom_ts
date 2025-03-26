import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DestinationCalendarsOutputDto
 */
export type DestinationCalendarsOutputDto = {
  credentialId: number | null;
  externalId: string;
  integration: string;
  userId: number;
};

/**
 * @internal
 * DestinationCalendarsOutputDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DestinationCalendarsOutputDto = {
  credentialId: number | null;
  externalId: string;
  integration: string;
  userId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DestinationCalendarsOutputDto
 */
const SchemaIn$DestinationCalendarsOutputDto: z.ZodType<
  DestinationCalendarsOutputDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    credentialId: z.number().nullable(),
    externalId: z.string(),
    integration: z.string(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      credentialId: "credentialId",
      externalId: "externalId",
      integration: "integration",
      userId: "userId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DestinationCalendarsOutputDto
 */
const SchemaOut$DestinationCalendarsOutputDto: z.ZodType<
  External$DestinationCalendarsOutputDto, // output type of this zod object
  z.ZodTypeDef,
  DestinationCalendarsOutputDto // the object to be transformed
> = z
  .object({
    credentialId: z.number().nullable(),
    externalId: z.string(),
    integration: z.string(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      credentialId: "credentialId",
      externalId: "externalId",
      integration: "integration",
      userId: "userId",
    });
  });

export const Schemas$DestinationCalendarsOutputDto = {
  in: SchemaIn$DestinationCalendarsOutputDto,
  out: SchemaOut$DestinationCalendarsOutputDto,
};
