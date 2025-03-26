import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DeleteFromUserRequest
 */
export type DeleteFromUserRequest = {
  attributeOptionId: string;
  orgId: number;
  userId: number;
};

/**
 * @internal
 * DeleteFromUserRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteFromUserRequest = {
  attributeOptionId: string;
  orgId: number;
  userId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeleteFromUserRequest
 */
const SchemaIn$DeleteFromUserRequest: z.ZodType<
  DeleteFromUserRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    attributeOptionId: z.string(),
    orgId: z.number(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attributeOptionId: "attributeOptionId",
      orgId: "orgId",
      userId: "userId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeleteFromUserRequest
 */
const SchemaOut$DeleteFromUserRequest: z.ZodType<
  External$DeleteFromUserRequest, // output type of this zod object
  z.ZodTypeDef,
  DeleteFromUserRequest // the object to be transformed
> = z
  .object({
    attributeOptionId: z.string(),
    orgId: z.number(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attributeOptionId: "attributeOptionId",
      orgId: "orgId",
      userId: "userId",
    });
  });

export const Schemas$DeleteFromUserRequest = {
  in: SchemaIn$DeleteFromUserRequest,
  out: SchemaOut$DeleteFromUserRequest,
};

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  attributeId: string;
  optionId: string;
  orgId: number;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  attributeId: string;
  optionId: string;
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
    optionId: z.string(),
    orgId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attributeId: "attributeId",
      optionId: "optionId",
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
    optionId: z.string(),
    orgId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attributeId: "attributeId",
      optionId: "optionId",
      orgId: "orgId",
    });
  });

export const Schemas$DeleteRequest = {
  in: SchemaIn$DeleteRequest,
  out: SchemaOut$DeleteRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  orgId: number;
  userId: number;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  orgId: number;
  userId: number;
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
    orgId: z.number(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      userId: "userId",
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
    orgId: z.number(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      userId: "userId",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * ListRequest
 */
export type ListRequest = {
  attributeId: string;
  orgId: number;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  attributeId: string;
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
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

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * PatchRequest
 */
export type PatchRequest = {
  slug?: string | undefined;
  value?: string | undefined;
  attributeId: string;
  optionId: string;
  orgId: number;
};

/**
 * @internal
 * PatchRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PatchRequest = {
  slug?: string | undefined;
  value?: string | undefined;
  attributeId: string;
  optionId: string;
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
    slug: z.string().optional(),
    value: z.string().optional(),
    attributeId: z.string(),
    optionId: z.string(),
    orgId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      slug: "slug",
      value: "value",
      attributeId: "attributeId",
      optionId: "optionId",
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
    slug: z.string().optional(),
    value: z.string().optional(),
    attributeId: z.string(),
    optionId: z.string(),
    orgId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      slug: "slug",
      value: "value",
      attributeId: "attributeId",
      optionId: "optionId",
      orgId: "orgId",
    });
  });

export const Schemas$PatchRequest = {
  in: SchemaIn$PatchRequest,
  out: SchemaOut$PatchRequest,
};

/**
 * CreateToUserRequest
 */
export type CreateToUserRequest = {
  attributeId: string;
  attributeOptionId?: string | undefined;
  value?: string | undefined;
  orgId: number;
  userId: number;
};

/**
 * @internal
 * CreateToUserRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateToUserRequest = {
  attributeId: string;
  attributeOptionId?: string | undefined;
  value?: string | undefined;
  orgId: number;
  userId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateToUserRequest
 */
const SchemaIn$CreateToUserRequest: z.ZodType<
  CreateToUserRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    attributeId: z.string(),
    attributeOptionId: z.string().optional(),
    value: z.string().optional(),
    orgId: z.number(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attributeId: "attributeId",
      attributeOptionId: "attributeOptionId",
      value: "value",
      orgId: "orgId",
      userId: "userId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateToUserRequest
 */
const SchemaOut$CreateToUserRequest: z.ZodType<
  External$CreateToUserRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateToUserRequest // the object to be transformed
> = z
  .object({
    attributeId: z.string(),
    attributeOptionId: z.string().optional(),
    value: z.string().optional(),
    orgId: z.number(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attributeId: "attributeId",
      attributeOptionId: "attributeOptionId",
      value: "value",
      orgId: "orgId",
      userId: "userId",
    });
  });

export const Schemas$CreateToUserRequest = {
  in: SchemaIn$CreateToUserRequest,
  out: SchemaOut$CreateToUserRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
  slug: string;
  value: string;
  attributeId: string;
  orgId: number;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  slug: string;
  value: string;
  attributeId: string;
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
    slug: z.string(),
    value: z.string(),
    attributeId: z.string(),
    orgId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      slug: "slug",
      value: "value",
      attributeId: "attributeId",
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
    slug: z.string(),
    value: z.string(),
    attributeId: z.string(),
    orgId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      slug: "slug",
      value: "value",
      attributeId: "attributeId",
      orgId: "orgId",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
