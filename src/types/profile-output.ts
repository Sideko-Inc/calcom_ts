import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * ProfileOutput
 */
export type ProfileOutput = {
  /**
   * The ID of the profile of user
   */
  id: number;
  /**
   * The ID of the organization of user
   */
  organizationId: number;
  /**
   * The IDof the user
   */
  userId: number;
  /**
   * The username of the user within the organization context
   */
  username?: string | null | undefined;
};

/**
 * @internal
 * ProfileOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ProfileOutput = {
  id: number;
  organizationId: number;
  userId: number;
  username?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ProfileOutput
 */
const SchemaIn$ProfileOutput: z.ZodType<
  ProfileOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    id: z.number(),
    organizationId: z.number(),
    userId: z.number(),
    username: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      organizationId: "organizationId",
      userId: "userId",
      username: "username",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ProfileOutput
 */
const SchemaOut$ProfileOutput: z.ZodType<
  External$ProfileOutput, // output type of this zod object
  z.ZodTypeDef,
  ProfileOutput // the object to be transformed
> = z
  .object({
    id: z.number(),
    organizationId: z.number(),
    userId: z.number(),
    username: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      organizationId: "organizationId",
      userId: "userId",
      username: "username",
    });
  });

export const Schemas$ProfileOutput = {
  in: SchemaIn$ProfileOutput,
  out: SchemaOut$ProfileOutput,
};
