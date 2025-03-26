import {
  External$MembershipUserOutputDto,
  MembershipUserOutputDto,
  Schemas$MembershipUserOutputDto,
} from "./membership-user-output-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * OrgTeamMembershipOutputDto
 */
export type OrgTeamMembershipOutputDto = {
  accepted: boolean;
  disableImpersonation?: boolean | undefined;
  id: number;
  role: "ADMIN" | "MEMBER" | "OWNER";
  teamId: number;
  user: MembershipUserOutputDto;
  userId: number;
};

/**
 * @internal
 * OrgTeamMembershipOutputDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$OrgTeamMembershipOutputDto = {
  accepted: boolean;
  disableImpersonation?: boolean | undefined;
  id: number;
  role: "ADMIN" | "MEMBER" | "OWNER";
  teamId: number;
  user: External$MembershipUserOutputDto;
  userId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object OrgTeamMembershipOutputDto
 */
const SchemaIn$OrgTeamMembershipOutputDto: z.ZodType<
  OrgTeamMembershipOutputDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    accepted: z.boolean(),
    disableImpersonation: z.boolean().optional(),
    id: z.number(),
    role: z.enum(["ADMIN", "MEMBER", "OWNER"]),
    teamId: z.number(),
    user: Schemas$MembershipUserOutputDto.in,
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accepted: "accepted",
      disableImpersonation: "disableImpersonation",
      id: "id",
      role: "role",
      teamId: "teamId",
      user: "user",
      userId: "userId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$OrgTeamMembershipOutputDto
 */
const SchemaOut$OrgTeamMembershipOutputDto: z.ZodType<
  External$OrgTeamMembershipOutputDto, // output type of this zod object
  z.ZodTypeDef,
  OrgTeamMembershipOutputDto // the object to be transformed
> = z
  .object({
    accepted: z.boolean(),
    disableImpersonation: z.boolean().optional(),
    id: z.number(),
    role: z.enum(["ADMIN", "MEMBER", "OWNER"]),
    teamId: z.number(),
    user: Schemas$MembershipUserOutputDto.out,
    userId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accepted: "accepted",
      disableImpersonation: "disableImpersonation",
      id: "id",
      role: "role",
      teamId: "teamId",
      user: "user",
      userId: "userId",
    });
  });

export const Schemas$OrgTeamMembershipOutputDto = {
  in: SchemaIn$OrgTeamMembershipOutputDto,
  out: SchemaOut$OrgTeamMembershipOutputDto,
};
