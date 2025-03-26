import {
  DelegationCredentialOutput,
  External$DelegationCredentialOutput,
  Schemas$DelegationCredentialOutput,
} from "./delegation-credential-output";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateDelegationCredentialOutput
 */
export type CreateDelegationCredentialOutput = {
  data: DelegationCredentialOutput;
  status: "error" | "success";
};

/**
 * @internal
 * CreateDelegationCredentialOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateDelegationCredentialOutput = {
  data: External$DelegationCredentialOutput;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateDelegationCredentialOutput
 */
const SchemaIn$CreateDelegationCredentialOutput: z.ZodType<
  CreateDelegationCredentialOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$DelegationCredentialOutput.in,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateDelegationCredentialOutput
 */
const SchemaOut$CreateDelegationCredentialOutput: z.ZodType<
  External$CreateDelegationCredentialOutput, // output type of this zod object
  z.ZodTypeDef,
  CreateDelegationCredentialOutput // the object to be transformed
> = z
  .object({
    data: Schemas$DelegationCredentialOutput.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$CreateDelegationCredentialOutput = {
  in: SchemaIn$CreateDelegationCredentialOutput,
  out: SchemaOut$CreateDelegationCredentialOutput,
};
