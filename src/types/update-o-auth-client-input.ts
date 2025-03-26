import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * UpdateOAuthClientInput
 */
export type UpdateOAuthClientInput = {
  /**
   * If true, when creating a managed user the managed user will have 4 default event types: 30 and 60 minutes without Cal video, 30 and 60 minutes with Cal video. Set this as false if you want to create a managed user and then manually create event types for the user.
   */
  areDefaultEventTypesEnabled?: boolean | undefined;
  areEmailsEnabled?: boolean | undefined;
  bookingCancelRedirectUri?: string | undefined;
  bookingRedirectUri?: string | undefined;
  bookingRescheduleRedirectUri?: string | undefined;
  logo?: string | undefined;
  name?: string | undefined;
  redirectUris?: string[] | undefined;
};

/**
 * @internal
 * UpdateOAuthClientInput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateOAuthClientInput = {
  areDefaultEventTypesEnabled?: boolean | undefined;
  areEmailsEnabled?: boolean | undefined;
  bookingCancelRedirectUri?: string | undefined;
  bookingRedirectUri?: string | undefined;
  bookingRescheduleRedirectUri?: string | undefined;
  logo?: string | undefined;
  name?: string | undefined;
  redirectUris?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateOAuthClientInput
 */
const SchemaIn$UpdateOAuthClientInput: z.ZodType<
  UpdateOAuthClientInput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    areDefaultEventTypesEnabled: z.boolean().optional(),
    areEmailsEnabled: z.boolean().optional(),
    bookingCancelRedirectUri: z.string().optional(),
    bookingRedirectUri: z.string().optional(),
    bookingRescheduleRedirectUri: z.string().optional(),
    logo: z.string().optional(),
    name: z.string().optional(),
    redirectUris: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      areDefaultEventTypesEnabled: "areDefaultEventTypesEnabled",
      areEmailsEnabled: "areEmailsEnabled",
      bookingCancelRedirectUri: "bookingCancelRedirectUri",
      bookingRedirectUri: "bookingRedirectUri",
      bookingRescheduleRedirectUri: "bookingRescheduleRedirectUri",
      logo: "logo",
      name: "name",
      redirectUris: "redirectUris",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateOAuthClientInput
 */
const SchemaOut$UpdateOAuthClientInput: z.ZodType<
  External$UpdateOAuthClientInput, // output type of this zod object
  z.ZodTypeDef,
  UpdateOAuthClientInput // the object to be transformed
> = z
  .object({
    areDefaultEventTypesEnabled: z.boolean().optional(),
    areEmailsEnabled: z.boolean().optional(),
    bookingCancelRedirectUri: z.string().optional(),
    bookingRedirectUri: z.string().optional(),
    bookingRescheduleRedirectUri: z.string().optional(),
    logo: z.string().optional(),
    name: z.string().optional(),
    redirectUris: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      areDefaultEventTypesEnabled: "areDefaultEventTypesEnabled",
      areEmailsEnabled: "areEmailsEnabled",
      bookingCancelRedirectUri: "bookingCancelRedirectUri",
      bookingRedirectUri: "bookingRedirectUri",
      bookingRescheduleRedirectUri: "bookingRescheduleRedirectUri",
      logo: "logo",
      name: "name",
      redirectUris: "redirectUris",
    });
  });

export const Schemas$UpdateOAuthClientInput = {
  in: SchemaIn$UpdateOAuthClientInput,
  out: SchemaOut$UpdateOAuthClientInput,
};
