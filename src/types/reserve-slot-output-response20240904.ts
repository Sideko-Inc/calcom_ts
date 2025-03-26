import {
  External$ReserveSlotOutput20240904,
  ReserveSlotOutput20240904,
  Schemas$ReserveSlotOutput20240904,
} from "./reserve-slot-output20240904";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * ReserveSlotOutputResponse20240904
 */
export type ReserveSlotOutputResponse20240904 = {
  data: ReserveSlotOutput20240904;
  status: "error" | "success";
};

/**
 * @internal
 * ReserveSlotOutputResponse20240904 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ReserveSlotOutputResponse20240904 = {
  data: External$ReserveSlotOutput20240904;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ReserveSlotOutputResponse20240904
 */
const SchemaIn$ReserveSlotOutputResponse20240904: z.ZodType<
  ReserveSlotOutputResponse20240904, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$ReserveSlotOutput20240904.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ReserveSlotOutputResponse20240904
 */
const SchemaOut$ReserveSlotOutputResponse20240904: z.ZodType<
  External$ReserveSlotOutputResponse20240904, // output type of this zod object
  z.ZodTypeDef,
  ReserveSlotOutputResponse20240904 // the object to be transformed
> = z
  .object({
    data: Schemas$ReserveSlotOutput20240904.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$ReserveSlotOutputResponse20240904 = {
  in: SchemaIn$ReserveSlotOutputResponse20240904,
  out: SchemaOut$ReserveSlotOutputResponse20240904,
};
