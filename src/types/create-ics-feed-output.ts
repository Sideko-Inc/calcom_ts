import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateIcsFeedOutput
 */
export type CreateIcsFeedOutput = {
  /**
   * The slug of the calendar
   */
  appId: string | null;
  /**
   * The id of the calendar credential
   */
  id: number;
  /**
   * Whether the calendar credentials are valid or not
   */
  invalid: boolean | null;
  /**
   * The team id of the user that created the calendar
   */
  teamId: number | null;
  /**
   * The type of the calendar
   */
  type: string;
  /**
   * The user id of the user that created the calendar
   */
  userId: number | null;
};

/**
 * @internal
 * CreateIcsFeedOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateIcsFeedOutput = {
  appId: string | null;
  id: number;
  invalid: boolean | null;
  teamId: number | null;
  type: string;
  userId: number | null;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateIcsFeedOutput
 */
const SchemaIn$CreateIcsFeedOutput: z.ZodType<
  CreateIcsFeedOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    appId: z.string().nullable(),
    id: z.number(),
    invalid: z.boolean().nullable(),
    teamId: z.number().int().nullable(),
    type: z.string(),
    userId: z.number().int().nullable(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateIcsFeedOutput
 */
const SchemaOut$CreateIcsFeedOutput: z.ZodType<
  External$CreateIcsFeedOutput, // output type of this zod object
  z.ZodTypeDef,
  CreateIcsFeedOutput // the object to be transformed
> = z
  .object({
    appId: z.string().nullable(),
    id: z.number(),
    invalid: z.boolean().nullable(),
    teamId: z.number().int().nullable(),
    type: z.string(),
    userId: z.number().int().nullable(),
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

export const Schemas$CreateIcsFeedOutput = {
  in: SchemaIn$CreateIcsFeedOutput,
  out: SchemaOut$CreateIcsFeedOutput,
};
