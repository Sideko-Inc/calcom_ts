import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * Integration
 */
export type Integration = {
  template?: string | undefined;
  appData?: Record<string, any> | null | undefined;
  categories: string[];
  category?: string | undefined;
  description: string;
  dirName?: string | undefined;
  email: string;
  installed?: boolean | undefined;
  locationOption: Record<string, any> | null;
  logo: string;
  name: string;
  publisher: string;
  slug: string;
  title?: string | undefined;
  type: string;
  url: string;
  variant: string;
};

/**
 * @internal
 * Integration without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Integration = {
  __template?: string | undefined;
  appData?: Record<string, any> | null | undefined;
  categories: string[];
  category?: string | undefined;
  description: string;
  dirName?: string | undefined;
  email: string;
  installed?: boolean | undefined;
  locationOption: Record<string, any> | null;
  logo: string;
  name: string;
  publisher: string;
  slug: string;
  title?: string | undefined;
  type: string;
  url: string;
  variant: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Integration
 */
const SchemaIn$Integration: z.ZodType<
  Integration, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    __template: z.string().optional(),
    appData: z.record(z.string(), z.any()).nullable().optional(),
    categories: z.array(z.string()),
    category: z.string().optional(),
    description: z.string(),
    dirName: z.string().optional(),
    email: z.string(),
    installed: z.boolean().optional(),
    locationOption: z.record(z.string(), z.any()).nullable(),
    logo: z.string(),
    name: z.string(),
    publisher: z.string(),
    slug: z.string(),
    title: z.string().optional(),
    type: z.string(),
    url: z.string(),
    variant: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      __template: "template",
      appData: "appData",
      categories: "categories",
      category: "category",
      description: "description",
      dirName: "dirName",
      email: "email",
      installed: "installed",
      locationOption: "locationOption",
      logo: "logo",
      name: "name",
      publisher: "publisher",
      slug: "slug",
      title: "title",
      type: "type",
      url: "url",
      variant: "variant",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Integration
 */
const SchemaOut$Integration: z.ZodType<
  External$Integration, // output type of this zod object
  z.ZodTypeDef,
  Integration // the object to be transformed
> = z
  .object({
    template: z.string().optional(),
    appData: z.record(z.string(), z.any()).nullable().optional(),
    categories: z.array(z.string()),
    category: z.string().optional(),
    description: z.string(),
    dirName: z.string().optional(),
    email: z.string(),
    installed: z.boolean().optional(),
    locationOption: z.record(z.string(), z.any()).nullable(),
    logo: z.string(),
    name: z.string(),
    publisher: z.string(),
    slug: z.string(),
    title: z.string().optional(),
    type: z.string(),
    url: z.string(),
    variant: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      template: "__template",
      appData: "appData",
      categories: "categories",
      category: "category",
      description: "description",
      dirName: "dirName",
      email: "email",
      installed: "installed",
      locationOption: "locationOption",
      logo: "logo",
      name: "name",
      publisher: "publisher",
      slug: "slug",
      title: "title",
      type: "type",
      url: "url",
      variant: "variant",
    });
  });

export const Schemas$Integration = {
  in: SchemaIn$Integration,
  out: SchemaOut$Integration,
};
