import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DeleteCalendarCredentialsInputBodyDto
 */
export type DeleteCalendarCredentialsInputBodyDto = {
  /**
   * Credential ID of the calendar to delete, as returned by the /calendars endpoint
   */
  id: number;
};

/**
 * @internal
 * DeleteCalendarCredentialsInputBodyDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteCalendarCredentialsInputBodyDto = {
  id: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeleteCalendarCredentialsInputBodyDto
 */
const SchemaIn$DeleteCalendarCredentialsInputBodyDto: z.ZodType<
  DeleteCalendarCredentialsInputBodyDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    id: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeleteCalendarCredentialsInputBodyDto
 */
const SchemaOut$DeleteCalendarCredentialsInputBodyDto: z.ZodType<
  External$DeleteCalendarCredentialsInputBodyDto, // output type of this zod object
  z.ZodTypeDef,
  DeleteCalendarCredentialsInputBodyDto // the object to be transformed
> = z
  .object({
    id: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
    });
  });

export const Schemas$DeleteCalendarCredentialsInputBodyDto = {
  in: SchemaIn$DeleteCalendarCredentialsInputBodyDto,
  out: SchemaOut$DeleteCalendarCredentialsInputBodyDto,
};
