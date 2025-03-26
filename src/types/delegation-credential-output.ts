import {
  External$WorkspacePlatformDto,
  Schemas$WorkspacePlatformDto,
  WorkspacePlatformDto,
} from "./workspace-platform-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DelegationCredentialOutput
 */
export type DelegationCredentialOutput = {
  createdAt: string;
  domain: string;
  enabled: boolean;
  id: string;
  organizationId: number;
  updatedAt: string;
  workspacePlatform: WorkspacePlatformDto;
};

/**
 * @internal
 * DelegationCredentialOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DelegationCredentialOutput = {
  createdAt: string;
  domain: string;
  enabled: boolean;
  id: string;
  organizationId: number;
  updatedAt: string;
  workspacePlatform: External$WorkspacePlatformDto;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DelegationCredentialOutput
 */
const SchemaIn$DelegationCredentialOutput: z.ZodType<
  DelegationCredentialOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    createdAt: z.string(),
    domain: z.string(),
    enabled: z.boolean(),
    id: z.string(),
    organizationId: z.number(),
    updatedAt: z.string(),
    workspacePlatform: Schemas$WorkspacePlatformDto.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      createdAt: "createdAt",
      domain: "domain",
      enabled: "enabled",
      id: "id",
      organizationId: "organizationId",
      updatedAt: "updatedAt",
      workspacePlatform: "workspacePlatform",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DelegationCredentialOutput
 */
const SchemaOut$DelegationCredentialOutput: z.ZodType<
  External$DelegationCredentialOutput, // output type of this zod object
  z.ZodTypeDef,
  DelegationCredentialOutput // the object to be transformed
> = z
  .object({
    createdAt: z.string(),
    domain: z.string(),
    enabled: z.boolean(),
    id: z.string(),
    organizationId: z.number(),
    updatedAt: z.string(),
    workspacePlatform: Schemas$WorkspacePlatformDto.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      createdAt: "createdAt",
      domain: "domain",
      enabled: "enabled",
      id: "id",
      organizationId: "organizationId",
      updatedAt: "updatedAt",
      workspacePlatform: "workspacePlatform",
    });
  });

export const Schemas$DelegationCredentialOutput = {
  in: SchemaIn$DelegationCredentialOutput,
  out: SchemaOut$DelegationCredentialOutput,
};
