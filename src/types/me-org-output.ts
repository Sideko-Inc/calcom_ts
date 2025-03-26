import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * MeOrgOutput
 */
export type MeOrgOutput = {
  id: number;
  isPlatform: boolean;
};

/**
 * @internal
 * MeOrgOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$MeOrgOutput = {
  id: number;
  isPlatform: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object MeOrgOutput
 */
const SchemaIn$MeOrgOutput: z.ZodType<
  MeOrgOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    id: z.number(),
    isPlatform: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      isPlatform: "isPlatform",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$MeOrgOutput
 */
const SchemaOut$MeOrgOutput: z.ZodType<
  External$MeOrgOutput, // output type of this zod object
  z.ZodTypeDef,
  MeOrgOutput // the object to be transformed
> = z
  .object({
    id: z.number(),
    isPlatform: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      isPlatform: "isPlatform",
    });
  });

export const Schemas$MeOrgOutput = {
  in: SchemaIn$MeOrgOutput,
  out: SchemaOut$MeOrgOutput,
};
