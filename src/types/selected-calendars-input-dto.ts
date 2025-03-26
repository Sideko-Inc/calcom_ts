import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * SelectedCalendarsInputDto
 */
export type SelectedCalendarsInputDto = {
  credentialId: number;
  delegationCredentialId?: string | undefined;
  externalId: string;
  integration: string;
};

/**
 * @internal
 * SelectedCalendarsInputDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SelectedCalendarsInputDto = {
  credentialId: number;
  delegationCredentialId?: string | undefined;
  externalId: string;
  integration: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SelectedCalendarsInputDto
 */
const SchemaIn$SelectedCalendarsInputDto: z.ZodType<
  SelectedCalendarsInputDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    credentialId: z.number(),
    delegationCredentialId: z.string().optional(),
    externalId: z.string(),
    integration: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      credentialId: "credentialId",
      delegationCredentialId: "delegationCredentialId",
      externalId: "externalId",
      integration: "integration",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SelectedCalendarsInputDto
 */
const SchemaOut$SelectedCalendarsInputDto: z.ZodType<
  External$SelectedCalendarsInputDto, // output type of this zod object
  z.ZodTypeDef,
  SelectedCalendarsInputDto // the object to be transformed
> = z
  .object({
    credentialId: z.number(),
    delegationCredentialId: z.string().optional(),
    externalId: z.string(),
    integration: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      credentialId: "credentialId",
      delegationCredentialId: "delegationCredentialId",
      externalId: "externalId",
      integration: "integration",
    });
  });

export const Schemas$SelectedCalendarsInputDto = {
  in: SchemaIn$SelectedCalendarsInputDto,
  out: SchemaOut$SelectedCalendarsInputDto,
};
