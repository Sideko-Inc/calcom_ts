import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * AssignOptionUserOutputData
 */
export type AssignOptionUserOutputData = {
  /**
   * The value of the option
   */
  attributeOptionId: string;
  /**
   * The ID of the option assigned to the user
   */
  id: string;
  /**
   * The ID form the org membership for the user
   */
  memberId: number;
};

/**
 * @internal
 * AssignOptionUserOutputData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AssignOptionUserOutputData = {
  attributeOptionId: string;
  id: string;
  memberId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AssignOptionUserOutputData
 */
const SchemaIn$AssignOptionUserOutputData: z.ZodType<
  AssignOptionUserOutputData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    attributeOptionId: z.string(),
    id: z.string(),
    memberId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attributeOptionId: "attributeOptionId",
      id: "id",
      memberId: "memberId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AssignOptionUserOutputData
 */
const SchemaOut$AssignOptionUserOutputData: z.ZodType<
  External$AssignOptionUserOutputData, // output type of this zod object
  z.ZodTypeDef,
  AssignOptionUserOutputData // the object to be transformed
> = z
  .object({
    attributeOptionId: z.string(),
    id: z.string(),
    memberId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attributeOptionId: "attributeOptionId",
      id: "id",
      memberId: "memberId",
    });
  });

export const Schemas$AssignOptionUserOutputData = {
  in: SchemaIn$AssignOptionUserOutputData,
  out: SchemaOut$AssignOptionUserOutputData,
};
