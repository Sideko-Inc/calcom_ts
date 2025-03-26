import {
  External$GetOrgUsersWithProfileOutput,
  GetOrgUsersWithProfileOutput,
  Schemas$GetOrgUsersWithProfileOutput,
} from "./get-org-users-with-profile-output";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetOrganizationUsersResponseDto
 */
export type GetOrganizationUsersResponseDto = {
  data: GetOrgUsersWithProfileOutput[];
  status: "error" | "success";
};

/**
 * @internal
 * GetOrganizationUsersResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetOrganizationUsersResponseDto = {
  data: External$GetOrgUsersWithProfileOutput[];
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetOrganizationUsersResponseDto
 */
const SchemaIn$GetOrganizationUsersResponseDto: z.ZodType<
  GetOrganizationUsersResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$GetOrgUsersWithProfileOutput.in),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetOrganizationUsersResponseDto
 */
const SchemaOut$GetOrganizationUsersResponseDto: z.ZodType<
  External$GetOrganizationUsersResponseDto, // output type of this zod object
  z.ZodTypeDef,
  GetOrganizationUsersResponseDto // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$GetOrgUsersWithProfileOutput.out),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$GetOrganizationUsersResponseDto = {
  in: SchemaIn$GetOrganizationUsersResponseDto,
  out: SchemaOut$GetOrganizationUsersResponseDto,
};
