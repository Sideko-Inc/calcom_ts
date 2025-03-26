import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * ConferencingAppsOutputDto
 */
export type ConferencingAppsOutputDto = {
  /**
   * Id of the conferencing app credentials
   */
  id: number;
  /**
   * Whether if the connection is working or not.
   */
  invalid?: boolean | null | undefined;
  /**
   * Type of conferencing app
   */
  type: string;
  /**
   * Id of the user associated to the conferencing app
   */
  userId: number;
};

/**
 * @internal
 * ConferencingAppsOutputDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConferencingAppsOutputDto = {
  id: number;
  invalid?: boolean | null | undefined;
  type: string;
  userId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConferencingAppsOutputDto
 */
const SchemaIn$ConferencingAppsOutputDto: z.ZodType<
  ConferencingAppsOutputDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    id: z.number(),
    invalid: z.boolean().nullable().optional(),
    type: z.string(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      invalid: "invalid",
      type: "type",
      userId: "userId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConferencingAppsOutputDto
 */
const SchemaOut$ConferencingAppsOutputDto: z.ZodType<
  External$ConferencingAppsOutputDto, // output type of this zod object
  z.ZodTypeDef,
  ConferencingAppsOutputDto // the object to be transformed
> = z
  .object({
    id: z.number(),
    invalid: z.boolean().nullable().optional(),
    type: z.string(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      invalid: "invalid",
      type: "type",
      userId: "userId",
    });
  });

export const Schemas$ConferencingAppsOutputDto = {
  in: SchemaIn$ConferencingAppsOutputDto,
  out: SchemaOut$ConferencingAppsOutputDto,
};
