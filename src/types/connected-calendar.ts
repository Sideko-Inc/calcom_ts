import { Calendar, External$Calendar, Schemas$Calendar } from "./calendar";
import {
  External$Integration,
  Integration,
  Schemas$Integration,
} from "./integration";
import { External$Primary, Primary, Schemas$Primary } from "./primary";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * ConnectedCalendar
 */
export type ConnectedCalendar = {
  calendars?: Calendar[] | undefined;
  credentialId: number;
  delegationCredentialId?: string | null | undefined;
  integration: Integration;
  primary?: Primary | undefined;
};

/**
 * @internal
 * ConnectedCalendar without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConnectedCalendar = {
  calendars?: External$Calendar[] | undefined;
  credentialId: number;
  delegationCredentialId?: string | null | undefined;
  integration: External$Integration;
  primary?: External$Primary | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConnectedCalendar
 */
const SchemaIn$ConnectedCalendar: z.ZodType<
  ConnectedCalendar, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    calendars: z.array(Schemas$Calendar.in).optional(),
    credentialId: z.number(),
    delegationCredentialId: z.string().nullable().optional(),
    integration: Schemas$Integration.in,
    primary: Schemas$Primary.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      calendars: "calendars",
      credentialId: "credentialId",
      delegationCredentialId: "delegationCredentialId",
      integration: "integration",
      primary: "primary",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConnectedCalendar
 */
const SchemaOut$ConnectedCalendar: z.ZodType<
  External$ConnectedCalendar, // output type of this zod object
  z.ZodTypeDef,
  ConnectedCalendar // the object to be transformed
> = z
  .object({
    calendars: z.array(Schemas$Calendar.out).optional(),
    credentialId: z.number(),
    delegationCredentialId: z.string().nullable().optional(),
    integration: Schemas$Integration.out,
    primary: Schemas$Primary.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      calendars: "calendars",
      credentialId: "credentialId",
      delegationCredentialId: "delegationCredentialId",
      integration: "integration",
      primary: "primary",
    });
  });

export const Schemas$ConnectedCalendar = {
  in: SchemaIn$ConnectedCalendar,
  out: SchemaOut$ConnectedCalendar,
};
