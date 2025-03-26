import {
  External$OrgTeamMembershipOutputDto,
  OrgTeamMembershipOutputDto,
  Schemas$OrgTeamMembershipOutputDto,
} from "./org-team-membership-output-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * OrgTeamMembershipOutputResponseDto
 */
export type OrgTeamMembershipOutputResponseDto = {
  data: OrgTeamMembershipOutputDto;
  status: "error" | "success";
};

/**
 * @internal
 * OrgTeamMembershipOutputResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$OrgTeamMembershipOutputResponseDto = {
  data: External$OrgTeamMembershipOutputDto;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object OrgTeamMembershipOutputResponseDto
 */
const SchemaIn$OrgTeamMembershipOutputResponseDto: z.ZodType<
  OrgTeamMembershipOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$OrgTeamMembershipOutputDto.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$OrgTeamMembershipOutputResponseDto
 */
const SchemaOut$OrgTeamMembershipOutputResponseDto: z.ZodType<
  External$OrgTeamMembershipOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  OrgTeamMembershipOutputResponseDto // the object to be transformed
> = z
  .object({
    data: Schemas$OrgTeamMembershipOutputDto.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$OrgTeamMembershipOutputResponseDto = {
  in: SchemaIn$OrgTeamMembershipOutputResponseDto,
  out: SchemaOut$OrgTeamMembershipOutputResponseDto,
};
