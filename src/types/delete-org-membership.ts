import {
  External$OrgMembershipOutputDto,
  OrgMembershipOutputDto,
  Schemas$OrgMembershipOutputDto,
} from "./org-membership-output-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DeleteOrgMembership
 */
export type DeleteOrgMembership = {
  data: OrgMembershipOutputDto;
  status: "error" | "success";
};

/**
 * @internal
 * DeleteOrgMembership without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteOrgMembership = {
  data: External$OrgMembershipOutputDto;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeleteOrgMembership
 */
const SchemaIn$DeleteOrgMembership: z.ZodType<
  DeleteOrgMembership, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeleteOrgMembership
 */
const SchemaOut$DeleteOrgMembership: z.ZodType<
  External$DeleteOrgMembership, // output type of this zod object
  z.ZodTypeDef,
  DeleteOrgMembership // the object to be transformed
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

export const Schemas$DeleteOrgMembership = {
  in: SchemaIn$DeleteOrgMembership,
  out: SchemaOut$DeleteOrgMembership,
};
