import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateOutOfOfficeEntryDto
 */
export type CreateOutOfOfficeEntryDto = {
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
};

/**
 * @internal
 * CreateOutOfOfficeEntryDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateOutOfOfficeEntryDto = {
  end: string;
  notes?: string | undefined;
  reason?:
    | ("public_holiday" | "sick" | "travel" | "unspecified" | "vacation")
    | undefined;
  start: string;
  toUserId?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateOutOfOfficeEntryDto
 */
const SchemaIn$CreateOutOfOfficeEntryDto: z.ZodType<
  CreateOutOfOfficeEntryDto, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateOutOfOfficeEntryDto
 */
const SchemaOut$CreateOutOfOfficeEntryDto: z.ZodType<
  External$CreateOutOfOfficeEntryDto, // output type of this zod object
  z.ZodTypeDef,
  CreateOutOfOfficeEntryDto // the object to be transformed
> = z
  .object({
    end: z.string(),
    notes: z.string().optional(),
    reason: z
      .enum(["public_holiday", "sick", "travel", "unspecified", "vacation"])
      .optional(),
    start: z.string(),
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

export const Schemas$CreateOutOfOfficeEntryDto = {
  in: SchemaIn$CreateOutOfOfficeEntryDto,
  out: SchemaOut$CreateOutOfOfficeEntryDto,
};
