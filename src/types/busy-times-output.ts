import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * BusyTimesOutput
 */
export type BusyTimesOutput = {
  end: string;
  source?: string | null | undefined;
  start: string;
};

/**
 * @internal
 * BusyTimesOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BusyTimesOutput = {
  end: string;
  source?: string | null | undefined;
  start: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BusyTimesOutput
 */
const SchemaIn$BusyTimesOutput: z.ZodType<
  BusyTimesOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    end: z.string(),
    source: z.string().nullable().optional(),
    start: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      end: "end",
      source: "source",
      start: "start",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BusyTimesOutput
 */
const SchemaOut$BusyTimesOutput: z.ZodType<
  External$BusyTimesOutput, // output type of this zod object
  z.ZodTypeDef,
  BusyTimesOutput // the object to be transformed
> = z
  .object({
    end: z.string(),
    source: z.string().nullable().optional(),
    start: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      end: "end",
      source: "source",
      start: "start",
    });
  });

export const Schemas$BusyTimesOutput = {
  in: SchemaIn$BusyTimesOutput,
  out: SchemaOut$BusyTimesOutput,
};
