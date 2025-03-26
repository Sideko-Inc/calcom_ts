import {
  External$GoogleServiceAccountKeyInput,
  GoogleServiceAccountKeyInput,
  Schemas$GoogleServiceAccountKeyInput,
} from "./google-service-account-key-input";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateDelegationCredentialInput
 */
export type CreateDelegationCredentialInput = {
  domain: string;
  serviceAccountKey: GoogleServiceAccountKeyInput[];
  workspacePlatformSlug: string;
};

/**
 * @internal
 * CreateDelegationCredentialInput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateDelegationCredentialInput = {
  domain: string;
  serviceAccountKey: External$GoogleServiceAccountKeyInput[];
  workspacePlatformSlug: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateDelegationCredentialInput
 */
const SchemaIn$CreateDelegationCredentialInput: z.ZodType<
  CreateDelegationCredentialInput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    domain: z.string(),
    serviceAccountKey: z.array(Schemas$GoogleServiceAccountKeyInput.in),
    workspacePlatformSlug: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      domain: "domain",
      serviceAccountKey: "serviceAccountKey",
      workspacePlatformSlug: "workspacePlatformSlug",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateDelegationCredentialInput
 */
const SchemaOut$CreateDelegationCredentialInput: z.ZodType<
  External$CreateDelegationCredentialInput, // output type of this zod object
  z.ZodTypeDef,
  CreateDelegationCredentialInput // the object to be transformed
> = z
  .object({
    domain: z.string(),
    serviceAccountKey: z.array(Schemas$GoogleServiceAccountKeyInput.out),
    workspacePlatformSlug: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      domain: "domain",
      serviceAccountKey: "serviceAccountKey",
      workspacePlatformSlug: "workspacePlatformSlug",
    });
  });

export const Schemas$CreateDelegationCredentialInput = {
  in: SchemaIn$CreateDelegationCredentialInput,
  out: SchemaOut$CreateDelegationCredentialInput,
};
