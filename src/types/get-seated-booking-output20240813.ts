import {
  BookingHost,
  External$BookingHost,
  Schemas$BookingHost,
} from "./booking-host";
import { EventType, External$EventType, Schemas$EventType } from "./event-type";
import {
  External$SeatedAttendee,
  Schemas$SeatedAttendee,
  SeatedAttendee,
} from "./seated-attendee";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetSeatedBookingOutput20240813
 */
export type GetSeatedBookingOutput20240813 = {
  absentHost: boolean;
  attendees: SeatedAttendee[];
  cancellationReason?: string | undefined;
  cancelledByEmail?: string | undefined;
  createdAt: string;
  description: string;
  duration: number;
  end: string;
  eventType: EventType;
  /**
   * Deprecated - rely on 'eventType' object containing the id instead.
   */
  eventTypeId: number;
  hosts: BookingHost[];
  id: number;
  location: string;
  /**
   * Deprecated - rely on 'location' field instead.
   */
  meetingUrl?: string | undefined;
  metadata?: Record<string, any> | undefined;
  rating?: number | undefined;
  rescheduledByEmail?: string | undefined;
  rescheduledFromUid?: string | undefined;
  reschedulingReason?: string | undefined;
  start: string;
  status: "accepted" | "cancelled" | "pending" | "rejected";
  title: string;
  uid: string;
  updatedAt: string;
};

/**
 * @internal
 * GetSeatedBookingOutput20240813 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetSeatedBookingOutput20240813 = {
  absentHost: boolean;
  attendees: External$SeatedAttendee[];
  cancellationReason?: string | undefined;
  cancelledByEmail?: string | undefined;
  createdAt: string;
  description: string;
  duration: number;
  end: string;
  eventType: External$EventType;
  eventTypeId: number;
  hosts: External$BookingHost[];
  id: number;
  location: string;
  meetingUrl?: string | undefined;
  metadata?: Record<string, any> | undefined;
  rating?: number | undefined;
  rescheduledByEmail?: string | undefined;
  rescheduledFromUid?: string | undefined;
  reschedulingReason?: string | undefined;
  start: string;
  status: "accepted" | "cancelled" | "pending" | "rejected";
  title: string;
  uid: string;
  updatedAt: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetSeatedBookingOutput20240813
 */
const SchemaIn$GetSeatedBookingOutput20240813: z.ZodType<
  GetSeatedBookingOutput20240813, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    absentHost: z.boolean(),
    attendees: z.array(Schemas$SeatedAttendee.in),
    cancellationReason: z.string().optional(),
    cancelledByEmail: z.string().optional(),
    createdAt: z.string(),
    description: z.string(),
    duration: z.number(),
    end: z.string(),
    eventType: Schemas$EventType.in,
    eventTypeId: z.number(),
    hosts: z.array(Schemas$BookingHost.in),
    id: z.number(),
    location: z.string(),
    meetingUrl: z.string().optional(),
    metadata: z.record(z.string(), z.any()).optional(),
    rating: z.number().optional(),
    rescheduledByEmail: z.string().optional(),
    rescheduledFromUid: z.string().optional(),
    reschedulingReason: z.string().optional(),
    start: z.string(),
    status: z.enum(["accepted", "cancelled", "pending", "rejected"]),
    title: z.string(),
    uid: z.string(),
    updatedAt: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      absentHost: "absentHost",
      attendees: "attendees",
      cancellationReason: "cancellationReason",
      cancelledByEmail: "cancelledByEmail",
      createdAt: "createdAt",
      description: "description",
      duration: "duration",
      end: "end",
      eventType: "eventType",
      eventTypeId: "eventTypeId",
      hosts: "hosts",
      id: "id",
      location: "location",
      meetingUrl: "meetingUrl",
      metadata: "metadata",
      rating: "rating",
      rescheduledByEmail: "rescheduledByEmail",
      rescheduledFromUid: "rescheduledFromUid",
      reschedulingReason: "reschedulingReason",
      start: "start",
      status: "status",
      title: "title",
      uid: "uid",
      updatedAt: "updatedAt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetSeatedBookingOutput20240813
 */
const SchemaOut$GetSeatedBookingOutput20240813: z.ZodType<
  External$GetSeatedBookingOutput20240813, // output type of this zod object
  z.ZodTypeDef,
  GetSeatedBookingOutput20240813 // the object to be transformed
> = z
  .object({
    absentHost: z.boolean(),
    attendees: z.array(Schemas$SeatedAttendee.out),
    cancellationReason: z.string().optional(),
    cancelledByEmail: z.string().optional(),
    createdAt: z.string(),
    description: z.string(),
    duration: z.number(),
    end: z.string(),
    eventType: Schemas$EventType.out,
    eventTypeId: z.number(),
    hosts: z.array(Schemas$BookingHost.out),
    id: z.number(),
    location: z.string(),
    meetingUrl: z.string().optional(),
    metadata: z.record(z.string(), z.any()).optional(),
    rating: z.number().optional(),
    rescheduledByEmail: z.string().optional(),
    rescheduledFromUid: z.string().optional(),
    reschedulingReason: z.string().optional(),
    start: z.string(),
    status: z.enum(["accepted", "cancelled", "pending", "rejected"]),
    title: z.string(),
    uid: z.string(),
    updatedAt: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      absentHost: "absentHost",
      attendees: "attendees",
      cancellationReason: "cancellationReason",
      cancelledByEmail: "cancelledByEmail",
      createdAt: "createdAt",
      description: "description",
      duration: "duration",
      end: "end",
      eventType: "eventType",
      eventTypeId: "eventTypeId",
      hosts: "hosts",
      id: "id",
      location: "location",
      meetingUrl: "meetingUrl",
      metadata: "metadata",
      rating: "rating",
      rescheduledByEmail: "rescheduledByEmail",
      rescheduledFromUid: "rescheduledFromUid",
      reschedulingReason: "reschedulingReason",
      start: "start",
      status: "status",
      title: "title",
      uid: "uid",
      updatedAt: "updatedAt",
    });
  });

export const Schemas$GetSeatedBookingOutput20240813 = {
  in: SchemaIn$GetSeatedBookingOutput20240813,
  out: SchemaOut$GetSeatedBookingOutput20240813,
};
