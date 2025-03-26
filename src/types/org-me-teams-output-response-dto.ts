import {
  External$OrgTeamOutputDto,
  OrgTeamOutputDto,
  Schemas$OrgTeamOutputDto,
} from "./org-team-output-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * OrgMeTeamsOutputResponseDto
 */
export type OrgMeTeamsOutputResponseDto = {
  data: OrgTeamOutputDto[];
  status: "error" | "success";
};

/**
 * @internal
 * OrgMeTeamsOutputResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$OrgMeTeamsOutputResponseDto = {
  data: External$OrgTeamOutputDto[];
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object OrgMeTeamsOutputResponseDto
 */
const SchemaIn$OrgMeTeamsOutputResponseDto: z.ZodType<
  OrgMeTeamsOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$OrgTeamOutputDto.in),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$OrgMeTeamsOutputResponseDto
 */
const SchemaOut$OrgMeTeamsOutputResponseDto: z.ZodType<
  External$OrgMeTeamsOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  OrgMeTeamsOutputResponseDto // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$OrgTeamOutputDto.out),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$OrgMeTeamsOutputResponseDto = {
  in: SchemaIn$OrgMeTeamsOutputResponseDto,
  out: SchemaOut$OrgMeTeamsOutputResponseDto,
};
