import {
  External$ManagedUserOutput,
  ManagedUserOutput,
  Schemas$ManagedUserOutput,
} from "./managed-user-output";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetManagedUserOutput
 */
export type GetManagedUserOutput = {
  data: ManagedUserOutput;
  status: "error" | "success";
};

/**
 * @internal
 * GetManagedUserOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetManagedUserOutput = {
  data: External$ManagedUserOutput;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetManagedUserOutput
 */
const SchemaIn$GetManagedUserOutput: z.ZodType<
  GetManagedUserOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$ManagedUserOutput.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetManagedUserOutput
 */
const SchemaOut$GetManagedUserOutput: z.ZodType<
  External$GetManagedUserOutput, // output type of this zod object
  z.ZodTypeDef,
  GetManagedUserOutput // the object to be transformed
> = z
  .object({
    data: Schemas$ManagedUserOutput.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$GetManagedUserOutput = {
  in: SchemaIn$GetManagedUserOutput,
  out: SchemaOut$GetManagedUserOutput,
};
