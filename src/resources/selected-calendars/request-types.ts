import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  credentialId: string;
  externalId: string;
  integration: string;
  delegationCredentialId?: string | undefined;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  credentialId: string;
  externalId: string;
  integration: string;
  delegationCredentialId?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeleteRequest
 */
const SchemaIn$DeleteRequest: z.ZodType<
  DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    credentialId: z.string(),
    externalId: z.string(),
    integration: z.string(),
    delegationCredentialId: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      credentialId: "credentialId",
      externalId: "externalId",
      integration: "integration",
      delegationCredentialId: "delegationCredentialId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeleteRequest
 */
const SchemaOut$DeleteRequest: z.ZodType<
  External$DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  DeleteRequest // the object to be transformed
> = z
  .object({
    credentialId: z.string(),
    externalId: z.string(),
    integration: z.string(),
    delegationCredentialId: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      credentialId: "credentialId",
      externalId: "externalId",
      integration: "integration",
      delegationCredentialId: "delegationCredentialId",
    });
  });

export const Schemas$DeleteRequest = {
  in: SchemaIn$DeleteRequest,
  out: SchemaOut$DeleteRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
  credentialId: number;
  delegationCredentialId?: string | undefined;
  externalId: string;
  integration: string;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  credentialId: number;
  delegationCredentialId?: string | undefined;
  externalId: string;
  integration: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    credentialId: z.number(),
    delegationCredentialId: z.string().optional(),
    externalId: z.string(),
    integration: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      credentialId: "credentialId",
      delegationCredentialId: "delegationCredentialId",
      externalId: "externalId",
      integration: "integration",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
> = z
  .object({
    credentialId: z.number(),
    delegationCredentialId: z.string().optional(),
    externalId: z.string(),
    integration: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      credentialId: "credentialId",
      delegationCredentialId: "delegationCredentialId",
      externalId: "externalId",
      integration: "integration",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
