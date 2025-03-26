import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * UpdateOutOfOfficeEntryDto
 */
export type UpdateOutOfOfficeEntryDto = {
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
};

/**
 * @internal
 * UpdateOutOfOfficeEntryDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateOutOfOfficeEntryDto = {
  end?: string | undefined;
  notes?: string | undefined;
  reason?:
    | ("public_holiday" | "sick" | "travel" | "unspecified" | "vacation")
    | undefined;
  start?: string | undefined;
  toUserId?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateOutOfOfficeEntryDto
 */
const SchemaIn$UpdateOutOfOfficeEntryDto: z.ZodType<
  UpdateOutOfOfficeEntryDto, // output type of this zod object
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
  })
  .transform((obj) => {
    return zodTransform(obj, {
      end: "end",
      notes: "notes",
      reason: "reason",
      start: "start",
      toUserId: "toUserId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateOutOfOfficeEntryDto
 */
const SchemaOut$UpdateOutOfOfficeEntryDto: z.ZodType<
  External$UpdateOutOfOfficeEntryDto, // output type of this zod object
  z.ZodTypeDef,
  UpdateOutOfOfficeEntryDto // the object to be transformed
> = z
  .object({
    end: z.string().optional(),
    notes: z.string().optional(),
    reason: z
      .enum(["public_holiday", "sick", "travel", "unspecified", "vacation"])
      .optional(),
    start: z.string().optional(),
    toUserId: z.number().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      end: "end",
      notes: "notes",
      reason: "reason",
      start: "start",
      toUserId: "toUserId",
    });
  });

export const Schemas$UpdateOutOfOfficeEntryDto = {
  in: SchemaIn$UpdateOutOfOfficeEntryDto,
  out: SchemaOut$UpdateOutOfOfficeEntryDto,
};
