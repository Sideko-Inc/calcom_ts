import {
  External$OrgMembershipOutputDto,
  OrgMembershipOutputDto,
  Schemas$OrgMembershipOutputDto,
} from "./org-membership-output-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetOrgMembership
 */
export type GetOrgMembership = {
  data: OrgMembershipOutputDto;
  status: "error" | "success";
};

/**
 * @internal
 * GetOrgMembership without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetOrgMembership = {
  data: External$OrgMembershipOutputDto;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetOrgMembership
 */
const SchemaIn$GetOrgMembership: z.ZodType<
  GetOrgMembership, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetOrgMembership
 */
const SchemaOut$GetOrgMembership: z.ZodType<
  External$GetOrgMembership, // output type of this zod object
  z.ZodTypeDef,
  GetOrgMembership // the object to be transformed
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

export const Schemas$GetOrgMembership = {
  in: SchemaIn$GetOrgMembership,
  out: SchemaOut$GetOrgMembership,
};
