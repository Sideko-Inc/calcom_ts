import {
  External$ManagedUserOutput,
  ManagedUserOutput,
  Schemas$ManagedUserOutput,
} from "./managed-user-output";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateManagedUserData
 */
export type CreateManagedUserData = {
  accessToken: string;
  accessTokenExpiresAt: number;
  refreshToken: string;
  user: ManagedUserOutput;
};

/**
 * @internal
 * CreateManagedUserData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateManagedUserData = {
  accessToken: string;
  accessTokenExpiresAt: number;
  refreshToken: string;
  user: External$ManagedUserOutput;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateManagedUserData
 */
const SchemaIn$CreateManagedUserData: z.ZodType<
  CreateManagedUserData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    accessToken: z.string(),
    accessTokenExpiresAt: z.number(),
    refreshToken: z.string(),
    user: Schemas$ManagedUserOutput.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accessToken: "accessToken",
      accessTokenExpiresAt: "accessTokenExpiresAt",
      refreshToken: "refreshToken",
      user: "user",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateManagedUserData
 */
const SchemaOut$CreateManagedUserData: z.ZodType<
  External$CreateManagedUserData, // output type of this zod object
  z.ZodTypeDef,
  CreateManagedUserData // the object to be transformed
> = z
  .object({
    accessToken: z.string(),
    accessTokenExpiresAt: z.number(),
    refreshToken: z.string(),
    user: Schemas$ManagedUserOutput.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accessToken: "accessToken",
      accessTokenExpiresAt: "accessTokenExpiresAt",
      refreshToken: "refreshToken",
      user: "user",
    });
  });

export const Schemas$CreateManagedUserData = {
  in: SchemaIn$CreateManagedUserData,
  out: SchemaOut$CreateManagedUserData,
};
