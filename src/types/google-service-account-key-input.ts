import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GoogleServiceAccountKeyInput
 */
export type GoogleServiceAccountKeyInput = {
  clientEmail: string;
  clientId: string;
  privateKey: string;
};

/**
 * @internal
 * GoogleServiceAccountKeyInput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GoogleServiceAccountKeyInput = {
  client_email: string;
  client_id: string;
  private_key: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GoogleServiceAccountKeyInput
 */
const SchemaIn$GoogleServiceAccountKeyInput: z.ZodType<
  GoogleServiceAccountKeyInput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    client_email: z.string(),
    client_id: z.string(),
    private_key: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      client_email: "clientEmail",
      client_id: "clientId",
      private_key: "privateKey",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GoogleServiceAccountKeyInput
 */
const SchemaOut$GoogleServiceAccountKeyInput: z.ZodType<
  External$GoogleServiceAccountKeyInput, // output type of this zod object
  z.ZodTypeDef,
  GoogleServiceAccountKeyInput // the object to be transformed
> = z
  .object({
    clientEmail: z.string(),
    clientId: z.string(),
    privateKey: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientEmail: "client_email",
      clientId: "client_id",
      privateKey: "private_key",
    });
  });

export const Schemas$GoogleServiceAccountKeyInput = {
  in: SchemaIn$GoogleServiceAccountKeyInput,
  out: SchemaOut$GoogleServiceAccountKeyInput,
};
