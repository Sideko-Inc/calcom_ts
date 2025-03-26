import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetReservedSlotOutput20240904
 */
export type GetReservedSlotOutput20240904 = {
  data: Record<string, any> | null;
  status: "error" | "success";
};

/**
 * @internal
 * GetReservedSlotOutput20240904 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetReservedSlotOutput20240904 = {
  data: Record<string, any> | null;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetReservedSlotOutput20240904
 */
const SchemaIn$GetReservedSlotOutput20240904: z.ZodType<
  GetReservedSlotOutput20240904, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.record(z.string(), z.any()).nullable(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetReservedSlotOutput20240904
 */
const SchemaOut$GetReservedSlotOutput20240904: z.ZodType<
  External$GetReservedSlotOutput20240904, // output type of this zod object
  z.ZodTypeDef,
  GetReservedSlotOutput20240904 // the object to be transformed
> = z
  .object({
    data: z.record(z.string(), z.any()).nullable(),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$GetReservedSlotOutput20240904 = {
  in: SchemaIn$GetReservedSlotOutput20240904,
  out: SchemaOut$GetReservedSlotOutput20240904,
};
