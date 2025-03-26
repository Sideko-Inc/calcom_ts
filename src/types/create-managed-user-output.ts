import {
  CreateManagedUserData,
  External$CreateManagedUserData,
  Schemas$CreateManagedUserData,
} from "./create-managed-user-data";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateManagedUserOutput
 */
export type CreateManagedUserOutput = {
  data: CreateManagedUserData;
  error?: Record<string, any> | undefined;
  status: "error" | "success";
};

/**
 * @internal
 * CreateManagedUserOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateManagedUserOutput = {
  data: External$CreateManagedUserData;
  error?: Record<string, any> | undefined;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateManagedUserOutput
 */
const SchemaIn$CreateManagedUserOutput: z.ZodType<
  CreateManagedUserOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$CreateManagedUserData.in,
    error: z.record(z.string(), z.any()).optional(),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      error: "error",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateManagedUserOutput
 */
const SchemaOut$CreateManagedUserOutput: z.ZodType<
  External$CreateManagedUserOutput, // output type of this zod object
  z.ZodTypeDef,
  CreateManagedUserOutput // the object to be transformed
> = z
  .object({
    data: Schemas$CreateManagedUserData.out,
    error: z.record(z.string(), z.any()).optional(),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      error: "error",
      status: "status",
    });
  });

export const Schemas$CreateManagedUserOutput = {
  in: SchemaIn$CreateManagedUserOutput,
  out: SchemaOut$CreateManagedUserOutput,
};
