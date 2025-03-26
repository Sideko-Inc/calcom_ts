import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  orgId: number;
  routingFormId: string;
  teamId: number;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  orgId: number;
  routingFormId: string;
  teamId: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    orgId: z.number(),
    routingFormId: z.string(),
    teamId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      routingFormId: "routingFormId",
      teamId: "teamId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    orgId: z.number(),
    routingFormId: z.string(),
    teamId: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      orgId: "orgId",
      routingFormId: "routingFormId",
      teamId: "teamId",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};
