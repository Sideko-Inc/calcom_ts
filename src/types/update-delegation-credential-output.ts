import {
  DelegationCredentialOutput,
  External$DelegationCredentialOutput,
  Schemas$DelegationCredentialOutput,
} from "./delegation-credential-output";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * UpdateDelegationCredentialOutput
 */
export type UpdateDelegationCredentialOutput = {
  data: DelegationCredentialOutput;
  status: "error" | "success";
};

/**
 * @internal
 * UpdateDelegationCredentialOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateDelegationCredentialOutput = {
  data: External$DelegationCredentialOutput;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateDelegationCredentialOutput
 */
const SchemaIn$UpdateDelegationCredentialOutput: z.ZodType<
  UpdateDelegationCredentialOutput, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateDelegationCredentialOutput
 */
const SchemaOut$UpdateDelegationCredentialOutput: z.ZodType<
  External$UpdateDelegationCredentialOutput, // output type of this zod object
  z.ZodTypeDef,
  UpdateDelegationCredentialOutput // the object to be transformed
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

export const Schemas$UpdateDelegationCredentialOutput = {
  in: SchemaIn$UpdateDelegationCredentialOutput,
  out: SchemaOut$UpdateDelegationCredentialOutput,
};
