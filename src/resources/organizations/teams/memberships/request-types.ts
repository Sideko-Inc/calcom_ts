import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  membershipId: number;
  orgId: number;
  teamId: number;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  membershipId: number;
  orgId: number;
  teamId: number;
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
    membershipId: z.number(),
    orgId: z.number(),
    teamId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      membershipId: "membershipId",
      orgId: "orgId",
      teamId: "teamId",
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
    membershipId: z.number(),
    orgId: z.number(),
    teamId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      membershipId: "membershipId",
      orgId: "orgId",
      teamId: "teamId",
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
  teamId: number;
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
  teamId: number;
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
    teamId: z.number(),
    skip: z.number().optional(),
    take: z.number().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      teamId: "teamId",
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
    teamId: z.number(),
    skip: z.number().optional(),
    take: z.number().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      teamId: "teamId",
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
  membershipId: number;
  orgId: number;
  teamId: number;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  membershipId: number;
  orgId: number;
  teamId: number;
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
    membershipId: z.number(),
    orgId: z.number(),
    teamId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      membershipId: "membershipId",
      orgId: "orgId",
      teamId: "teamId",
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
    membershipId: z.number(),
    orgId: z.number(),
    teamId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      membershipId: "membershipId",
      orgId: "orgId",
      teamId: "teamId",
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
  accepted?: boolean | undefined;
  disableImpersonation?: boolean | undefined;
  role?: ("ADMIN" | "MEMBER" | "OWNER") | undefined;
  membershipId: number;
  orgId: number;
  teamId: number;
};

/**
 * @internal
 * PatchRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PatchRequest = {
  accepted?: boolean | undefined;
  disableImpersonation?: boolean | undefined;
  role?: ("ADMIN" | "MEMBER" | "OWNER") | undefined;
  membershipId: number;
  orgId: number;
  teamId: number;
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
    accepted: z.boolean().optional(),
    disableImpersonation: z.boolean().optional(),
    role: z.enum(["ADMIN", "MEMBER", "OWNER"]).optional(),
    membershipId: z.number(),
    orgId: z.number(),
    teamId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accepted: "accepted",
      disableImpersonation: "disableImpersonation",
      role: "role",
      membershipId: "membershipId",
      orgId: "orgId",
      teamId: "teamId",
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
    accepted: z.boolean().optional(),
    disableImpersonation: z.boolean().optional(),
    role: z.enum(["ADMIN", "MEMBER", "OWNER"]).optional(),
    membershipId: z.number(),
    orgId: z.number(),
    teamId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accepted: "accepted",
      disableImpersonation: "disableImpersonation",
      role: "role",
      membershipId: "membershipId",
      orgId: "orgId",
      teamId: "teamId",
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
  accepted?: boolean | undefined;
  disableImpersonation?: boolean | undefined;
  role: "ADMIN" | "MEMBER" | "OWNER";
  userId: number;
  orgId: number;
  teamId: number;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  accepted?: boolean | undefined;
  disableImpersonation?: boolean | undefined;
  role: "ADMIN" | "MEMBER" | "OWNER";
  userId: number;
  orgId: number;
  teamId: number;
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
    accepted: z.boolean().optional(),
    disableImpersonation: z.boolean().optional(),
    role: z.enum(["ADMIN", "MEMBER", "OWNER"]),
    userId: z.number(),
    orgId: z.number(),
    teamId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accepted: "accepted",
      disableImpersonation: "disableImpersonation",
      role: "role",
      userId: "userId",
      orgId: "orgId",
      teamId: "teamId",
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
    accepted: z.boolean().optional(),
    disableImpersonation: z.boolean().optional(),
    role: z.enum(["ADMIN", "MEMBER", "OWNER"]),
    userId: z.number(),
    orgId: z.number(),
    teamId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accepted: "accepted",
      disableImpersonation: "disableImpersonation",
      role: "role",
      userId: "userId",
      orgId: "orgId",
      teamId: "teamId",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
