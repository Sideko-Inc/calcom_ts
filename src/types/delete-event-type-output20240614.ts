import {
  DeleteData20240614,
  External$DeleteData20240614,
  Schemas$DeleteData20240614,
} from "./delete-data20240614";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DeleteEventTypeOutput20240614
 */
export type DeleteEventTypeOutput20240614 = {
  data: DeleteData20240614;
  status: "error" | "success";
};

/**
 * @internal
 * DeleteEventTypeOutput20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteEventTypeOutput20240614 = {
  data: External$DeleteData20240614;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeleteEventTypeOutput20240614
 */
const SchemaIn$DeleteEventTypeOutput20240614: z.ZodType<
  DeleteEventTypeOutput20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$DeleteData20240614.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeleteEventTypeOutput20240614
 */
const SchemaOut$DeleteEventTypeOutput20240614: z.ZodType<
  External$DeleteEventTypeOutput20240614, // output type of this zod object
  z.ZodTypeDef,
  DeleteEventTypeOutput20240614 // the object to be transformed
> = z
  .object({
    data: Schemas$DeleteData20240614.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$DeleteEventTypeOutput20240614 = {
  in: SchemaIn$DeleteEventTypeOutput20240614,
  out: SchemaOut$DeleteEventTypeOutput20240614,
};
