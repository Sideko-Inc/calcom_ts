import {
  External$OrgMembershipOutputDto,
  OrgMembershipOutputDto,
  Schemas$OrgMembershipOutputDto,
} from "./org-membership-output-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetAllOrgMemberships
 */
export type GetAllOrgMemberships = {
  data: OrgMembershipOutputDto;
  status: "error" | "success";
};

/**
 * @internal
 * GetAllOrgMemberships without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetAllOrgMemberships = {
  data: External$OrgMembershipOutputDto;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetAllOrgMemberships
 */
const SchemaIn$GetAllOrgMemberships: z.ZodType<
  GetAllOrgMemberships, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetAllOrgMemberships
 */
const SchemaOut$GetAllOrgMemberships: z.ZodType<
  External$GetAllOrgMemberships, // output type of this zod object
  z.ZodTypeDef,
  GetAllOrgMemberships // the object to be transformed
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

export const Schemas$GetAllOrgMemberships = {
  in: SchemaIn$GetAllOrgMemberships,
  out: SchemaOut$GetAllOrgMemberships,
};
