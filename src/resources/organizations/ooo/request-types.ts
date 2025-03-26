import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetRequest
 */
export type GetRequest = {
  orgId: number;
  /**
   * Filter ooo entries by the user email address. user must be within your organization.
   */
  email?: string | undefined;
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
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  orgId: number;
  email?: string | undefined;
  skip?: number | undefined;
  sortEnd?: ("asc" | "desc") | undefined;
  sortStart?: ("asc" | "desc") | undefined;
  take?: number | undefined;
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
    email: z.string().optional(),
    skip: z.number().optional(),
    sortEnd: z.enum(["asc", "desc"]).optional(),
    sortStart: z.enum(["asc", "desc"]).optional(),
    take: z.number().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      email: "email",
      skip: "skip",
      sortEnd: "sortEnd",
      sortStart: "sortStart",
      take: "take",
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
    email: z.string().optional(),
    skip: z.number().optional(),
    sortEnd: z.enum(["asc", "desc"]).optional(),
    sortStart: z.enum(["asc", "desc"]).optional(),
    take: z.number().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      email: "email",
      skip: "skip",
      sortEnd: "sortEnd",
      sortStart: "sortStart",
      take: "take",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};
