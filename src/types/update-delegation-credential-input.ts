import {
  External$GoogleServiceAccountKeyInput,
  GoogleServiceAccountKeyInput,
  Schemas$GoogleServiceAccountKeyInput,
} from "./google-service-account-key-input";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * UpdateDelegationCredentialInput
 */
export type UpdateDelegationCredentialInput = {
  enabled?: boolean | undefined;
  serviceAccountKey?: GoogleServiceAccountKeyInput[] | undefined;
};

/**
 * @internal
 * UpdateDelegationCredentialInput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateDelegationCredentialInput = {
  enabled?: boolean | undefined;
  serviceAccountKey?: External$GoogleServiceAccountKeyInput[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateDelegationCredentialInput
 */
const SchemaIn$UpdateDelegationCredentialInput: z.ZodType<
  UpdateDelegationCredentialInput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean().optional(),
    serviceAccountKey: z
      .array(Schemas$GoogleServiceAccountKeyInput.in)
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      serviceAccountKey: "serviceAccountKey",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateDelegationCredentialInput
 */
const SchemaOut$UpdateDelegationCredentialInput: z.ZodType<
  External$UpdateDelegationCredentialInput, // output type of this zod object
  z.ZodTypeDef,
  UpdateDelegationCredentialInput // the object to be transformed
> = z
  .object({
    enabled: z.boolean().optional(),
    serviceAccountKey: z
      .array(Schemas$GoogleServiceAccountKeyInput.out)
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      serviceAccountKey: "serviceAccountKey",
    });
  });

export const Schemas$UpdateDelegationCredentialInput = {
  in: SchemaIn$UpdateDelegationCredentialInput,
  out: SchemaOut$UpdateDelegationCredentialInput,
};
