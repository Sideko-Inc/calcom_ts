import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  oooId: number;
  orgId: number;
  userId: number;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  oooId: number;
  orgId: number;
  userId: number;
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
    oooId: z.number(),
    orgId: z.number(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      oooId: "oooId",
      orgId: "orgId",
      userId: "userId",
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
    oooId: z.number(),
    orgId: z.number(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      oooId: "oooId",
      orgId: "orgId",
      userId: "userId",
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
  userId: number;
  /**
   * The number of items to skip
   */
  skip?: number | undefined;
  /**
   * Sort results by their end time in ascending or descending order.
   */
  sortEnd?: ("asc" | "desc") | undefined;
  /**
   * Sort results by their start time in ascending or descending order.
   */
  sortStart?: ("asc" | "desc") | undefined;
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
  userId: number;
  skip?: number | undefined;
  sortEnd?: ("asc" | "desc") | undefined;
  sortStart?: ("asc" | "desc") | undefined;
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
    userId: z.number(),
    skip: z.number().optional(),
    sortEnd: z.enum(["asc", "desc"]).optional(),
    sortStart: z.enum(["asc", "desc"]).optional(),
    take: z.number().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      userId: "userId",
      skip: "skip",
      sortEnd: "sortEnd",
      sortStart: "sortStart",
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
    userId: z.number(),
    skip: z.number().optional(),
    sortEnd: z.enum(["asc", "desc"]).optional(),
    sortStart: z.enum(["asc", "desc"]).optional(),
    take: z.number().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      userId: "userId",
      skip: "skip",
      sortEnd: "sortEnd",
      sortStart: "sortStart",
      take: "take",
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
  /**
   * The end date and time of the out of office period in ISO 8601 format in UTC timezone.
   */
  end?: string | undefined;
  /**
   * Optional notes for the out of office entry.
   */
  notes?: string | undefined;
  /**
   * the reason for the out of office entry, if applicable
   */
  reason?:
    | ("public_holiday" | "sick" | "travel" | "unspecified" | "vacation")
    | undefined;
  /**
   * The start date and time of the out of office period in ISO 8601 format in UTC timezone.
   */
  start?: string | undefined;
  /**
   * The ID of the user covering for the out of office period, if applicable.
   */
  toUserId?: number | undefined;
  oooId: number;
  orgId: number;
  userId: number;
};

/**
 * @internal
 * PatchRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PatchRequest = {
  end?: string | undefined;
  notes?: string | undefined;
  reason?:
    | ("public_holiday" | "sick" | "travel" | "unspecified" | "vacation")
    | undefined;
  start?: string | undefined;
  toUserId?: number | undefined;
  oooId: number;
  orgId: number;
  userId: number;
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
    end: z.string().optional(),
    notes: z.string().optional(),
    reason: z
      .enum(["public_holiday", "sick", "travel", "unspecified", "vacation"])
      .optional(),
    start: z.string().optional(),
    toUserId: z.number().optional(),
    oooId: z.number(),
    orgId: z.number(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      end: "end",
      notes: "notes",
      reason: "reason",
      start: "start",
      toUserId: "toUserId",
      oooId: "oooId",
      orgId: "orgId",
      userId: "userId",
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
    end: z.string().optional(),
    notes: z.string().optional(),
    reason: z
      .enum(["public_holiday", "sick", "travel", "unspecified", "vacation"])
      .optional(),
    start: z.string().optional(),
    toUserId: z.number().optional(),
    oooId: z.number(),
    orgId: z.number(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      end: "end",
      notes: "notes",
      reason: "reason",
      start: "start",
      toUserId: "toUserId",
      oooId: "oooId",
      orgId: "orgId",
      userId: "userId",
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
   * The end date and time of the out of office period in ISO 8601 format in UTC timezone.
   */
  end: string;
  /**
   * Optional notes for the out of office entry.
   */
  notes?: string | undefined;
  /**
   * the reason for the out of office entry, if applicable
   */
  reason?:
    | ("public_holiday" | "sick" | "travel" | "unspecified" | "vacation")
    | undefined;
  /**
   * The start date and time of the out of office period in ISO 8601 format in UTC timezone.
   */
  start: string;
  /**
   * The ID of the user covering for the out of office period, if applicable.
   */
  toUserId?: number | undefined;
  orgId: number;
  userId: number;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  end: string;
  notes?: string | undefined;
  reason?:
    | ("public_holiday" | "sick" | "travel" | "unspecified" | "vacation")
    | undefined;
  start: string;
  toUserId?: number | undefined;
  orgId: number;
  userId: number;
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
    end: z.string(),
    notes: z.string().optional(),
    reason: z
      .enum(["public_holiday", "sick", "travel", "unspecified", "vacation"])
      .optional(),
    start: z.string(),
    toUserId: z.number().optional(),
    orgId: z.number(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      end: "end",
      notes: "notes",
      reason: "reason",
      start: "start",
      toUserId: "toUserId",
      orgId: "orgId",
      userId: "userId",
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
    end: z.string(),
    notes: z.string().optional(),
    reason: z
      .enum(["public_holiday", "sick", "travel", "unspecified", "vacation"])
      .optional(),
    start: z.string(),
    toUserId: z.number().optional(),
    orgId: z.number(),
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      end: "end",
      notes: "notes",
      reason: "reason",
      start: "start",
      toUserId: "toUserId",
      orgId: "orgId",
      userId: "userId",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
