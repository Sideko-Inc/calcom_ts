import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  managedOrganizationId: number;
  orgId: number;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  managedOrganizationId: number;
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
    managedOrganizationId: z.number(),
    orgId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      managedOrganizationId: "managedOrganizationId",
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
    managedOrganizationId: z.number(),
    orgId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      managedOrganizationId: "managedOrganizationId",
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
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  orgId: number;
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
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
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
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
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
  managedOrganizationId: number;
  orgId: number;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  managedOrganizationId: number;
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
    managedOrganizationId: z.number(),
    orgId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      managedOrganizationId: "managedOrganizationId",
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
    managedOrganizationId: z.number(),
    orgId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      managedOrganizationId: "managedOrganizationId",
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
  /**
   * You can store any additional data you want here.
   * Metadata must have at most 50 keys, each key up to 40 characters.
   * Values can be strings (up to 500 characters), numbers, or booleans.
   */
  metadata?: Record<string, any> | undefined;
  /**
   * Name of the organization
   */
  name?: string | undefined;
  managedOrganizationId: number;
  orgId: number;
};

/**
 * @internal
 * PatchRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PatchRequest = {
  metadata?: Record<string, any> | undefined;
  name?: string | undefined;
  managedOrganizationId: number;
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
    metadata: z.record(z.string(), z.any()).optional(),
    name: z.string().optional(),
    managedOrganizationId: z.number(),
    orgId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      metadata: "metadata",
      name: "name",
      managedOrganizationId: "managedOrganizationId",
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
    metadata: z.record(z.string(), z.any()).optional(),
    name: z.string().optional(),
    managedOrganizationId: z.number(),
    orgId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      metadata: "metadata",
      name: "name",
      managedOrganizationId: "managedOrganizationId",
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
  /**
   * For how many days is managed organization api key valid. Defaults to 30 days.
   */
  apiKeyDaysValid?: number | undefined;
  /**
   * If true, organization api key never expires.
   */
  apiKeyNeverExpires?: boolean | undefined;
  /**
   * You can store any additional data you want here.
   * Metadata must have at most 50 keys, each key up to 40 characters.
   * Values can be strings (up to 500 characters), numbers, or booleans.
   */
  metadata?: Record<string, any> | undefined;
  /**
   * Name of the organization
   */
  name: string;
  orgId: number;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  apiKeyDaysValid?: number | undefined;
  apiKeyNeverExpires?: boolean | undefined;
  metadata?: Record<string, any> | undefined;
  name: string;
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
    apiKeyDaysValid: z.number().optional(),
    apiKeyNeverExpires: z.boolean().optional(),
    metadata: z.record(z.string(), z.any()).optional(),
    name: z.string(),
    orgId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      apiKeyDaysValid: "apiKeyDaysValid",
      apiKeyNeverExpires: "apiKeyNeverExpires",
      metadata: "metadata",
      name: "name",
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
    apiKeyDaysValid: z.number().optional(),
    apiKeyNeverExpires: z.boolean().optional(),
    metadata: z.record(z.string(), z.any()).optional(),
    name: z.string(),
    orgId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      apiKeyDaysValid: "apiKeyDaysValid",
      apiKeyNeverExpires: "apiKeyNeverExpires",
      metadata: "metadata",
      name: "name",
      orgId: "orgId",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
