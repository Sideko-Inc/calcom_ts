import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DeletedCalendarCredentialsOutputDto
 */
export type DeletedCalendarCredentialsOutputDto = {
  appId: string | null;
  id: number;
  invalid: boolean | null;
  teamId: number | null;
  type: string;
  userId: number | null;
};

/**
 * @internal
 * DeletedCalendarCredentialsOutputDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeletedCalendarCredentialsOutputDto = {
  appId: string | null;
  id: number;
  invalid: boolean | null;
  teamId: number | null;
  type: string;
  userId: number | null;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeletedCalendarCredentialsOutputDto
 */
const SchemaIn$DeletedCalendarCredentialsOutputDto: z.ZodType<
  DeletedCalendarCredentialsOutputDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    appId: z.string().nullable(),
    id: z.number(),
    invalid: z.boolean().nullable(),
    teamId: z.number().nullable(),
    type: z.string(),
    userId: z.number().nullable(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      appId: "appId",
      id: "id",
      invalid: "invalid",
      teamId: "teamId",
      type: "type",
      userId: "userId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeletedCalendarCredentialsOutputDto
 */
const SchemaOut$DeletedCalendarCredentialsOutputDto: z.ZodType<
  External$DeletedCalendarCredentialsOutputDto, // output type of this zod object
  z.ZodTypeDef,
  DeletedCalendarCredentialsOutputDto // the object to be transformed
> = z
  .object({
    appId: z.string().nullable(),
    id: z.number(),
    invalid: z.boolean().nullable(),
    teamId: z.number().nullable(),
    type: z.string(),
    userId: z.number().nullable(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      appId: "appId",
      id: "id",
      invalid: "invalid",
      teamId: "teamId",
      type: "type",
      userId: "userId",
    });
  });

export const Schemas$DeletedCalendarCredentialsOutputDto = {
  in: SchemaIn$DeletedCalendarCredentialsOutputDto,
  out: SchemaOut$DeletedCalendarCredentialsOutputDto,
};
