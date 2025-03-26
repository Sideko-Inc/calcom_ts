import { zodTransform } from "calcom_ts/core";
import {
  CreateOrganizationAttributeOptionInput,
  External$CreateOrganizationAttributeOptionInput,
  Schemas$CreateOrganizationAttributeOptionInput,
} from "calcom_ts/types/create-organization-attribute-option-input";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  attributeId: string;
  orgId: number;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  attributeId: string;
  orgId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeleteRequest
 */
const SchemaIn$DeleteRequest: z.ZodType<
  DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    attributeId: z.string(),
    orgId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attributeId: "attributeId",
      orgId: "orgId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeleteRequest
 */
const SchemaOut$DeleteRequest: z.ZodType<
  External$DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  DeleteRequest // the object to be transformed
> = z
  .object({
    attributeId: z.string(),
    orgId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attributeId: "attributeId",
      orgId: "orgId",
    });
  });

export const Schemas$DeleteRequest = {
  in: SchemaIn$DeleteRequest,
  out: SchemaOut$DeleteRequest,
};

/**
 * ListRequest
 */
export type ListRequest = {
  orgId: number;
  /**
   * The number of items to skip
   */
  skip?: number | undefined;
  /**
   * The number of items to return
   */
  take?: number | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  orgId: number;
  skip?: number | undefined;
  take?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    orgId: z.number(),
    skip: z.number().optional(),
    take: z.number().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      skip: "skip",
      take: "take",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    orgId: z.number(),
    skip: z.number().optional(),
    take: z.number().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      skip: "skip",
      take: "take",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  attributeId: string;
  orgId: number;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  attributeId: string;
  orgId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    attributeId: z.string(),
    orgId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attributeId: "attributeId",
      orgId: "orgId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    attributeId: z.string(),
    orgId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attributeId: "attributeId",
      orgId: "orgId",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * PatchRequest
 */
export type PatchRequest = {
  enabled?: boolean | undefined;
  name?: string | undefined;
  slug?: string | undefined;
  type?: ("MULTI_SELECT" | "NUMBER" | "SINGLE_SELECT" | "TEXT") | undefined;
  attributeId: string;
  orgId: number;
};

/**
 * @internal
 * PatchRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PatchRequest = {
  enabled?: boolean | undefined;
  name?: string | undefined;
  slug?: string | undefined;
  type?: ("MULTI_SELECT" | "NUMBER" | "SINGLE_SELECT" | "TEXT") | undefined;
  attributeId: string;
  orgId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PatchRequest
 */
const SchemaIn$PatchRequest: z.ZodType<
  PatchRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean().optional(),
    name: z.string().optional(),
    slug: z.string().optional(),
    type: z
      .enum(["MULTI_SELECT", "NUMBER", "SINGLE_SELECT", "TEXT"])
      .optional(),
    attributeId: z.string(),
    orgId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      name: "name",
      slug: "slug",
      type: "type",
      attributeId: "attributeId",
      orgId: "orgId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PatchRequest
 */
const SchemaOut$PatchRequest: z.ZodType<
  External$PatchRequest, // output type of this zod object
  z.ZodTypeDef,
  PatchRequest // the object to be transformed
> = z
  .object({
    enabled: z.boolean().optional(),
    name: z.string().optional(),
    slug: z.string().optional(),
    type: z
      .enum(["MULTI_SELECT", "NUMBER", "SINGLE_SELECT", "TEXT"])
      .optional(),
    attributeId: z.string(),
    orgId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      name: "name",
      slug: "slug",
      type: "type",
      attributeId: "attributeId",
      orgId: "orgId",
    });
  });

export const Schemas$PatchRequest = {
  in: SchemaIn$PatchRequest,
  out: SchemaOut$PatchRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
  enabled?: boolean | undefined;
  name: string;
  options: CreateOrganizationAttributeOptionInput[];
  slug: string;
  type: "MULTI_SELECT" | "NUMBER" | "SINGLE_SELECT" | "TEXT";
  orgId: number;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  enabled?: boolean | undefined;
  name: string;
  options: External$CreateOrganizationAttributeOptionInput[];
  slug: string;
  type: "MULTI_SELECT" | "NUMBER" | "SINGLE_SELECT" | "TEXT";
  orgId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean().optional(),
    name: z.string(),
    options: z.array(Schemas$CreateOrganizationAttributeOptionInput.in),
    slug: z.string(),
    type: z.enum(["MULTI_SELECT", "NUMBER", "SINGLE_SELECT", "TEXT"]),
    orgId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      name: "name",
      options: "options",
      slug: "slug",
      type: "type",
      orgId: "orgId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
> = z
  .object({
    enabled: z.boolean().optional(),
    name: z.string(),
    options: z.array(Schemas$CreateOrganizationAttributeOptionInput.out),
    slug: z.string(),
    type: z.enum(["MULTI_SELECT", "NUMBER", "SINGLE_SELECT", "TEXT"]),
    orgId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      name: "name",
      options: "options",
      slug: "slug",
      type: "type",
      orgId: "orgId",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
