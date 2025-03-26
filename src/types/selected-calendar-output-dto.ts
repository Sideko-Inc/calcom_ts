import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * SelectedCalendarOutputDto
 */
export type SelectedCalendarOutputDto = {
  credentialId: number | null;
  externalId: string;
  integration: string;
  userId: number;
};

/**
 * @internal
 * SelectedCalendarOutputDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SelectedCalendarOutputDto = {
  credentialId: number | null;
  externalId: string;
  integration: string;
  userId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SelectedCalendarOutputDto
 */
const SchemaIn$SelectedCalendarOutputDto: z.ZodType<
  SelectedCalendarOutputDto, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SelectedCalendarOutputDto
 */
const SchemaOut$SelectedCalendarOutputDto: z.ZodType<
  External$SelectedCalendarOutputDto, // output type of this zod object
  z.ZodTypeDef,
  SelectedCalendarOutputDto // the object to be transformed
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

export const Schemas$SelectedCalendarOutputDto = {
  in: SchemaIn$SelectedCalendarOutputDto,
  out: SchemaOut$SelectedCalendarOutputDto,
};
