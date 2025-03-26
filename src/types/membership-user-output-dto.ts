import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * MembershipUserOutputDto
 */
export type MembershipUserOutputDto = {
  avatarUrl?: string | undefined;
  email: string;
  name?: string | undefined;
  username?: string | undefined;
};

/**
 * @internal
 * MembershipUserOutputDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$MembershipUserOutputDto = {
  avatarUrl?: string | undefined;
  email: string;
  name?: string | undefined;
  username?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object MembershipUserOutputDto
 */
const SchemaIn$MembershipUserOutputDto: z.ZodType<
  MembershipUserOutputDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    avatarUrl: z.string().optional(),
    email: z.string(),
    name: z.string().optional(),
    username: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      avatarUrl: "avatarUrl",
      email: "email",
      name: "name",
      username: "username",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$MembershipUserOutputDto
 */
const SchemaOut$MembershipUserOutputDto: z.ZodType<
  External$MembershipUserOutputDto, // output type of this zod object
  z.ZodTypeDef,
  MembershipUserOutputDto // the object to be transformed
> = z
  .object({
    avatarUrl: z.string().optional(),
    email: z.string(),
    name: z.string().optional(),
    username: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      avatarUrl: "avatarUrl",
      email: "email",
      name: "name",
      username: "username",
    });
  });

export const Schemas$MembershipUserOutputDto = {
  in: SchemaIn$MembershipUserOutputDto,
  out: SchemaOut$MembershipUserOutputDto,
};
