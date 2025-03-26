import {
  External$TeamOutputDto,
  Schemas$TeamOutputDto,
  TeamOutputDto,
} from "./team-output-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetTeamsOutput
 */
export type GetTeamsOutput = {
  data: TeamOutputDto[];
  status: "error" | "success";
};

/**
 * @internal
 * GetTeamsOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetTeamsOutput = {
  data: External$TeamOutputDto[];
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetTeamsOutput
 */
const SchemaIn$GetTeamsOutput: z.ZodType<
  GetTeamsOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$TeamOutputDto.in),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetTeamsOutput
 */
const SchemaOut$GetTeamsOutput: z.ZodType<
  External$GetTeamsOutput, // output type of this zod object
  z.ZodTypeDef,
  GetTeamsOutput // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$TeamOutputDto.out),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$GetTeamsOutput = {
  in: SchemaIn$GetTeamsOutput,
  out: SchemaOut$GetTeamsOutput,
};
