import {
  BusyTimesOutput,
  External$BusyTimesOutput,
  Schemas$BusyTimesOutput,
} from "./busy-times-output";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetBusyTimesOutput
 */
export type GetBusyTimesOutput = {
  data: BusyTimesOutput[];
  status: "error" | "success";
};

/**
 * @internal
 * GetBusyTimesOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetBusyTimesOutput = {
  data: External$BusyTimesOutput[];
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetBusyTimesOutput
 */
const SchemaIn$GetBusyTimesOutput: z.ZodType<
  GetBusyTimesOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$BusyTimesOutput.in),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetBusyTimesOutput
 */
const SchemaOut$GetBusyTimesOutput: z.ZodType<
  External$GetBusyTimesOutput, // output type of this zod object
  z.ZodTypeDef,
  GetBusyTimesOutput // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$BusyTimesOutput.out),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$GetBusyTimesOutput = {
  in: SchemaIn$GetBusyTimesOutput,
  out: SchemaOut$GetBusyTimesOutput,
};
