import {
  External$MeOrgOutput,
  MeOrgOutput,
  Schemas$MeOrgOutput,
} from "./me-org-output";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * MeOutput
 */
export type MeOutput = {
  defaultScheduleId: number | null;
  email: string;
  id: number;
  organization?: MeOrgOutput | undefined;
  organizationId: number | null;
  timeFormat: number;
  timeZone: string;
  username: string;
  weekStart: string;
};

/**
 * @internal
 * MeOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$MeOutput = {
  defaultScheduleId: number | null;
  email: string;
  id: number;
  organization?: External$MeOrgOutput | undefined;
  organizationId: number | null;
  timeFormat: number;
  timeZone: string;
  username: string;
  weekStart: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object MeOutput
 */
const SchemaIn$MeOutput: z.ZodType<
  MeOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    defaultScheduleId: z.number().nullable(),
    email: z.string(),
    id: z.number(),
    organization: Schemas$MeOrgOutput.in.optional(),
    organizationId: z.number().nullable(),
    timeFormat: z.number(),
    timeZone: z.string(),
    username: z.string(),
    weekStart: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      defaultScheduleId: "defaultScheduleId",
      email: "email",
      id: "id",
      organization: "organization",
      organizationId: "organizationId",
      timeFormat: "timeFormat",
      timeZone: "timeZone",
      username: "username",
      weekStart: "weekStart",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$MeOutput
 */
const SchemaOut$MeOutput: z.ZodType<
  External$MeOutput, // output type of this zod object
  z.ZodTypeDef,
  MeOutput // the object to be transformed
> = z
  .object({
    defaultScheduleId: z.number().nullable(),
    email: z.string(),
    id: z.number(),
    organization: Schemas$MeOrgOutput.out.optional(),
    organizationId: z.number().nullable(),
    timeFormat: z.number(),
    timeZone: z.string(),
    username: z.string(),
    weekStart: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      defaultScheduleId: "defaultScheduleId",
      email: "email",
      id: "id",
      organization: "organization",
      organizationId: "organizationId",
      timeFormat: "timeFormat",
      timeZone: "timeZone",
      username: "username",
      weekStart: "weekStart",
    });
  });

export const Schemas$MeOutput = {
  in: SchemaIn$MeOutput,
  out: SchemaOut$MeOutput,
};
