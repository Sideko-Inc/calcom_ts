import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * RoutingFormResponseOutput
 */
export type RoutingFormResponseOutput = {
  createdAt: string;
  formFillerId: string;
  formId: string;
  id: string;
  response: Record<string, any>;
  routedToBookingUid: string;
};

/**
 * @internal
 * RoutingFormResponseOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RoutingFormResponseOutput = {
  createdAt: string;
  formFillerId: string;
  formId: string;
  id: string;
  response: Record<string, any>;
  routedToBookingUid: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RoutingFormResponseOutput
 */
const SchemaIn$RoutingFormResponseOutput: z.ZodType<
  RoutingFormResponseOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    createdAt: z.string(),
    formFillerId: z.string(),
    formId: z.string(),
    id: z.string(),
    response: z.record(z.string(), z.any()),
    routedToBookingUid: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      createdAt: "createdAt",
      formFillerId: "formFillerId",
      formId: "formId",
      id: "id",
      response: "response",
      routedToBookingUid: "routedToBookingUid",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RoutingFormResponseOutput
 */
const SchemaOut$RoutingFormResponseOutput: z.ZodType<
  External$RoutingFormResponseOutput, // output type of this zod object
  z.ZodTypeDef,
  RoutingFormResponseOutput // the object to be transformed
> = z
  .object({
    createdAt: z.string(),
    formFillerId: z.string(),
    formId: z.string(),
    id: z.string(),
    response: z.record(z.string(), z.any()),
    routedToBookingUid: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      createdAt: "createdAt",
      formFillerId: "formFillerId",
      formId: "formId",
      id: "id",
      response: "response",
      routedToBookingUid: "routedToBookingUid",
    });
  });

export const Schemas$RoutingFormResponseOutput = {
  in: SchemaIn$RoutingFormResponseOutput,
  out: SchemaOut$RoutingFormResponseOutput,
};
