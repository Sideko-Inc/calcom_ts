import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * WorkspacePlatformDto
 */
export type WorkspacePlatformDto = {
  name: string;
  slug: string;
};

/**
 * @internal
 * WorkspacePlatformDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$WorkspacePlatformDto = {
  name: string;
  slug: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object WorkspacePlatformDto
 */
const SchemaIn$WorkspacePlatformDto: z.ZodType<
  WorkspacePlatformDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    name: z.string(),
    slug: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      name: "name",
      slug: "slug",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$WorkspacePlatformDto
 */
const SchemaOut$WorkspacePlatformDto: z.ZodType<
  External$WorkspacePlatformDto, // output type of this zod object
  z.ZodTypeDef,
  WorkspacePlatformDto // the object to be transformed
> = z
  .object({
    name: z.string(),
    slug: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      name: "name",
      slug: "slug",
    });
  });

export const Schemas$WorkspacePlatformDto = {
  in: SchemaIn$WorkspacePlatformDto,
  out: SchemaOut$WorkspacePlatformDto,
};
