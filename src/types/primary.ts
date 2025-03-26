import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * Primary
 */
export type Primary = {
  credentialId: number;
  delegationCredentialId?: string | null | undefined;
  email?: string | undefined;
  externalId: string;
  integration?: string | undefined;
  isSelected: boolean;
  name?: string | undefined;
  primary: boolean | null;
  readOnly: boolean;
};

/**
 * @internal
 * Primary without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Primary = {
  credentialId: number;
  delegationCredentialId?: string | null | undefined;
  email?: string | undefined;
  externalId: string;
  integration?: string | undefined;
  isSelected: boolean;
  name?: string | undefined;
  primary: boolean | null;
  readOnly: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Primary
 */
const SchemaIn$Primary: z.ZodType<
  Primary, // output type of this zod object
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
    primary: z.boolean().nullable(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Primary
 */
const SchemaOut$Primary: z.ZodType<
  External$Primary, // output type of this zod object
  z.ZodTypeDef,
  Primary // the object to be transformed
> = z
  .object({
    credentialId: z.number(),
    delegationCredentialId: z.string().nullable().optional(),
    email: z.string().optional(),
    externalId: z.string(),
    integration: z.string().optional(),
    isSelected: z.boolean(),
    name: z.string().optional(),
    primary: z.boolean().nullable(),
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

export const Schemas$Primary = {
  in: SchemaIn$Primary,
  out: SchemaOut$Primary,
};
