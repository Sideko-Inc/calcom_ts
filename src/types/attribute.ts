import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * Attribute
 */
export type Attribute = {
  /**
   * Whether the attribute is enabled and displayed on their profile
   */
  enabled: boolean;
  /**
   * The ID of the attribute
   */
  id: string;
  /**
   * The name of the attribute
   */
  name: string;
  /**
   * The slug of the attribute
   */
  slug: string;
  /**
   * The team ID associated with the attribute
   */
  teamId: number;
  /**
   * The type of the attribute
   */
  type: "MULTI_SELECT" | "NUMBER" | "SINGLE_SELECT" | "TEXT";
  /**
   * Whether users can edit the relation
   */
  usersCanEditRelation?: boolean | undefined;
};

/**
 * @internal
 * Attribute without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Attribute = {
  enabled: boolean;
  id: string;
  name: string;
  slug: string;
  teamId: number;
  type: "MULTI_SELECT" | "NUMBER" | "SINGLE_SELECT" | "TEXT";
  usersCanEditRelation?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Attribute
 */
const SchemaIn$Attribute: z.ZodType<
  Attribute, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    teamId: z.number(),
    type: z.enum(["MULTI_SELECT", "NUMBER", "SINGLE_SELECT", "TEXT"]),
    usersCanEditRelation: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      id: "id",
      name: "name",
      slug: "slug",
      teamId: "teamId",
      type: "type",
      usersCanEditRelation: "usersCanEditRelation",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Attribute
 */
const SchemaOut$Attribute: z.ZodType<
  External$Attribute, // output type of this zod object
  z.ZodTypeDef,
  Attribute // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    teamId: z.number(),
    type: z.enum(["MULTI_SELECT", "NUMBER", "SINGLE_SELECT", "TEXT"]),
    usersCanEditRelation: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      id: "id",
      name: "name",
      slug: "slug",
      teamId: "teamId",
      type: "type",
      usersCanEditRelation: "usersCanEditRelation",
    });
  });

export const Schemas$Attribute = {
  in: SchemaIn$Attribute,
  out: SchemaOut$Attribute,
};
