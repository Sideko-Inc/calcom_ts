import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * Calendar
 */
export type Calendar = {
  credentialId: number;
  delegationCredentialId?: string | null | undefined;
  email?: string | undefined;
  externalId: string;
  integration?: string | undefined;
  isSelected: boolean;
  name?: string | undefined;
  primary?: boolean | null | undefined;
  readOnly: boolean;
};

/**
 * @internal
 * Calendar without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Calendar = {
  credentialId: number;
  delegationCredentialId?: string | null | undefined;
  email?: string | undefined;
  externalId: string;
  integration?: string | undefined;
  isSelected: boolean;
  name?: string | undefined;
  primary?: boolean | null | undefined;
  readOnly: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Calendar
 */
const SchemaIn$Calendar: z.ZodType<
  Calendar, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    credentialId: z.number(),
    delegationCredentialId: z.string().nullable().optional(),
    email: z.string().optional(),
    externalId: z.string(),
    integration: z.string().optional(),
    isSelected: z.boolean(),
    name: z.string().optional(),
    primary: z.boolean().nullable().optional(),
    readOnly: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      credentialId: "credentialId",
      delegationCredentialId: "delegationCredentialId",
      email: "email",
      externalId: "externalId",
      integration: "integration",
      isSelected: "isSelected",
      name: "name",
      primary: "primary",
      readOnly: "readOnly",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Calendar
 */
const SchemaOut$Calendar: z.ZodType<
  External$Calendar, // output type of this zod object
  z.ZodTypeDef,
  Calendar // the object to be transformed
> = z
  .object({
    credentialId: z.number(),
    delegationCredentialId: z.string().nullable().optional(),
    email: z.string().optional(),
    externalId: z.string(),
    integration: z.string().optional(),
    isSelected: z.boolean(),
    name: z.string().optional(),
    primary: z.boolean().nullable().optional(),
    readOnly: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      credentialId: "credentialId",
      delegationCredentialId: "delegationCredentialId",
      email: "email",
      externalId: "externalId",
      integration: "integration",
      isSelected: "isSelected",
      name: "name",
      primary: "primary",
      readOnly: "readOnly",
    });
  });

export const Schemas$Calendar = {
  in: SchemaIn$Calendar,
  out: SchemaOut$Calendar,
};
