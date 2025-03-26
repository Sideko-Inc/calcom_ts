import {
  AddressFieldInput20240614,
  External$AddressFieldInput20240614,
  Schemas$AddressFieldInput20240614,
} from "./address-field-input20240614";
import {
  BaseBookingLimitsCount20240614,
  External$BaseBookingLimitsCount20240614,
  Schemas$BaseBookingLimitsCount20240614,
} from "./base-booking-limits-count20240614";
import {
  BaseBookingLimitsDuration20240614,
  External$BaseBookingLimitsDuration20240614,
  Schemas$BaseBookingLimitsDuration20240614,
} from "./base-booking-limits-duration20240614";
import {
  BaseConfirmationPolicy20240614,
  External$BaseConfirmationPolicy20240614,
  Schemas$BaseConfirmationPolicy20240614,
} from "./base-confirmation-policy20240614";
import {
  BookerLayouts20240614,
  External$BookerLayouts20240614,
  Schemas$BookerLayouts20240614,
} from "./booker-layouts20240614";
import {
  BooleanFieldInput20240614,
  External$BooleanFieldInput20240614,
  Schemas$BooleanFieldInput20240614,
} from "./boolean-field-input20240614";
import {
  BusinessDaysWindow20240614,
  External$BusinessDaysWindow20240614,
  Schemas$BusinessDaysWindow20240614,
} from "./business-days-window20240614";
import {
  CalendarDaysWindow20240614,
  External$CalendarDaysWindow20240614,
  Schemas$CalendarDaysWindow20240614,
} from "./calendar-days-window20240614";
import {
  CheckboxGroupFieldInput20240614,
  External$CheckboxGroupFieldInput20240614,
  Schemas$CheckboxGroupFieldInput20240614,
} from "./checkbox-group-field-input20240614";
import {
  DestinationCalendar20240614,
  External$DestinationCalendar20240614,
  Schemas$DestinationCalendar20240614,
} from "./destination-calendar20240614";
import {
  Disabled20240614,
  External$Disabled20240614,
  Schemas$Disabled20240614,
} from "./disabled20240614";
import {
  EmailDefaultFieldInput20240614,
  External$EmailDefaultFieldInput20240614,
  Schemas$EmailDefaultFieldInput20240614,
} from "./email-default-field-input20240614";
import {
  EventTypeColor20240614,
  External$EventTypeColor20240614,
  Schemas$EventTypeColor20240614,
} from "./event-type-color20240614";
import {
  External$GuestsDefaultFieldInput20240614,
  GuestsDefaultFieldInput20240614,
  Schemas$GuestsDefaultFieldInput20240614,
} from "./guests-default-field-input20240614";
import {
  External$InputAddressLocation20240614,
  InputAddressLocation20240614,
  Schemas$InputAddressLocation20240614,
} from "./input-address-location20240614";
import {
  External$InputAttendeeAddressLocation20240614,
  InputAttendeeAddressLocation20240614,
  Schemas$InputAttendeeAddressLocation20240614,
} from "./input-attendee-address-location20240614";
import {
  External$InputAttendeeDefinedLocation20240614,
  InputAttendeeDefinedLocation20240614,
  Schemas$InputAttendeeDefinedLocation20240614,
} from "./input-attendee-defined-location20240614";
import {
  External$InputAttendeePhoneLocation20240614,
  InputAttendeePhoneLocation20240614,
  Schemas$InputAttendeePhoneLocation20240614,
} from "./input-attendee-phone-location20240614";
import {
  External$InputIntegrationLocation20240614,
  InputIntegrationLocation20240614,
  Schemas$InputIntegrationLocation20240614,
} from "./input-integration-location20240614";
import {
  External$InputLinkLocation20240614,
  InputLinkLocation20240614,
  Schemas$InputLinkLocation20240614,
} from "./input-link-location20240614";
import {
  External$InputPhoneLocation20240614,
  InputPhoneLocation20240614,
  Schemas$InputPhoneLocation20240614,
} from "./input-phone-location20240614";
import {
  External$MultiEmailFieldInput20240614,
  MultiEmailFieldInput20240614,
  Schemas$MultiEmailFieldInput20240614,
} from "./multi-email-field-input20240614";
import {
  External$MultiSelectFieldInput20240614,
  MultiSelectFieldInput20240614,
  Schemas$MultiSelectFieldInput20240614,
} from "./multi-select-field-input20240614";
import {
  External$NameDefaultFieldInput20240614,
  NameDefaultFieldInput20240614,
  Schemas$NameDefaultFieldInput20240614,
} from "./name-default-field-input20240614";
import {
  External$NotesDefaultFieldInput20240614,
  NotesDefaultFieldInput20240614,
  Schemas$NotesDefaultFieldInput20240614,
} from "./notes-default-field-input20240614";
import {
  External$NumberFieldInput20240614,
  NumberFieldInput20240614,
  Schemas$NumberFieldInput20240614,
} from "./number-field-input20240614";
import {
  External$PhoneFieldInput20240614,
  PhoneFieldInput20240614,
  Schemas$PhoneFieldInput20240614,
} from "./phone-field-input20240614";
import {
  External$RadioGroupFieldInput20240614,
  RadioGroupFieldInput20240614,
  Schemas$RadioGroupFieldInput20240614,
} from "./radio-group-field-input20240614";
import {
  External$RangeWindow20240614,
  RangeWindow20240614,
  Schemas$RangeWindow20240614,
} from "./range-window20240614";
import {
  External$Recurrence20240614,
  Recurrence20240614,
  Schemas$Recurrence20240614,
} from "./recurrence20240614";
import {
  External$RescheduleReasonDefaultFieldInput20240614,
  RescheduleReasonDefaultFieldInput20240614,
  Schemas$RescheduleReasonDefaultFieldInput20240614,
} from "./reschedule-reason-default-field-input20240614";
import {
  External$Seats20240614,
  Schemas$Seats20240614,
  Seats20240614,
} from "./seats20240614";
import {
  External$SelectFieldInput20240614,
  Schemas$SelectFieldInput20240614,
  SelectFieldInput20240614,
} from "./select-field-input20240614";
import {
  External$TextAreaFieldInput20240614,
  Schemas$TextAreaFieldInput20240614,
  TextAreaFieldInput20240614,
} from "./text-area-field-input20240614";
import {
  External$TextFieldInput20240614,
  Schemas$TextFieldInput20240614,
  TextFieldInput20240614,
} from "./text-field-input20240614";
import {
  External$TitleDefaultFieldInput20240614,
  Schemas$TitleDefaultFieldInput20240614,
  TitleDefaultFieldInput20240614,
} from "./title-default-field-input20240614";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * UpdateEventTypeInput20240614
 */
export type UpdateEventTypeInput20240614 = {
  /**
   * Time spaces that can be appended after an event to give more time after it.
   */
  afterEventBuffer?: number | undefined;
  /**
   * Time spaces that can be prepended before an event to give more time before it.
   */
  beforeEventBuffer?: number | undefined;
  bookerLayouts?: BookerLayouts20240614 | undefined;
  /**
   * Custom fields that can be added to the booking form when the event is booked by someone. By default booking form has name and email field.
   */
  bookingFields?:
    | (
        | NameDefaultFieldInput20240614
        | EmailDefaultFieldInput20240614
        | TitleDefaultFieldInput20240614
        | NotesDefaultFieldInput20240614
        | GuestsDefaultFieldInput20240614
        | RescheduleReasonDefaultFieldInput20240614
        | PhoneFieldInput20240614
        | AddressFieldInput20240614
        | TextFieldInput20240614
        | NumberFieldInput20240614
        | TextAreaFieldInput20240614
        | SelectFieldInput20240614
        | MultiSelectFieldInput20240614
        | MultiEmailFieldInput20240614
        | CheckboxGroupFieldInput20240614
        | RadioGroupFieldInput20240614
        | BooleanFieldInput20240614
      )[]
    | undefined;
  /**
   * Limit how many times this event can be booked
   */
  bookingLimitsCount?:
    | (BaseBookingLimitsCount20240614 | Disabled20240614)
    | undefined;
  /**
   * Limit total amount of time that this event can be booked
   */
  bookingLimitsDuration?:
    | (BaseBookingLimitsDuration20240614 | Disabled20240614)
    | undefined;
  /**
   * Limit how far in the future this event can be booked
   */
  bookingWindow?:
    | (
        | BusinessDaysWindow20240614
        | CalendarDaysWindow20240614
        | RangeWindow20240614
        | Disabled20240614
      )
    | undefined;
  color?: EventTypeColor20240614 | undefined;
  /**
   * Specify how the booking needs to be manually confirmed before it is pushed to the integrations and a confirmation mail is sent.
   */
  confirmationPolicy?:
    | (BaseConfirmationPolicy20240614 | Disabled20240614)
    | undefined;
  /**
   * Customizable event name with valid variables:
   *       {Event type title}, {Organiser}, {Scheduler}, {Location}, {Organiser first name},
   *       {Scheduler first name}, {Scheduler last name}, {Event duration}, {LOCATION},
   *       {HOST/ATTENDEE}, {HOST}, {ATTENDEE}, {USER}
   */
  customName?: string | undefined;
  description?: string | undefined;
  destinationCalendar?: DestinationCalendar20240614 | undefined;
  /**
   * If true, person booking this event can't add guests via their emails.
   */
  disableGuests?: boolean | undefined;
  hideCalendarEventDetails?: boolean | undefined;
  hideCalendarNotes?: boolean | undefined;
  lengthInMinutes?: number | undefined;
  /**
   * If you want that user can choose between different lengths of the event you can specify them here. Must include the provided `lengthInMinutes`.
   */
  lengthInMinutesOptions?: string[] | undefined;
  /**
   * Locations where the event will take place. If not provided, cal video link will be used as the location.
   */
  locations?:
    | (
        | InputAddressLocation20240614
        | InputLinkLocation20240614
        | InputIntegrationLocation20240614
        | InputPhoneLocation20240614
        | InputAttendeeAddressLocation20240614
        | InputAttendeePhoneLocation20240614
        | InputAttendeeDefinedLocation20240614
      )[]
    | undefined;
  lockTimeZoneToggleOnBookingPage?: boolean | undefined;
  /**
   * Minimum number of minutes before the event that a booking can be made.
   */
  minimumBookingNotice?: number | undefined;
  /**
   * Offset timeslots shown to bookers by a specified number of minutes
   */
  offsetStart?: number | undefined;
  /**
   * This will limit your availability for this event type to one slot per day, scheduled at the earliest available time.
   */
  onlyShowFirstAvailableSlot?: boolean | undefined;
  /**
   * Create a recurring event type.
   */
  recurrence?: (Recurrence20240614 | Disabled20240614) | undefined;
  requiresBookerEmailVerification?: boolean | undefined;
  /**
   * If you want that this event has different schedule than user's default one you can specify it here.
   */
  scheduleId?: number | undefined;
  /**
   * Create an event type with multiple seats.
   */
  seats?: (Seats20240614 | Disabled20240614) | undefined;
  /**
   * Number representing length of each slot when event is booked. By default it equal length of the event type.
   *       If event length is 60 minutes then we would have slots 9AM, 10AM, 11AM etc. but if it was changed to 30 minutes then
   *       we would have slots 9AM, 9:30AM, 10AM, 10:30AM etc. as the available times to book the 60 minute event.
   */
  slotInterval?: number | undefined;
  slug?: string | undefined;
  /**
   * A valid URL where the booker will redirect to, once the booking is completed successfully
   */
  successRedirectUrl?: string | undefined;
  title?: string | undefined;
  useDestinationCalendarEmail?: boolean | undefined;
};

/**
 * @internal
 * UpdateEventTypeInput20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateEventTypeInput20240614 = {
  afterEventBuffer?: number | undefined;
  beforeEventBuffer?: number | undefined;
  bookerLayouts?: External$BookerLayouts20240614 | undefined;
  bookingFields?:
    | (
        | External$NameDefaultFieldInput20240614
        | External$EmailDefaultFieldInput20240614
        | External$TitleDefaultFieldInput20240614
        | External$NotesDefaultFieldInput20240614
        | External$GuestsDefaultFieldInput20240614
        | External$RescheduleReasonDefaultFieldInput20240614
        | External$PhoneFieldInput20240614
        | External$AddressFieldInput20240614
        | External$TextFieldInput20240614
        | External$NumberFieldInput20240614
        | External$TextAreaFieldInput20240614
        | External$SelectFieldInput20240614
        | External$MultiSelectFieldInput20240614
        | External$MultiEmailFieldInput20240614
        | External$CheckboxGroupFieldInput20240614
        | External$RadioGroupFieldInput20240614
        | External$BooleanFieldInput20240614
      )[]
    | undefined;
  bookingLimitsCount?:
    | (External$BaseBookingLimitsCount20240614 | External$Disabled20240614)
    | undefined;
  bookingLimitsDuration?:
    | (External$BaseBookingLimitsDuration20240614 | External$Disabled20240614)
    | undefined;
  bookingWindow?:
    | (
        | External$BusinessDaysWindow20240614
        | External$CalendarDaysWindow20240614
        | External$RangeWindow20240614
        | External$Disabled20240614
      )
    | undefined;
  color?: External$EventTypeColor20240614 | undefined;
  confirmationPolicy?:
    | (External$BaseConfirmationPolicy20240614 | External$Disabled20240614)
    | undefined;
  customName?: string | undefined;
  description?: string | undefined;
  destinationCalendar?: External$DestinationCalendar20240614 | undefined;
  disableGuests?: boolean | undefined;
  hideCalendarEventDetails?: boolean | undefined;
  hideCalendarNotes?: boolean | undefined;
  lengthInMinutes?: number | undefined;
  lengthInMinutesOptions?: string[] | undefined;
  locations?:
    | (
        | External$InputAddressLocation20240614
        | External$InputLinkLocation20240614
        | External$InputIntegrationLocation20240614
        | External$InputPhoneLocation20240614
        | External$InputAttendeeAddressLocation20240614
        | External$InputAttendeePhoneLocation20240614
        | External$InputAttendeeDefinedLocation20240614
      )[]
    | undefined;
  lockTimeZoneToggleOnBookingPage?: boolean | undefined;
  minimumBookingNotice?: number | undefined;
  offsetStart?: number | undefined;
  onlyShowFirstAvailableSlot?: boolean | undefined;
  recurrence?:
    | (External$Recurrence20240614 | External$Disabled20240614)
    | undefined;
  requiresBookerEmailVerification?: boolean | undefined;
  scheduleId?: number | undefined;
  seats?: (External$Seats20240614 | External$Disabled20240614) | undefined;
  slotInterval?: number | undefined;
  slug?: string | undefined;
  successRedirectUrl?: string | undefined;
  title?: string | undefined;
  useDestinationCalendarEmail?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateEventTypeInput20240614
 */
const SchemaIn$UpdateEventTypeInput20240614: z.ZodType<
  UpdateEventTypeInput20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    afterEventBuffer: z.number().optional(),
    beforeEventBuffer: z.number().optional(),
    bookerLayouts: Schemas$BookerLayouts20240614.in.optional(),
    bookingFields: z
      .array(
        z.union([
          Schemas$NameDefaultFieldInput20240614.in,
          Schemas$EmailDefaultFieldInput20240614.in,
          Schemas$TitleDefaultFieldInput20240614.in,
          Schemas$NotesDefaultFieldInput20240614.in,
          Schemas$GuestsDefaultFieldInput20240614.in,
          Schemas$RescheduleReasonDefaultFieldInput20240614.in,
          Schemas$PhoneFieldInput20240614.in,
          Schemas$AddressFieldInput20240614.in,
          Schemas$TextFieldInput20240614.in,
          Schemas$NumberFieldInput20240614.in,
          Schemas$TextAreaFieldInput20240614.in,
          Schemas$SelectFieldInput20240614.in,
          Schemas$MultiSelectFieldInput20240614.in,
          Schemas$MultiEmailFieldInput20240614.in,
          Schemas$CheckboxGroupFieldInput20240614.in,
          Schemas$RadioGroupFieldInput20240614.in,
          Schemas$BooleanFieldInput20240614.in,
        ]),
      )
      .optional(),
    bookingLimitsCount: z
      .union([
        Schemas$BaseBookingLimitsCount20240614.in,
        Schemas$Disabled20240614.in,
      ])
      .optional(),
    bookingLimitsDuration: z
      .union([
        Schemas$BaseBookingLimitsDuration20240614.in,
        Schemas$Disabled20240614.in,
      ])
      .optional(),
    bookingWindow: z
      .union([
        Schemas$BusinessDaysWindow20240614.in,
        Schemas$CalendarDaysWindow20240614.in,
        Schemas$RangeWindow20240614.in,
        Schemas$Disabled20240614.in,
      ])
      .optional(),
    color: Schemas$EventTypeColor20240614.in.optional(),
    confirmationPolicy: z
      .union([
        Schemas$BaseConfirmationPolicy20240614.in,
        Schemas$Disabled20240614.in,
      ])
      .optional(),
    customName: z.string().optional(),
    description: z.string().optional(),
    destinationCalendar: Schemas$DestinationCalendar20240614.in.optional(),
    disableGuests: z.boolean().optional(),
    hideCalendarEventDetails: z.boolean().optional(),
    hideCalendarNotes: z.boolean().optional(),
    lengthInMinutes: z.number().optional(),
    lengthInMinutesOptions: z.array(z.string()).optional(),
    locations: z
      .array(
        z.union([
          Schemas$InputAddressLocation20240614.in,
          Schemas$InputLinkLocation20240614.in,
          Schemas$InputIntegrationLocation20240614.in,
          Schemas$InputPhoneLocation20240614.in,
          Schemas$InputAttendeeAddressLocation20240614.in,
          Schemas$InputAttendeePhoneLocation20240614.in,
          Schemas$InputAttendeeDefinedLocation20240614.in,
        ]),
      )
      .optional(),
    lockTimeZoneToggleOnBookingPage: z.boolean().optional(),
    minimumBookingNotice: z.number().optional(),
    offsetStart: z.number().optional(),
    onlyShowFirstAvailableSlot: z.boolean().optional(),
    recurrence: z
      .union([Schemas$Recurrence20240614.in, Schemas$Disabled20240614.in])
      .optional(),
    requiresBookerEmailVerification: z.boolean().optional(),
    scheduleId: z.number().optional(),
    seats: z
      .union([Schemas$Seats20240614.in, Schemas$Disabled20240614.in])
      .optional(),
    slotInterval: z.number().optional(),
    slug: z.string().optional(),
    successRedirectUrl: z.string().optional(),
    title: z.string().optional(),
    useDestinationCalendarEmail: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      afterEventBuffer: "afterEventBuffer",
      beforeEventBuffer: "beforeEventBuffer",
      bookerLayouts: "bookerLayouts",
      bookingFields: "bookingFields",
      bookingLimitsCount: "bookingLimitsCount",
      bookingLimitsDuration: "bookingLimitsDuration",
      bookingWindow: "bookingWindow",
      color: "color",
      confirmationPolicy: "confirmationPolicy",
      customName: "customName",
      description: "description",
      destinationCalendar: "destinationCalendar",
      disableGuests: "disableGuests",
      hideCalendarEventDetails: "hideCalendarEventDetails",
      hideCalendarNotes: "hideCalendarNotes",
      lengthInMinutes: "lengthInMinutes",
      lengthInMinutesOptions: "lengthInMinutesOptions",
      locations: "locations",
      lockTimeZoneToggleOnBookingPage: "lockTimeZoneToggleOnBookingPage",
      minimumBookingNotice: "minimumBookingNotice",
      offsetStart: "offsetStart",
      onlyShowFirstAvailableSlot: "onlyShowFirstAvailableSlot",
      recurrence: "recurrence",
      requiresBookerEmailVerification: "requiresBookerEmailVerification",
      scheduleId: "scheduleId",
      seats: "seats",
      slotInterval: "slotInterval",
      slug: "slug",
      successRedirectUrl: "successRedirectUrl",
      title: "title",
      useDestinationCalendarEmail: "useDestinationCalendarEmail",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateEventTypeInput20240614
 */
const SchemaOut$UpdateEventTypeInput20240614: z.ZodType<
  External$UpdateEventTypeInput20240614, // output type of this zod object
  z.ZodTypeDef,
  UpdateEventTypeInput20240614 // the object to be transformed
> = z
  .object({
    afterEventBuffer: z.number().optional(),
    beforeEventBuffer: z.number().optional(),
    bookerLayouts: Schemas$BookerLayouts20240614.out.optional(),
    bookingFields: z
      .array(
        z.union([
          Schemas$NameDefaultFieldInput20240614.out,
          Schemas$EmailDefaultFieldInput20240614.out,
          Schemas$TitleDefaultFieldInput20240614.out,
          Schemas$NotesDefaultFieldInput20240614.out,
          Schemas$GuestsDefaultFieldInput20240614.out,
          Schemas$RescheduleReasonDefaultFieldInput20240614.out,
          Schemas$PhoneFieldInput20240614.out,
          Schemas$AddressFieldInput20240614.out,
          Schemas$TextFieldInput20240614.out,
          Schemas$NumberFieldInput20240614.out,
          Schemas$TextAreaFieldInput20240614.out,
          Schemas$SelectFieldInput20240614.out,
          Schemas$MultiSelectFieldInput20240614.out,
          Schemas$MultiEmailFieldInput20240614.out,
          Schemas$CheckboxGroupFieldInput20240614.out,
          Schemas$RadioGroupFieldInput20240614.out,
          Schemas$BooleanFieldInput20240614.out,
        ]),
      )
      .optional(),
    bookingLimitsCount: z
      .union([
        Schemas$BaseBookingLimitsCount20240614.out,
        Schemas$Disabled20240614.out,
      ])
      .optional(),
    bookingLimitsDuration: z
      .union([
        Schemas$BaseBookingLimitsDuration20240614.out,
        Schemas$Disabled20240614.out,
      ])
      .optional(),
    bookingWindow: z
      .union([
        Schemas$BusinessDaysWindow20240614.out,
        Schemas$CalendarDaysWindow20240614.out,
        Schemas$RangeWindow20240614.out,
        Schemas$Disabled20240614.out,
      ])
      .optional(),
    color: Schemas$EventTypeColor20240614.out.optional(),
    confirmationPolicy: z
      .union([
        Schemas$BaseConfirmationPolicy20240614.out,
        Schemas$Disabled20240614.out,
      ])
      .optional(),
    customName: z.string().optional(),
    description: z.string().optional(),
    destinationCalendar: Schemas$DestinationCalendar20240614.out.optional(),
    disableGuests: z.boolean().optional(),
    hideCalendarEventDetails: z.boolean().optional(),
    hideCalendarNotes: z.boolean().optional(),
    lengthInMinutes: z.number().optional(),
    lengthInMinutesOptions: z.array(z.string()).optional(),
    locations: z
      .array(
        z.union([
          Schemas$InputAddressLocation20240614.out,
          Schemas$InputLinkLocation20240614.out,
          Schemas$InputIntegrationLocation20240614.out,
          Schemas$InputPhoneLocation20240614.out,
          Schemas$InputAttendeeAddressLocation20240614.out,
          Schemas$InputAttendeePhoneLocation20240614.out,
          Schemas$InputAttendeeDefinedLocation20240614.out,
        ]),
      )
      .optional(),
    lockTimeZoneToggleOnBookingPage: z.boolean().optional(),
    minimumBookingNotice: z.number().optional(),
    offsetStart: z.number().optional(),
    onlyShowFirstAvailableSlot: z.boolean().optional(),
    recurrence: z
      .union([Schemas$Recurrence20240614.out, Schemas$Disabled20240614.out])
      .optional(),
    requiresBookerEmailVerification: z.boolean().optional(),
    scheduleId: z.number().optional(),
    seats: z
      .union([Schemas$Seats20240614.out, Schemas$Disabled20240614.out])
      .optional(),
    slotInterval: z.number().optional(),
    slug: z.string().optional(),
    successRedirectUrl: z.string().optional(),
    title: z.string().optional(),
    useDestinationCalendarEmail: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      afterEventBuffer: "afterEventBuffer",
      beforeEventBuffer: "beforeEventBuffer",
      bookerLayouts: "bookerLayouts",
      bookingFields: "bookingFields",
      bookingLimitsCount: "bookingLimitsCount",
      bookingLimitsDuration: "bookingLimitsDuration",
      bookingWindow: "bookingWindow",
      color: "color",
      confirmationPolicy: "confirmationPolicy",
      customName: "customName",
      description: "description",
      destinationCalendar: "destinationCalendar",
      disableGuests: "disableGuests",
      hideCalendarEventDetails: "hideCalendarEventDetails",
      hideCalendarNotes: "hideCalendarNotes",
      lengthInMinutes: "lengthInMinutes",
      lengthInMinutesOptions: "lengthInMinutesOptions",
      locations: "locations",
      lockTimeZoneToggleOnBookingPage: "lockTimeZoneToggleOnBookingPage",
      minimumBookingNotice: "minimumBookingNotice",
      offsetStart: "offsetStart",
      onlyShowFirstAvailableSlot: "onlyShowFirstAvailableSlot",
      recurrence: "recurrence",
      requiresBookerEmailVerification: "requiresBookerEmailVerification",
      scheduleId: "scheduleId",
      seats: "seats",
      slotInterval: "slotInterval",
      slug: "slug",
      successRedirectUrl: "successRedirectUrl",
      title: "title",
      useDestinationCalendarEmail: "useDestinationCalendarEmail",
    });
  });

export const Schemas$UpdateEventTypeInput20240614 = {
  in: SchemaIn$UpdateEventTypeInput20240614,
  out: SchemaOut$UpdateEventTypeInput20240614,
};
