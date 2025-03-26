import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DefaultConferencingAppsOutputDto
 */
export type DefaultConferencingAppsOutputDto = {
  appLink?: string | undefined;
  appSlug?: string | undefined;
};

/**
 * @internal
 * DefaultConferencingAppsOutputDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DefaultConferencingAppsOutputDto = {
  appLink?: string | undefined;
  appSlug?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DefaultConferencingAppsOutputDto
 */
const SchemaIn$DefaultConferencingAppsOutputDto: z.ZodType<
  DefaultConferencingAppsOutputDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    appLink: z.string().optional(),
    appSlug: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      appLink: "appLink",
      appSlug: "appSlug",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DefaultConferencingAppsOutputDto
 */
const SchemaOut$DefaultConferencingAppsOutputDto: z.ZodType<
  External$DefaultConferencingAppsOutputDto, // output type of this zod object
  z.ZodTypeDef,
  DefaultConferencingAppsOutputDto // the object to be transformed
> = z
  .object({
    appLink: z.string().optional(),
    appSlug: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      appLink: "appLink",
      appSlug: "appSlug",
    });
  });

export const Schemas$DefaultConferencingAppsOutputDto = {
  in: SchemaIn$DefaultConferencingAppsOutputDto,
  out: SchemaOut$DefaultConferencingAppsOutputDto,
};
