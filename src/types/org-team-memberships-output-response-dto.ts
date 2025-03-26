import {
  External$OrgTeamMembershipOutputDto,
  OrgTeamMembershipOutputDto,
  Schemas$OrgTeamMembershipOutputDto,
} from "./org-team-membership-output-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * OrgTeamMembershipsOutputResponseDto
 */
export type OrgTeamMembershipsOutputResponseDto = {
  data: OrgTeamMembershipOutputDto[];
  status: "error" | "success";
};

/**
 * @internal
 * OrgTeamMembershipsOutputResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$OrgTeamMembershipsOutputResponseDto = {
  data: External$OrgTeamMembershipOutputDto[];
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object OrgTeamMembershipsOutputResponseDto
 */
const SchemaIn$OrgTeamMembershipsOutputResponseDto: z.ZodType<
  OrgTeamMembershipsOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$OrgTeamMembershipOutputDto.in),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$OrgTeamMembershipsOutputResponseDto
 */
const SchemaOut$OrgTeamMembershipsOutputResponseDto: z.ZodType<
  External$OrgTeamMembershipsOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  OrgTeamMembershipsOutputResponseDto // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$OrgTeamMembershipOutputDto.out),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$OrgTeamMembershipsOutputResponseDto = {
  in: SchemaIn$OrgTeamMembershipsOutputResponseDto,
  out: SchemaOut$OrgTeamMembershipsOutputResponseDto,
};
