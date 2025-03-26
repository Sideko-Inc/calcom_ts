import {
  External$NoticeThreshold20240614,
  NoticeThreshold20240614,
  Schemas$NoticeThreshold20240614,
} from "./notice-threshold20240614";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * BaseConfirmationPolicy20240614
 */
export type BaseConfirmationPolicy20240614 = {
  /**
   * Unconfirmed bookings still block calendar slots.
   */
  blockUnconfirmedBookingsInBooker: boolean;
  noticeThreshold?: NoticeThreshold20240614 | undefined;
  /**
   * The policy that determines when confirmation is required
   */
  type: "always" | "time";
};

/**
 * @internal
 * BaseConfirmationPolicy20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BaseConfirmationPolicy20240614 = {
  blockUnconfirmedBookingsInBooker: boolean;
  noticeThreshold?: External$NoticeThreshold20240614 | undefined;
  type: "always" | "time";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BaseConfirmationPolicy20240614
 */
const SchemaIn$BaseConfirmationPolicy20240614: z.ZodType<
  BaseConfirmationPolicy20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    blockUnconfirmedBookingsInBooker: z.boolean(),
    noticeThreshold: Schemas$NoticeThreshold20240614.in.optional(),
    type: z.enum(["always", "time"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      blockUnconfirmedBookingsInBooker: "blockUnconfirmedBookingsInBooker",
      noticeThreshold: "noticeThreshold",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BaseConfirmationPolicy20240614
 */
const SchemaOut$BaseConfirmationPolicy20240614: z.ZodType<
  External$BaseConfirmationPolicy20240614, // output type of this zod object
  z.ZodTypeDef,
  BaseConfirmationPolicy20240614 // the object to be transformed
> = z
  .object({
    blockUnconfirmedBookingsInBooker: z.boolean(),
    noticeThreshold: Schemas$NoticeThreshold20240614.out.optional(),
    type: z.enum(["always", "time"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      blockUnconfirmedBookingsInBooker: "blockUnconfirmedBookingsInBooker",
      noticeThreshold: "noticeThreshold",
      type: "type",
    });
  });

export const Schemas$BaseConfirmationPolicy20240614 = {
  in: SchemaIn$BaseConfirmationPolicy20240614,
  out: SchemaOut$BaseConfirmationPolicy20240614,
};
