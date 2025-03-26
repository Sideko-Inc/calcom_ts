import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * ReserveSlotInput20240904
 */
export type ReserveSlotInput20240904 = {
  /**
   * The ID of the event type for which slot should be reserved.
   */
  eventTypeId: number;
  /**
   * ONLY for authenticated requests with api key, access token or OAuth credentials (ID + secret).
   *
   *       For how many minutes the slot should be reserved - for this long time noone else can book this event type at `start` time. If not provided, defaults to 5 minutes.
   */
  reservationDuration?: number | undefined;
  /**
   * By default slot duration is equal to event type length, but if you want to reserve a slot for an event type that has a variable length you can specify it here as a number in minutes. If you don't have this set explicitly that event type can have one of many lengths you can omit this.
   */
  slotDuration?: number | undefined;
  /**
   * ISO 8601 datestring in UTC timezone representing available slot.
   */
  slotStart: string;
};

/**
 * @internal
 * ReserveSlotInput20240904 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ReserveSlotInput20240904 = {
  eventTypeId: number;
  reservationDuration?: number | undefined;
  slotDuration?: number | undefined;
  slotStart: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ReserveSlotInput20240904
 */
const SchemaIn$ReserveSlotInput20240904: z.ZodType<
  ReserveSlotInput20240904, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    eventTypeId: z.number(),
    reservationDuration: z.number().optional(),
    slotDuration: z.number().optional(),
    slotStart: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      eventTypeId: "eventTypeId",
      reservationDuration: "reservationDuration",
      slotDuration: "slotDuration",
      slotStart: "slotStart",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ReserveSlotInput20240904
 */
const SchemaOut$ReserveSlotInput20240904: z.ZodType<
  External$ReserveSlotInput20240904, // output type of this zod object
  z.ZodTypeDef,
  ReserveSlotInput20240904 // the object to be transformed
> = z
  .object({
    eventTypeId: z.number(),
    reservationDuration: z.number().optional(),
    slotDuration: z.number().optional(),
    slotStart: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      eventTypeId: "eventTypeId",
      reservationDuration: "reservationDuration",
      slotDuration: "slotDuration",
      slotStart: "slotStart",
    });
  });

export const Schemas$ReserveSlotInput20240904 = {
  in: SchemaIn$ReserveSlotInput20240904,
  out: SchemaOut$ReserveSlotInput20240904,
};
