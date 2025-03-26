import {
  External$OrgMembershipOutputDto,
  OrgMembershipOutputDto,
  Schemas$OrgMembershipOutputDto,
} from "./org-membership-output-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * UpdateOrgMembership
 */
export type UpdateOrgMembership = {
  data: OrgMembershipOutputDto;
  status: "error" | "success";
};

/**
 * @internal
 * UpdateOrgMembership without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateOrgMembership = {
  data: External$OrgMembershipOutputDto;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateOrgMembership
 */
const SchemaIn$UpdateOrgMembership: z.ZodType<
  UpdateOrgMembership, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$OrgMembershipOutputDto.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateOrgMembership
 */
const SchemaOut$UpdateOrgMembership: z.ZodType<
  External$UpdateOrgMembership, // output type of this zod object
  z.ZodTypeDef,
  UpdateOrgMembership // the object to be transformed
> = z
  .object({
    data: Schemas$OrgMembershipOutputDto.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$UpdateOrgMembership = {
  in: SchemaIn$UpdateOrgMembership,
  out: SchemaOut$UpdateOrgMembership,
};
