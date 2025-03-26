import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * EventTypeTeam
 */
export type EventTypeTeam = {
  bannerUrl?: string | undefined;
  brandColor?: string | undefined;
  darkBrandColor?: string | undefined;
  id: number;
  logoUrl?: string | undefined;
  name?: string | undefined;
  slug?: string | undefined;
  theme?: string | undefined;
  weekStart?: string | undefined;
};

/**
 * @internal
 * EventTypeTeam without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$EventTypeTeam = {
  bannerUrl?: string | undefined;
  brandColor?: string | undefined;
  darkBrandColor?: string | undefined;
  id: number;
  logoUrl?: string | undefined;
  name?: string | undefined;
  slug?: string | undefined;
  theme?: string | undefined;
  weekStart?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object EventTypeTeam
 */
const SchemaIn$EventTypeTeam: z.ZodType<
  EventTypeTeam, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bannerUrl: z.string().optional(),
    brandColor: z.string().optional(),
    darkBrandColor: z.string().optional(),
    id: z.number(),
    logoUrl: z.string().optional(),
    name: z.string().optional(),
    slug: z.string().optional(),
    theme: z.string().optional(),
    weekStart: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bannerUrl: "bannerUrl",
      brandColor: "brandColor",
      darkBrandColor: "darkBrandColor",
      id: "id",
      logoUrl: "logoUrl",
      name: "name",
      slug: "slug",
      theme: "theme",
      weekStart: "weekStart",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$EventTypeTeam
 */
const SchemaOut$EventTypeTeam: z.ZodType<
  External$EventTypeTeam, // output type of this zod object
  z.ZodTypeDef,
  EventTypeTeam // the object to be transformed
> = z
  .object({
    bannerUrl: z.string().optional(),
    brandColor: z.string().optional(),
    darkBrandColor: z.string().optional(),
    id: z.number(),
    logoUrl: z.string().optional(),
    name: z.string().optional(),
    slug: z.string().optional(),
    theme: z.string().optional(),
    weekStart: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bannerUrl: "bannerUrl",
      brandColor: "brandColor",
      darkBrandColor: "darkBrandColor",
      id: "id",
      logoUrl: "logoUrl",
      name: "name",
      slug: "slug",
      theme: "theme",
      weekStart: "weekStart",
    });
  });

export const Schemas$EventTypeTeam = {
  in: SchemaIn$EventTypeTeam,
  out: SchemaOut$EventTypeTeam,
};
