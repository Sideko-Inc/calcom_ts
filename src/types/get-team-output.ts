import {
  External$TeamOutputDto,
  Schemas$TeamOutputDto,
  TeamOutputDto,
} from "./team-output-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetTeamOutput
 */
export type GetTeamOutput = {
  data: TeamOutputDto;
  status: "error" | "success";
};

/**
 * @internal
 * GetTeamOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetTeamOutput = {
  data: External$TeamOutputDto;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetTeamOutput
 */
const SchemaIn$GetTeamOutput: z.ZodType<
  GetTeamOutput, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetTeamOutput
 */
const SchemaOut$GetTeamOutput: z.ZodType<
  External$GetTeamOutput, // output type of this zod object
  z.ZodTypeDef,
  GetTeamOutput // the object to be transformed
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

export const Schemas$GetTeamOutput = {
  in: SchemaIn$GetTeamOutput,
  out: SchemaOut$GetTeamOutput,
};
