import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  bookingUid: string;
  /**
   * Must be set to 2024-08-13
   */
  calApiVersion: string;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  bookingUid: string;
  "cal-api-version": string;
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
    bookingUid: z.string(),
    "cal-api-version": z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bookingUid: "bookingUid",
      "cal-api-version": "calApiVersion",
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
    bookingUid: z.string(),
    calApiVersion: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bookingUid: "bookingUid",
      calApiVersion: "cal-api-version",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};
