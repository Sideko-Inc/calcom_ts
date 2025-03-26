import {
  AddressFieldOutput20240614,
  External$AddressFieldOutput20240614,
  Schemas$AddressFieldOutput20240614,
} from "./address-field-output20240614";
import {
  BookerLayouts20240614,
  External$BookerLayouts20240614,
  Schemas$BookerLayouts20240614,
} from "./booker-layouts20240614";
import {
  BooleanFieldOutput20240614,
  External$BooleanFieldOutput20240614,
  Schemas$BooleanFieldOutput20240614,
} from "./boolean-field-output20240614";
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
  CheckboxGroupFieldOutput20240614,
  External$CheckboxGroupFieldOutput20240614,
  Schemas$CheckboxGroupFieldOutput20240614,
} from "./checkbox-group-field-output20240614";
import {
  DestinationCalendar20240614,
  External$DestinationCalendar20240614,
  Schemas$DestinationCalendar20240614,
} from "./destination-calendar20240614";
import {
  EmailDefaultFieldOutput20240614,
  External$EmailDefaultFieldOutput20240614,
  Schemas$EmailDefaultFieldOutput20240614,
} from "./email-default-field-output20240614";
import {
  EventTypeColor20240614,
  External$EventTypeColor20240614,
  Schemas$EventTypeColor20240614,
} from "./event-type-color20240614";
import {
  EventTypeTeam,
  External$EventTypeTeam,
  Schemas$EventTypeTeam,
} from "./event-type-team";
import {
  External$GuestsDefaultFieldOutput20240614,
  GuestsDefaultFieldOutput20240614,
  Schemas$GuestsDefaultFieldOutput20240614,
} from "./guests-default-field-output20240614";
import {
  External$LocationDefaultFieldOutput20240614,
  LocationDefaultFieldOutput20240614,
  Schemas$LocationDefaultFieldOutput20240614,
} from "./location-default-field-output20240614";
import {
  External$MultiEmailFieldOutput20240614,
  MultiEmailFieldOutput20240614,
  Schemas$MultiEmailFieldOutput20240614,
} from "./multi-email-field-output20240614";
import {
  External$MultiSelectFieldOutput20240614,
  MultiSelectFieldOutput20240614,
  Schemas$MultiSelectFieldOutput20240614,
} from "./multi-select-field-output20240614";
import {
  External$NameDefaultFieldOutput20240614,
  NameDefaultFieldOutput20240614,
  Schemas$NameDefaultFieldOutput20240614,
} from "./name-default-field-output20240614";
import {
  External$NotesDefaultFieldOutput20240614,
  NotesDefaultFieldOutput20240614,
  Schemas$NotesDefaultFieldOutput20240614,
} from "./notes-default-field-output20240614";
import {
  External$NumberFieldOutput20240614,
  NumberFieldOutput20240614,
  Schemas$NumberFieldOutput20240614,
} from "./number-field-output20240614";
import {
  External$OutputAddressLocation20240614,
  OutputAddressLocation20240614,
  Schemas$OutputAddressLocation20240614,
} from "./output-address-location20240614";
import {
  External$OutputIntegrationLocation20240614,
  OutputIntegrationLocation20240614,
  Schemas$OutputIntegrationLocation20240614,
} from "./output-integration-location20240614";
import {
  External$OutputLinkLocation20240614,
  OutputLinkLocation20240614,
  Schemas$OutputLinkLocation20240614,
} from "./output-link-location20240614";
import {
  External$OutputOrganizersDefaultAppLocation20240614,
  OutputOrganizersDefaultAppLocation20240614,
  Schemas$OutputOrganizersDefaultAppLocation20240614,
} from "./output-organizers-default-app-location20240614";
import {
  External$OutputPhoneLocation20240614,
  OutputPhoneLocation20240614,
  Schemas$OutputPhoneLocation20240614,
} from "./output-phone-location20240614";
import {
  External$OutputUnknownLocation20240614,
  OutputUnknownLocation20240614,
  Schemas$OutputUnknownLocation20240614,
} from "./output-unknown-location20240614";
import {
  External$PhoneFieldOutput20240614,
  PhoneFieldOutput20240614,
  Schemas$PhoneFieldOutput20240614,
} from "./phone-field-output20240614";
import {
  External$RadioGroupFieldOutput20240614,
  RadioGroupFieldOutput20240614,
  Schemas$RadioGroupFieldOutput20240614,
} from "./radio-group-field-output20240614";
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
  External$RescheduleReasonDefaultFieldOutput20240614,
  RescheduleReasonDefaultFieldOutput20240614,
  Schemas$RescheduleReasonDefaultFieldOutput20240614,
} from "./reschedule-reason-default-field-output20240614";
import {
  External$Seats20240614,
  Schemas$Seats20240614,
  Seats20240614,
} from "./seats20240614";
import {
  External$SelectFieldOutput20240614,
  Schemas$SelectFieldOutput20240614,
  SelectFieldOutput20240614,
} from "./select-field-output20240614";
import {
  External$TeamEventTypeResponseHost,
  Schemas$TeamEventTypeResponseHost,
  TeamEventTypeResponseHost,
} from "./team-event-type-response-host";
import {
  External$TextAreaFieldOutput20240614,
  Schemas$TextAreaFieldOutput20240614,
  TextAreaFieldOutput20240614,
} from "./text-area-field-output20240614";
import {
  External$TextFieldOutput20240614,
  Schemas$TextFieldOutput20240614,
  TextFieldOutput20240614,
} from "./text-field-output20240614";
import {
  External$TitleDefaultFieldOutput20240614,
  Schemas$TitleDefaultFieldOutput20240614,
  TitleDefaultFieldOutput20240614,
} from "./title-default-field-output20240614";
import {
  External$UrlFieldOutput20240614,
  Schemas$UrlFieldOutput20240614,
  UrlFieldOutput20240614,
} from "./url-field-output20240614";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * TeamEventTypeOutput20240614
 */
export type TeamEventTypeOutput20240614 = {
  afterEventBuffer?: number | undefined;
  assignAllTeamMembers?: boolean | undefined;
  beforeEventBuffer?: number | undefined;
  bookerLayouts?: BookerLayouts20240614 | undefined;
  bookingFields: (
    | NameDefaultFieldOutput20240614
    | EmailDefaultFieldOutput20240614
    | LocationDefaultFieldOutput20240614
    | RescheduleReasonDefaultFieldOutput20240614
    | TitleDefaultFieldOutput20240614
    | NotesDefaultFieldOutput20240614
    | GuestsDefaultFieldOutput20240614
    | PhoneFieldOutput20240614
    | AddressFieldOutput20240614
    | TextFieldOutput20240614
    | NumberFieldOutput20240614
    | TextAreaFieldOutput20240614
    | SelectFieldOutput20240614
    | MultiSelectFieldOutput20240614
    | MultiEmailFieldOutput20240614
    | CheckboxGroupFieldOutput20240614
    | RadioGroupFieldOutput20240614
    | BooleanFieldOutput20240614
    | UrlFieldOutput20240614
  )[];
  bookingLimitsCount?: Record<string, any> | undefined;
  bookingLimitsDuration?: Record<string, any> | undefined;
  /**
   * Limit how far in the future this event can be booked
   */
  bookingWindow?:
    | (
        | BusinessDaysWindow20240614
        | CalendarDaysWindow20240614
        | RangeWindow20240614
      )[]
    | undefined;
  color?: EventTypeColor20240614 | undefined;
  confirmationPolicy?: Record<string, any> | undefined;
  currency: string;
  customName?: string | undefined;
  description: string;
  destinationCalendar?: DestinationCalendar20240614 | undefined;
  disableGuests: boolean;
  forwardParamsSuccessRedirect: boolean | null;
  hideCalendarEventDetails?: boolean | undefined;
  hideCalendarNotes?: boolean | undefined;
  hosts: TeamEventTypeResponseHost[];
  id: number;
  isInstantEvent: boolean;
  lengthInMinutes: number;
  /**
   * If you want that user can choose between different lengths of the event you can specify them here. Must include the provided `lengthInMinutes`.
   */
  lengthInMinutesOptions?: number[] | undefined;
  locations: (
    | OutputAddressLocation20240614
    | OutputLinkLocation20240614
    | OutputIntegrationLocation20240614
    | OutputPhoneLocation20240614
    | OutputOrganizersDefaultAppLocation20240614
    | OutputUnknownLocation20240614
  )[];
  lockTimeZoneToggleOnBookingPage: boolean;
  metadata: Record<string, any>;
  minimumBookingNotice?: number | undefined;
  offsetStart?: number | undefined;
  onlyShowFirstAvailableSlot?: boolean | undefined;
  ownerId?: number | null | undefined;
  /**
   * For managed event types, parent event type is the event type that this event type is based on
   */
  parentEventTypeId?: number | null | undefined;
  price: number;
  recurrence: Recurrence20240614;
  requiresBookerEmailVerification?: boolean | undefined;
  scheduleId: number | null;
  schedulingType: "collective" | "managed" | "roundRobin";
  seats?: Seats20240614 | undefined;
  seatsPerTimeSlot?: number | null | undefined;
  seatsShowAvailabilityCount?: boolean | null | undefined;
  slotInterval?: number | null | undefined;
  slug: string;
  successRedirectUrl: string | null;
  team: EventTypeTeam;
  teamId: number;
  title: string;
  useDestinationCalendarEmail?: boolean | undefined;
};

/**
 * @internal
 * TeamEventTypeOutput20240614 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TeamEventTypeOutput20240614 = {
  afterEventBuffer?: number | undefined;
  assignAllTeamMembers?: boolean | undefined;
  beforeEventBuffer?: number | undefined;
  bookerLayouts?: External$BookerLayouts20240614 | undefined;
  bookingFields: (
    | External$NameDefaultFieldOutput20240614
    | External$EmailDefaultFieldOutput20240614
    | External$LocationDefaultFieldOutput20240614
    | External$RescheduleReasonDefaultFieldOutput20240614
    | External$TitleDefaultFieldOutput20240614
    | External$NotesDefaultFieldOutput20240614
    | External$GuestsDefaultFieldOutput20240614
    | External$PhoneFieldOutput20240614
    | External$AddressFieldOutput20240614
    | External$TextFieldOutput20240614
    | External$NumberFieldOutput20240614
    | External$TextAreaFieldOutput20240614
    | External$SelectFieldOutput20240614
    | External$MultiSelectFieldOutput20240614
    | External$MultiEmailFieldOutput20240614
    | External$CheckboxGroupFieldOutput20240614
    | External$RadioGroupFieldOutput20240614
    | External$BooleanFieldOutput20240614
    | External$UrlFieldOutput20240614
  )[];
  bookingLimitsCount?: Record<string, any> | undefined;
  bookingLimitsDuration?: Record<string, any> | undefined;
  bookingWindow?:
    | (
        | External$BusinessDaysWindow20240614
        | External$CalendarDaysWindow20240614
        | External$RangeWindow20240614
      )[]
    | undefined;
  color?: External$EventTypeColor20240614 | undefined;
  confirmationPolicy?: Record<string, any> | undefined;
  currency: string;
  customName?: string | undefined;
  description: string;
  destinationCalendar?: External$DestinationCalendar20240614 | undefined;
  disableGuests: boolean;
  forwardParamsSuccessRedirect: boolean | null;
  hideCalendarEventDetails?: boolean | undefined;
  hideCalendarNotes?: boolean | undefined;
  hosts: External$TeamEventTypeResponseHost[];
  id: number;
  isInstantEvent: boolean;
  lengthInMinutes: number;
  lengthInMinutesOptions?: number[] | undefined;
  locations: (
    | External$OutputAddressLocation20240614
    | External$OutputLinkLocation20240614
    | External$OutputIntegrationLocation20240614
    | External$OutputPhoneLocation20240614
    | External$OutputOrganizersDefaultAppLocation20240614
    | External$OutputUnknownLocation20240614
  )[];
  lockTimeZoneToggleOnBookingPage: boolean;
  metadata: Record<string, any>;
  minimumBookingNotice?: number | undefined;
  offsetStart?: number | undefined;
  onlyShowFirstAvailableSlot?: boolean | undefined;
  ownerId?: number | null | undefined;
  parentEventTypeId?: number | null | undefined;
  price: number;
  recurrence: External$Recurrence20240614;
  requiresBookerEmailVerification?: boolean | undefined;
  scheduleId: number | null;
  schedulingType: "collective" | "managed" | "roundRobin";
  seats?: External$Seats20240614 | undefined;
  seatsPerTimeSlot?: number | null | undefined;
  seatsShowAvailabilityCount?: boolean | null | undefined;
  slotInterval?: number | null | undefined;
  slug: string;
  successRedirectUrl: string | null;
  team: External$EventTypeTeam;
  teamId: number;
  title: string;
  useDestinationCalendarEmail?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TeamEventTypeOutput20240614
 */
const SchemaIn$TeamEventTypeOutput20240614: z.ZodType<
  TeamEventTypeOutput20240614, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    afterEventBuffer: z.number().optional(),
    assignAllTeamMembers: z.boolean().optional(),
    beforeEventBuffer: z.number().optional(),
    bookerLayouts: Schemas$BookerLayouts20240614.in.optional(),
    bookingFields: z.array(
      z.union([
        Schemas$NameDefaultFieldOutput20240614.in,
        Schemas$EmailDefaultFieldOutput20240614.in,
        Schemas$LocationDefaultFieldOutput20240614.in,
        Schemas$RescheduleReasonDefaultFieldOutput20240614.in,
        Schemas$TitleDefaultFieldOutput20240614.in,
        Schemas$NotesDefaultFieldOutput20240614.in,
        Schemas$GuestsDefaultFieldOutput20240614.in,
        Schemas$PhoneFieldOutput20240614.in,
        Schemas$AddressFieldOutput20240614.in,
        Schemas$TextFieldOutput20240614.in,
        Schemas$NumberFieldOutput20240614.in,
        Schemas$TextAreaFieldOutput20240614.in,
        Schemas$SelectFieldOutput20240614.in,
        Schemas$MultiSelectFieldOutput20240614.in,
        Schemas$MultiEmailFieldOutput20240614.in,
        Schemas$CheckboxGroupFieldOutput20240614.in,
        Schemas$RadioGroupFieldOutput20240614.in,
        Schemas$BooleanFieldOutput20240614.in,
        Schemas$UrlFieldOutput20240614.in,
      ]),
    ),
    bookingLimitsCount: z.record(z.string(), z.any()).optional(),
    bookingLimitsDuration: z.record(z.string(), z.any()).optional(),
    bookingWindow: z
      .array(
        z.union([
          Schemas$BusinessDaysWindow20240614.in,
          Schemas$CalendarDaysWindow20240614.in,
          Schemas$RangeWindow20240614.in,
        ]),
      )
      .optional(),
    color: Schemas$EventTypeColor20240614.in.optional(),
    confirmationPolicy: z.record(z.string(), z.any()).optional(),
    currency: z.string(),
    customName: z.string().optional(),
    description: z.string(),
    destinationCalendar: Schemas$DestinationCalendar20240614.in.optional(),
    disableGuests: z.boolean(),
    forwardParamsSuccessRedirect: z.boolean().nullable(),
    hideCalendarEventDetails: z.boolean().optional(),
    hideCalendarNotes: z.boolean().optional(),
    hosts: z.array(Schemas$TeamEventTypeResponseHost.in),
    id: z.number(),
    isInstantEvent: z.boolean(),
    lengthInMinutes: z.number(),
    lengthInMinutesOptions: z.array(z.number()).optional(),
    locations: z.array(
      z.union([
        Schemas$OutputAddressLocation20240614.in,
        Schemas$OutputLinkLocation20240614.in,
        Schemas$OutputIntegrationLocation20240614.in,
        Schemas$OutputPhoneLocation20240614.in,
        Schemas$OutputOrganizersDefaultAppLocation20240614.in,
        Schemas$OutputUnknownLocation20240614.in,
      ]),
    ),
    lockTimeZoneToggleOnBookingPage: z.boolean(),
    metadata: z.record(z.string(), z.any()),
    minimumBookingNotice: z.number().optional(),
    offsetStart: z.number().optional(),
    onlyShowFirstAvailableSlot: z.boolean().optional(),
    ownerId: z.number().nullable().optional(),
    parentEventTypeId: z.number().nullable().optional(),
    price: z.number(),
    recurrence: Schemas$Recurrence20240614.in,
    requiresBookerEmailVerification: z.boolean().optional(),
    scheduleId: z.number().nullable(),
    schedulingType: z.enum(["collective", "managed", "roundRobin"]),
    seats: Schemas$Seats20240614.in.optional(),
    seatsPerTimeSlot: z.number().nullable().optional(),
    seatsShowAvailabilityCount: z.boolean().nullable().optional(),
    slotInterval: z.number().nullable().optional(),
    slug: z.string(),
    successRedirectUrl: z.string().nullable(),
    team: Schemas$EventTypeTeam.in,
    teamId: z.number(),
    title: z.string(),
    useDestinationCalendarEmail: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      afterEventBuffer: "afterEventBuffer",
      assignAllTeamMembers: "assignAllTeamMembers",
      beforeEventBuffer: "beforeEventBuffer",
      bookerLayouts: "bookerLayouts",
      bookingFields: "bookingFields",
      bookingLimitsCount: "bookingLimitsCount",
      bookingLimitsDuration: "bookingLimitsDuration",
      bookingWindow: "bookingWindow",
      color: "color",
      confirmationPolicy: "confirmationPolicy",
      currency: "currency",
      customName: "customName",
      description: "description",
      destinationCalendar: "destinationCalendar",
      disableGuests: "disableGuests",
      forwardParamsSuccessRedirect: "forwardParamsSuccessRedirect",
      hideCalendarEventDetails: "hideCalendarEventDetails",
      hideCalendarNotes: "hideCalendarNotes",
      hosts: "hosts",
      id: "id",
      isInstantEvent: "isInstantEvent",
      lengthInMinutes: "lengthInMinutes",
      lengthInMinutesOptions: "lengthInMinutesOptions",
      locations: "locations",
      lockTimeZoneToggleOnBookingPage: "lockTimeZoneToggleOnBookingPage",
      metadata: "metadata",
      minimumBookingNotice: "minimumBookingNotice",
      offsetStart: "offsetStart",
      onlyShowFirstAvailableSlot: "onlyShowFirstAvailableSlot",
      ownerId: "ownerId",
      parentEventTypeId: "parentEventTypeId",
      price: "price",
      recurrence: "recurrence",
      requiresBookerEmailVerification: "requiresBookerEmailVerification",
      scheduleId: "scheduleId",
      schedulingType: "schedulingType",
      seats: "seats",
      seatsPerTimeSlot: "seatsPerTimeSlot",
      seatsShowAvailabilityCount: "seatsShowAvailabilityCount",
      slotInterval: "slotInterval",
      slug: "slug",
      successRedirectUrl: "successRedirectUrl",
      team: "team",
      teamId: "teamId",
      title: "title",
      useDestinationCalendarEmail: "useDestinationCalendarEmail",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TeamEventTypeOutput20240614
 */
const SchemaOut$TeamEventTypeOutput20240614: z.ZodType<
  External$TeamEventTypeOutput20240614, // output type of this zod object
  z.ZodTypeDef,
  TeamEventTypeOutput20240614 // the object to be transformed
> = z
  .object({
    afterEventBuffer: z.number().optional(),
    assignAllTeamMembers: z.boolean().optional(),
    beforeEventBuffer: z.number().optional(),
    bookerLayouts: Schemas$BookerLayouts20240614.out.optional(),
    bookingFields: z.array(
      z.union([
        Schemas$NameDefaultFieldOutput20240614.out,
        Schemas$EmailDefaultFieldOutput20240614.out,
        Schemas$LocationDefaultFieldOutput20240614.out,
        Schemas$RescheduleReasonDefaultFieldOutput20240614.out,
        Schemas$TitleDefaultFieldOutput20240614.out,
        Schemas$NotesDefaultFieldOutput20240614.out,
        Schemas$GuestsDefaultFieldOutput20240614.out,
        Schemas$PhoneFieldOutput20240614.out,
        Schemas$AddressFieldOutput20240614.out,
        Schemas$TextFieldOutput20240614.out,
        Schemas$NumberFieldOutput20240614.out,
        Schemas$TextAreaFieldOutput20240614.out,
        Schemas$SelectFieldOutput20240614.out,
        Schemas$MultiSelectFieldOutput20240614.out,
        Schemas$MultiEmailFieldOutput20240614.out,
        Schemas$CheckboxGroupFieldOutput20240614.out,
        Schemas$RadioGroupFieldOutput20240614.out,
        Schemas$BooleanFieldOutput20240614.out,
        Schemas$UrlFieldOutput20240614.out,
      ]),
    ),
    bookingLimitsCount: z.record(z.string(), z.any()).optional(),
    bookingLimitsDuration: z.record(z.string(), z.any()).optional(),
    bookingWindow: z
      .array(
        z.union([
          Schemas$BusinessDaysWindow20240614.out,
          Schemas$CalendarDaysWindow20240614.out,
          Schemas$RangeWindow20240614.out,
        ]),
      )
      .optional(),
    color: Schemas$EventTypeColor20240614.out.optional(),
    confirmationPolicy: z.record(z.string(), z.any()).optional(),
    currency: z.string(),
    customName: z.string().optional(),
    description: z.string(),
    destinationCalendar: Schemas$DestinationCalendar20240614.out.optional(),
    disableGuests: z.boolean(),
    forwardParamsSuccessRedirect: z.boolean().nullable(),
    hideCalendarEventDetails: z.boolean().optional(),
    hideCalendarNotes: z.boolean().optional(),
    hosts: z.array(Schemas$TeamEventTypeResponseHost.out),
    id: z.number(),
    isInstantEvent: z.boolean(),
    lengthInMinutes: z.number(),
    lengthInMinutesOptions: z.array(z.number()).optional(),
    locations: z.array(
      z.union([
        Schemas$OutputAddressLocation20240614.out,
        Schemas$OutputLinkLocation20240614.out,
        Schemas$OutputIntegrationLocation20240614.out,
        Schemas$OutputPhoneLocation20240614.out,
        Schemas$OutputOrganizersDefaultAppLocation20240614.out,
        Schemas$OutputUnknownLocation20240614.out,
      ]),
    ),
    lockTimeZoneToggleOnBookingPage: z.boolean(),
    metadata: z.record(z.string(), z.any()),
    minimumBookingNotice: z.number().optional(),
    offsetStart: z.number().optional(),
    onlyShowFirstAvailableSlot: z.boolean().optional(),
    ownerId: z.number().nullable().optional(),
    parentEventTypeId: z.number().nullable().optional(),
    price: z.number(),
    recurrence: Schemas$Recurrence20240614.out,
    requiresBookerEmailVerification: z.boolean().optional(),
    scheduleId: z.number().nullable(),
    schedulingType: z.enum(["collective", "managed", "roundRobin"]),
    seats: Schemas$Seats20240614.out.optional(),
    seatsPerTimeSlot: z.number().nullable().optional(),
    seatsShowAvailabilityCount: z.boolean().nullable().optional(),
    slotInterval: z.number().nullable().optional(),
    slug: z.string(),
    successRedirectUrl: z.string().nullable(),
    team: Schemas$EventTypeTeam.out,
    teamId: z.number(),
    title: z.string(),
    useDestinationCalendarEmail: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      afterEventBuffer: "afterEventBuffer",
      assignAllTeamMembers: "assignAllTeamMembers",
      beforeEventBuffer: "beforeEventBuffer",
      bookerLayouts: "bookerLayouts",
      bookingFields: "bookingFields",
      bookingLimitsCount: "bookingLimitsCount",
      bookingLimitsDuration: "bookingLimitsDuration",
      bookingWindow: "bookingWindow",
      color: "color",
      confirmationPolicy: "confirmationPolicy",
      currency: "currency",
      customName: "customName",
      description: "description",
      destinationCalendar: "destinationCalendar",
      disableGuests: "disableGuests",
      forwardParamsSuccessRedirect: "forwardParamsSuccessRedirect",
      hideCalendarEventDetails: "hideCalendarEventDetails",
      hideCalendarNotes: "hideCalendarNotes",
      hosts: "hosts",
      id: "id",
      isInstantEvent: "isInstantEvent",
      lengthInMinutes: "lengthInMinutes",
      lengthInMinutesOptions: "lengthInMinutesOptions",
      locations: "locations",
      lockTimeZoneToggleOnBookingPage: "lockTimeZoneToggleOnBookingPage",
      metadata: "metadata",
      minimumBookingNotice: "minimumBookingNotice",
      offsetStart: "offsetStart",
      onlyShowFirstAvailableSlot: "onlyShowFirstAvailableSlot",
      ownerId: "ownerId",
      parentEventTypeId: "parentEventTypeId",
      price: "price",
      recurrence: "recurrence",
      requiresBookerEmailVerification: "requiresBookerEmailVerification",
      scheduleId: "scheduleId",
      schedulingType: "schedulingType",
      seats: "seats",
      seatsPerTimeSlot: "seatsPerTimeSlot",
      seatsShowAvailabilityCount: "seatsShowAvailabilityCount",
      slotInterval: "slotInterval",
      slug: "slug",
      successRedirectUrl: "successRedirectUrl",
      team: "team",
      teamId: "teamId",
      title: "title",
      useDestinationCalendarEmail: "useDestinationCalendarEmail",
    });
  });

export const Schemas$TeamEventTypeOutput20240614 = {
  in: SchemaIn$TeamEventTypeOutput20240614,
  out: SchemaOut$TeamEventTypeOutput20240614,
};
