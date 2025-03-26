import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * ReserveSlotOutput20240904
 */
export type ReserveSlotOutput20240904 = {
  /**
   * The ID of the event type for which slot was reserved.
   */
  eventTypeId: number;
  /**
   * For how many minutes the slot is reserved - for this long time noone else can book this event type at `start` time.
   */
  reservationDuration: number;
  /**
   * The unique identifier of the reservation. Use it to update, get or delete the reservation.
   */
  reservationUid: string;
  /**
   * ISO 8601 datestring in UTC timezone representing time until which the slot is reserved.
   */
  reservationUntil: string;
  /**
   * By default slot duration is equal to event type length, but if you want to reserve a slot for an event type that has a variable length you can specify it here. If you don't have this set explicitly that event type can have one of many lengths you can omit this.
   */
  slotDuration: number;
  /**
   * ISO 8601 datestring in UTC timezone representing slot end.
   */
  slotEnd: string;
  /**
   * ISO 8601 datestring in UTC timezone representing available slot.
   */
  slotStart: string;
};

/**
 * @internal
 * ReserveSlotOutput20240904 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ReserveSlotOutput20240904 = {
  eventTypeId: number;
  reservationDuration: number;
  reservationUid: string;
  reservationUntil: string;
  slotDuration: number;
  slotEnd: string;
  slotStart: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ReserveSlotOutput20240904
 */
const SchemaIn$ReserveSlotOutput20240904: z.ZodType<
  ReserveSlotOutput20240904, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    eventTypeId: z.number(),
    reservationDuration: z.number(),
    reservationUid: z.string(),
    reservationUntil: z.string(),
    slotDuration: z.number(),
    slotEnd: z.string(),
    slotStart: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      eventTypeId: "eventTypeId",
      reservationDuration: "reservationDuration",
      reservationUid: "reservationUid",
      reservationUntil: "reservationUntil",
      slotDuration: "slotDuration",
      slotEnd: "slotEnd",
      slotStart: "slotStart",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ReserveSlotOutput20240904
 */
const SchemaOut$ReserveSlotOutput20240904: z.ZodType<
  External$ReserveSlotOutput20240904, // output type of this zod object
  z.ZodTypeDef,
  ReserveSlotOutput20240904 // the object to be transformed
> = z
  .object({
    eventTypeId: z.number(),
    reservationDuration: z.number(),
    reservationUid: z.string(),
    reservationUntil: z.string(),
    slotDuration: z.number(),
    slotEnd: z.string(),
    slotStart: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      eventTypeId: "eventTypeId",
      reservationDuration: "reservationDuration",
      reservationUid: "reservationUid",
      reservationUntil: "reservationUntil",
      slotDuration: "slotDuration",
      slotEnd: "slotEnd",
      slotStart: "slotStart",
    });
  });

export const Schemas$ReserveSlotOutput20240904 = {
  in: SchemaIn$ReserveSlotOutput20240904,
  out: SchemaOut$ReserveSlotOutput20240904,
};
