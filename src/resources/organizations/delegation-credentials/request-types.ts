import { zodTransform } from "calcom_ts/core";
import {
  External$GoogleServiceAccountKeyInput,
  GoogleServiceAccountKeyInput,
  Schemas$GoogleServiceAccountKeyInput,
} from "calcom_ts/types/google-service-account-key-input";
import * as z from "zod";

/**
 * PatchRequest
 */
export type PatchRequest = {
  enabled?: boolean | undefined;
  serviceAccountKey?: GoogleServiceAccountKeyInput[] | undefined;
  credentialId: string;
  orgId: number;
};

/**
 * @internal
 * PatchRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PatchRequest = {
  enabled?: boolean | undefined;
  serviceAccountKey?: External$GoogleServiceAccountKeyInput[] | undefined;
  credentialId: string;
  orgId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PatchRequest
 */
const SchemaIn$PatchRequest: z.ZodType<
  PatchRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean().optional(),
    serviceAccountKey: z
      .array(Schemas$GoogleServiceAccountKeyInput.in)
      .optional(),
    credentialId: z.string(),
    orgId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      serviceAccountKey: "serviceAccountKey",
      credentialId: "credentialId",
      orgId: "orgId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PatchRequest
 */
const SchemaOut$PatchRequest: z.ZodType<
  External$PatchRequest, // output type of this zod object
  z.ZodTypeDef,
  PatchRequest // the object to be transformed
> = z
  .object({
    enabled: z.boolean().optional(),
    serviceAccountKey: z
      .array(Schemas$GoogleServiceAccountKeyInput.out)
      .optional(),
    credentialId: z.string(),
    orgId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      serviceAccountKey: "serviceAccountKey",
      credentialId: "credentialId",
      orgId: "orgId",
    });
  });

export const Schemas$PatchRequest = {
  in: SchemaIn$PatchRequest,
  out: SchemaOut$PatchRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
  domain: string;
  serviceAccountKey: GoogleServiceAccountKeyInput[];
  workspacePlatformSlug: string;
  orgId: number;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  domain: string;
  serviceAccountKey: External$GoogleServiceAccountKeyInput[];
  workspacePlatformSlug: string;
  orgId: number;
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
    domain: z.string(),
    serviceAccountKey: z.array(Schemas$GoogleServiceAccountKeyInput.in),
    workspacePlatformSlug: z.string(),
    orgId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      domain: "domain",
      serviceAccountKey: "serviceAccountKey",
      workspacePlatformSlug: "workspacePlatformSlug",
      orgId: "orgId",
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
    domain: z.string(),
    serviceAccountKey: z.array(Schemas$GoogleServiceAccountKeyInput.out),
    workspacePlatformSlug: z.string(),
    orgId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      domain: "domain",
      serviceAccountKey: "serviceAccountKey",
      workspacePlatformSlug: "workspacePlatformSlug",
      orgId: "orgId",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
