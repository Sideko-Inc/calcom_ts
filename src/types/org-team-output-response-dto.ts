import {
  External$OrgTeamOutputDto,
  OrgTeamOutputDto,
  Schemas$OrgTeamOutputDto,
} from "./org-team-output-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * OrgTeamOutputResponseDto
 */
export type OrgTeamOutputResponseDto = {
  data: OrgTeamOutputDto;
  status: "error" | "success";
};

/**
 * @internal
 * OrgTeamOutputResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$OrgTeamOutputResponseDto = {
  data: External$OrgTeamOutputDto;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object OrgTeamOutputResponseDto
 */
const SchemaIn$OrgTeamOutputResponseDto: z.ZodType<
  OrgTeamOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$OrgTeamOutputDto.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$OrgTeamOutputResponseDto
 */
const SchemaOut$OrgTeamOutputResponseDto: z.ZodType<
  External$OrgTeamOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  OrgTeamOutputResponseDto // the object to be transformed
> = z
  .object({
    data: Schemas$OrgTeamOutputDto.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$OrgTeamOutputResponseDto = {
  in: SchemaIn$OrgTeamOutputResponseDto,
  out: SchemaOut$OrgTeamOutputResponseDto,
};
