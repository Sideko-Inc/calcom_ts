import { Attendee, External$Attendee, Schemas$Attendee } from "./attendee";
import {
  BookingInputAddressLocation20240813,
  External$BookingInputAddressLocation20240813,
  Schemas$BookingInputAddressLocation20240813,
} from "./booking-input-address-location20240813";
import {
  BookingInputAttendeeAddressLocation20240813,
  External$BookingInputAttendeeAddressLocation20240813,
  Schemas$BookingInputAttendeeAddressLocation20240813,
} from "./booking-input-attendee-address-location20240813";
import {
  BookingInputAttendeeDefinedLocation20240813,
  External$BookingInputAttendeeDefinedLocation20240813,
  Schemas$BookingInputAttendeeDefinedLocation20240813,
} from "./booking-input-attendee-defined-location20240813";
import {
  BookingInputAttendeePhoneLocation20240813,
  External$BookingInputAttendeePhoneLocation20240813,
  Schemas$BookingInputAttendeePhoneLocation20240813,
} from "./booking-input-attendee-phone-location20240813";
import {
  BookingInputIntegrationLocation20240813,
  External$BookingInputIntegrationLocation20240813,
  Schemas$BookingInputIntegrationLocation20240813,
} from "./booking-input-integration-location20240813";
import {
  BookingInputLinkLocation20240813,
  External$BookingInputLinkLocation20240813,
  Schemas$BookingInputLinkLocation20240813,
} from "./booking-input-link-location20240813";
import {
  BookingInputOrganizersDefaultAppLocation20240813,
  External$BookingInputOrganizersDefaultAppLocation20240813,
  Schemas$BookingInputOrganizersDefaultAppLocation20240813,
} from "./booking-input-organizers-default-app-location20240813";
import {
  BookingInputPhoneLocation20240813,
  External$BookingInputPhoneLocation20240813,
  Schemas$BookingInputPhoneLocation20240813,
} from "./booking-input-phone-location20240813";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * CreateBookingInput20240813
 */
export type CreateBookingInput20240813 = {
  attendee: Attendee;
  /**
   * Booking field responses consisting of an object with booking field slug as keys and user response as values.
   */
  bookingFieldsResponses?: Record<string, any> | undefined;
  /**
   * The ID of the event type that is booked.
   */
  eventTypeId: number;
  /**
   * An optional list of guest emails attending the event.
   */
  guests?: string[] | undefined;
  /**
   * If it is an event type that has multiple possible lengths that attendee can pick from, you can pass the desired booking length here.
   *     If not provided then event type default length will be used for the booking.
   */
  lengthInMinutes?: number | undefined;
  /**
   * One of the event type locations. If instead of passing one of the location objects as required by schema you are still passing a string please use an object.
   */
  location?:
    | (
        | BookingInputAddressLocation20240813
        | BookingInputAttendeeAddressLocation20240813
        | BookingInputAttendeeDefinedLocation20240813
        | BookingInputAttendeePhoneLocation20240813
        | BookingInputIntegrationLocation20240813
        | BookingInputLinkLocation20240813
        | BookingInputPhoneLocation20240813
        | BookingInputOrganizersDefaultAppLocation20240813
      )
    | undefined;
  /**
   * Deprecated - use 'location' instead. Meeting URL just for this booking. Displayed in email and calendar event. If not provided then cal video link will be generated.
   */
  meetingUrl?: string | undefined;
  /**
   * You can store any additional data you want here. Metadata must have at most 50 keys, each key up to 40 characters, and string values up to 500 characters.
   */
  metadata?: Record<string, any> | undefined;
  /**
   * The start time of the booking in ISO 8601 format in UTC timezone.
   */
  start: string;
};

/**
 * @internal
 * CreateBookingInput20240813 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateBookingInput20240813 = {
  attendee: External$Attendee;
  bookingFieldsResponses?: Record<string, any> | undefined;
  eventTypeId: number;
  guests?: string[] | undefined;
  lengthInMinutes?: number | undefined;
  location?:
    | (
        | External$BookingInputAddressLocation20240813
        | External$BookingInputAttendeeAddressLocation20240813
        | External$BookingInputAttendeeDefinedLocation20240813
        | External$BookingInputAttendeePhoneLocation20240813
        | External$BookingInputIntegrationLocation20240813
        | External$BookingInputLinkLocation20240813
        | External$BookingInputPhoneLocation20240813
        | External$BookingInputOrganizersDefaultAppLocation20240813
      )
    | undefined;
  meetingUrl?: string | undefined;
  metadata?: Record<string, any> | undefined;
  start: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateBookingInput20240813
 */
const SchemaIn$CreateBookingInput20240813: z.ZodType<
  CreateBookingInput20240813, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    attendee: Schemas$Attendee.in,
    bookingFieldsResponses: z.record(z.string(), z.any()).optional(),
    eventTypeId: z.number(),
    guests: z.array(z.string()).optional(),
    lengthInMinutes: z.number().optional(),
    location: z
      .union([
        Schemas$BookingInputAddressLocation20240813.in,
        Schemas$BookingInputAttendeeAddressLocation20240813.in,
        Schemas$BookingInputAttendeeDefinedLocation20240813.in,
        Schemas$BookingInputAttendeePhoneLocation20240813.in,
        Schemas$BookingInputIntegrationLocation20240813.in,
        Schemas$BookingInputLinkLocation20240813.in,
        Schemas$BookingInputPhoneLocation20240813.in,
        Schemas$BookingInputOrganizersDefaultAppLocation20240813.in,
      ])
      .optional(),
    meetingUrl: z.string().optional(),
    metadata: z.record(z.string(), z.any()).optional(),
    start: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attendee: "attendee",
      bookingFieldsResponses: "bookingFieldsResponses",
      eventTypeId: "eventTypeId",
      guests: "guests",
      lengthInMinutes: "lengthInMinutes",
      location: "location",
      meetingUrl: "meetingUrl",
      metadata: "metadata",
      start: "start",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateBookingInput20240813
 */
const SchemaOut$CreateBookingInput20240813: z.ZodType<
  External$CreateBookingInput20240813, // output type of this zod object
  z.ZodTypeDef,
  CreateBookingInput20240813 // the object to be transformed
> = z
  .object({
    attendee: Schemas$Attendee.out,
    bookingFieldsResponses: z.record(z.string(), z.any()).optional(),
    eventTypeId: z.number(),
    guests: z.array(z.string()).optional(),
    lengthInMinutes: z.number().optional(),
    location: z
      .union([
        Schemas$BookingInputAddressLocation20240813.out,
        Schemas$BookingInputAttendeeAddressLocation20240813.out,
        Schemas$BookingInputAttendeeDefinedLocation20240813.out,
        Schemas$BookingInputAttendeePhoneLocation20240813.out,
        Schemas$BookingInputIntegrationLocation20240813.out,
        Schemas$BookingInputLinkLocation20240813.out,
        Schemas$BookingInputPhoneLocation20240813.out,
        Schemas$BookingInputOrganizersDefaultAppLocation20240813.out,
      ])
      .optional(),
    meetingUrl: z.string().optional(),
    metadata: z.record(z.string(), z.any()).optional(),
    start: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attendee: "attendee",
      bookingFieldsResponses: "bookingFieldsResponses",
      eventTypeId: "eventTypeId",
      guests: "guests",
      lengthInMinutes: "lengthInMinutes",
      location: "location",
      meetingUrl: "meetingUrl",
      metadata: "metadata",
      start: "start",
    });
  });

export const Schemas$CreateBookingInput20240813 = {
  in: SchemaIn$CreateBookingInput20240813,
  out: SchemaOut$CreateBookingInput20240813,
};
