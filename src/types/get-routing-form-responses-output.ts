import {
  External$RoutingFormResponseOutput,
  RoutingFormResponseOutput,
  Schemas$RoutingFormResponseOutput,
} from "./routing-form-response-output";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetRoutingFormResponsesOutput
 */
export type GetRoutingFormResponsesOutput = {
  data: RoutingFormResponseOutput[];
  status: "error" | "success";
};

/**
 * @internal
 * GetRoutingFormResponsesOutput without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRoutingFormResponsesOutput = {
  data: External$RoutingFormResponseOutput[];
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRoutingFormResponsesOutput
 */
const SchemaIn$GetRoutingFormResponsesOutput: z.ZodType<
  GetRoutingFormResponsesOutput, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$RoutingFormResponseOutput.in),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRoutingFormResponsesOutput
 */
const SchemaOut$GetRoutingFormResponsesOutput: z.ZodType<
  External$GetRoutingFormResponsesOutput, // output type of this zod object
  z.ZodTypeDef,
  GetRoutingFormResponsesOutput // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$RoutingFormResponseOutput.out),
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$GetRoutingFormResponsesOutput = {
  in: SchemaIn$GetRoutingFormResponsesOutput,
  out: SchemaOut$GetRoutingFormResponsesOutput,
};
