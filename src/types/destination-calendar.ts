import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DestinationCalendar
 */
export type DestinationCalendar = {
  credentialId: number | null;
  delegationCredentialId?: string | null | undefined;
  email?: string | undefined;
  eventTypeId: number | null;
  externalId: string;
  id: Record<string, any>;
  integration: string;
  integrationTitle?: string | undefined;
  name?: string | null | undefined;
  primary?: boolean | undefined;
  primaryEmail: string | null;
  readOnly?: boolean | undefined;
  userId: number | null;
};

/**
 * @internal
 * DestinationCalendar without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DestinationCalendar = {
  credentialId: number | null;
  delegationCredentialId?: string | null | undefined;
  email?: string | undefined;
  eventTypeId: number | null;
  externalId: string;
  id: Record<string, any>;
  integration: string;
  integrationTitle?: string | undefined;
  name?: string | null | undefined;
  primary?: boolean | undefined;
  primaryEmail: string | null;
  readOnly?: boolean | undefined;
  userId: number | null;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DestinationCalendar
 */
const SchemaIn$DestinationCalendar: z.ZodType<
  DestinationCalendar, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    credentialId: z.number().nullable(),
    delegationCredentialId: z.string().nullable().optional(),
    email: z.string().optional(),
    eventTypeId: z.number().nullable(),
    externalId: z.string(),
    id: z.record(z.string(), z.any()),
    integration: z.string(),
    integrationTitle: z.string().optional(),
    name: z.string().nullable().optional(),
    primary: z.boolean().optional(),
    primaryEmail: z.string().nullable(),
    readOnly: z.boolean().optional(),
    userId: z.number().nullable(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      credentialId: "credentialId",
      delegationCredentialId: "delegationCredentialId",
      email: "email",
      eventTypeId: "eventTypeId",
      externalId: "externalId",
      id: "id",
      integration: "integration",
      integrationTitle: "integrationTitle",
      name: "name",
      primary: "primary",
      primaryEmail: "primaryEmail",
      readOnly: "readOnly",
      userId: "userId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DestinationCalendar
 */
const SchemaOut$DestinationCalendar: z.ZodType<
  External$DestinationCalendar, // output type of this zod object
  z.ZodTypeDef,
  DestinationCalendar // the object to be transformed
> = z
  .object({
    credentialId: z.number().nullable(),
    delegationCredentialId: z.string().nullable().optional(),
    email: z.string().optional(),
    eventTypeId: z.number().nullable(),
    externalId: z.string(),
    id: z.record(z.string(), z.any()),
    integration: z.string(),
    integrationTitle: z.string().optional(),
    name: z.string().nullable().optional(),
    primary: z.boolean().optional(),
    primaryEmail: z.string().nullable(),
    readOnly: z.boolean().optional(),
    userId: z.number().nullable(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      credentialId: "credentialId",
      delegationCredentialId: "delegationCredentialId",
      email: "email",
      eventTypeId: "eventTypeId",
      externalId: "externalId",
      id: "id",
      integration: "integration",
      integrationTitle: "integrationTitle",
      name: "name",
      primary: "primary",
      primaryEmail: "primaryEmail",
      readOnly: "readOnly",
      userId: "userId",
    });
  });

export const Schemas$DestinationCalendar = {
  in: SchemaIn$DestinationCalendar,
  out: SchemaOut$DestinationCalendar,
};
