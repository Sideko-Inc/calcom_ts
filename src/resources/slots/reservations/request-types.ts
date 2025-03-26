import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  uid: string;
  /**
   * Must be set to 2024-09-04
   */
  calApiVersion: string;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  uid: string;
  "cal-api-version": string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeleteRequest
 */
const SchemaIn$DeleteRequest: z.ZodType<
  DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    uid: z.string(),
    "cal-api-version": z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      uid: "uid",
      "cal-api-version": "calApiVersion",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeleteRequest
 */
const SchemaOut$DeleteRequest: z.ZodType<
  External$DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  DeleteRequest // the object to be transformed
> = z
  .object({
    uid: z.string(),
    calApiVersion: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      uid: "uid",
      calApiVersion: "cal-api-version",
    });
  });

export const Schemas$DeleteRequest = {
  in: SchemaIn$DeleteRequest,
  out: SchemaOut$DeleteRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  uid: string;
  /**
   * Must be set to 2024-09-04
   */
  calApiVersion: string;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  uid: string;
  "cal-api-version": string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    uid: z.string(),
    "cal-api-version": z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      uid: "uid",
      "cal-api-version": "calApiVersion",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    uid: z.string(),
    calApiVersion: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      uid: "uid",
      calApiVersion: "cal-api-version",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * PatchRequest
 */
export type PatchRequest = {
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
  uid: string;
  /**
   * Must be set to 2024-09-04
   */
  calApiVersion: string;
};

/**
 * @internal
 * PatchRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PatchRequest = {
  eventTypeId: number;
  reservationDuration?: number | undefined;
  slotDuration?: number | undefined;
  slotStart: string;
  uid: string;
  "cal-api-version": string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PatchRequest
 */
const SchemaIn$PatchRequest: z.ZodType<
  PatchRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    eventTypeId: z.number(),
    reservationDuration: z.number().optional(),
    slotDuration: z.number().optional(),
    slotStart: z.string(),
    uid: z.string(),
    "cal-api-version": z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      eventTypeId: "eventTypeId",
      reservationDuration: "reservationDuration",
      slotDuration: "slotDuration",
      slotStart: "slotStart",
      uid: "uid",
      "cal-api-version": "calApiVersion",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PatchRequest
 */
const SchemaOut$PatchRequest: z.ZodType<
  External$PatchRequest, // output type of this zod object
  z.ZodTypeDef,
  PatchRequest // the object to be transformed
> = z
  .object({
    eventTypeId: z.number(),
    reservationDuration: z.number().optional(),
    slotDuration: z.number().optional(),
    slotStart: z.string(),
    uid: z.string(),
    calApiVersion: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      eventTypeId: "eventTypeId",
      reservationDuration: "reservationDuration",
      slotDuration: "slotDuration",
      slotStart: "slotStart",
      uid: "uid",
      calApiVersion: "cal-api-version",
    });
  });

export const Schemas$PatchRequest = {
  in: SchemaIn$PatchRequest,
  out: SchemaOut$PatchRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
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
  /**
   * Must be set to 2024-09-04
   */
  calApiVersion: string;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  eventTypeId: number;
  reservationDuration?: number | undefined;
  slotDuration?: number | undefined;
  slotStart: string;
  "cal-api-version": string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    eventTypeId: z.number(),
    reservationDuration: z.number().optional(),
    slotDuration: z.number().optional(),
    slotStart: z.string(),
    "cal-api-version": z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      eventTypeId: "eventTypeId",
      reservationDuration: "reservationDuration",
      slotDuration: "slotDuration",
      slotStart: "slotStart",
      "cal-api-version": "calApiVersion",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
> = z
  .object({
    eventTypeId: z.number(),
    reservationDuration: z.number().optional(),
    slotDuration: z.number().optional(),
    slotStart: z.string(),
    calApiVersion: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      eventTypeId: "eventTypeId",
      reservationDuration: "reservationDuration",
      slotDuration: "slotDuration",
      slotStart: "slotStart",
      calApiVersion: "cal-api-version",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
