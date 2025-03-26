import {
  External$TeamOutputDto,
  Schemas$TeamOutputDto,
  TeamOutputDto,
} from "./team-output-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * UpdateTeamOutput
 */
export type UpdateTeamOutput = {
  data: TeamOutputDto;
  status: "error" | "success";
};

/**
 * @internal
 * UpdateTeamOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateTeamOutput = {
  data: External$TeamOutputDto;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateTeamOutput
 */
const SchemaIn$UpdateTeamOutput: z.ZodType<
  UpdateTeamOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TeamOutputDto.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateTeamOutput
 */
const SchemaOut$UpdateTeamOutput: z.ZodType<
  External$UpdateTeamOutput, // output type of this zod object
  z.ZodTypeDef,
  UpdateTeamOutput // the object to be transformed
> = z
  .object({
    data: Schemas$TeamOutputDto.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$UpdateTeamOutput = {
  in: SchemaIn$UpdateTeamOutput,
  out: SchemaOut$UpdateTeamOutput,
};
