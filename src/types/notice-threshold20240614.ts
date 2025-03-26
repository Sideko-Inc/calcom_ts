import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * NoticeThreshold20240614
 */
export type NoticeThreshold20240614 = {
  /**
   * The time value for the notice threshold
   */
  count: number;
  /**
   * The unit of time for the notice threshold (e.g., minutes, hours)
   */
  unit: string;
};

/**
 * @internal
 * NoticeThreshold20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$NoticeThreshold20240614 = {
  count: number;
  unit: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object NoticeThreshold20240614
 */
const SchemaIn$NoticeThreshold20240614: z.ZodType<
  NoticeThreshold20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    count: z.number(),
    unit: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      count: "count",
      unit: "unit",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$NoticeThreshold20240614
 */
const SchemaOut$NoticeThreshold20240614: z.ZodType<
  External$NoticeThreshold20240614, // output type of this zod object
  z.ZodTypeDef,
  NoticeThreshold20240614 // the object to be transformed
> = z
  .object({
    count: z.number(),
    unit: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      count: "count",
      unit: "unit",
    });
  });

export const Schemas$NoticeThreshold20240614 = {
  in: SchemaIn$NoticeThreshold20240614,
  out: SchemaOut$NoticeThreshold20240614,
};
