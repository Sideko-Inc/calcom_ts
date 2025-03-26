import {
  External$ManagedUserOutput,
  ManagedUserOutput,
  Schemas$ManagedUserOutput,
} from "./managed-user-output";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetManagedUsersOutput
 */
export type GetManagedUsersOutput = {
  data: ManagedUserOutput[];
  status: "error" | "success";
};

/**
 * @internal
 * GetManagedUsersOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetManagedUsersOutput = {
  data: External$ManagedUserOutput[];
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetManagedUsersOutput
 */
const SchemaIn$GetManagedUsersOutput: z.ZodType<
  GetManagedUsersOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$ManagedUserOutput.in),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetManagedUsersOutput
 */
const SchemaOut$GetManagedUsersOutput: z.ZodType<
  External$GetManagedUsersOutput, // output type of this zod object
  z.ZodTypeDef,
  GetManagedUsersOutput // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$ManagedUserOutput.out),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$GetManagedUsersOutput = {
  in: SchemaIn$GetManagedUsersOutput,
  out: SchemaOut$GetManagedUsersOutput,
};
