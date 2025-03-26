import { zodRequiredAny, zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   *
   *     Time until which available slots should be checked.
   *
   *     Must be in UTC timezone as ISO 8601 datestring.
   *
   *     You can pass date without hours which defaults to end of day or specify hours:
   *     2024-08-20 (will have hours 23:59:59 aka at the very end of the date) or you can specify hours manually like 2024-08-20T18:00:00Z.
   */
  end: any;
  /**
   *
   *       Time starting from which available slots should be checked.
   *
   *       Must be in UTC timezone as ISO 8601 datestring.
   *
   *       You can pass date without hours which defaults to start of day or specify hours:
   *       2024-08-13 (will have hours 00:00:00 aka at very beginning of the date) or you can specify hours manually like 2024-08-13T09:00:00Z.
   */
  start: any;
  /**
   * If event type has multiple possible durations then you can specify the desired duration here. Also, if you are fetching slots for a dynamic event then you can specify the duration her which defaults to 30, meaning that returned slots will be each 30 minutes long.
   */
  duration?: any | undefined;
  /**
   * The ID of the event type for which available slots should be checked.
   */
  eventTypeId?: any | undefined;
  /**
   * The slug of the event type for which available slots should be checked. If slug is provided then username must be provided too.
   */
  eventTypeSlug?: any | undefined;
  /**
   * Format of slot times in response. Use 'range' to get start and end times. Use 'time' or omit this query parameter to get only start time.
   */
  slotFormat?: any | undefined;
  /**
   * Time zone in which the available slots should be returned. Defaults to UTC.
   */
  timeZone?: any | undefined;
  /**
   * The username of the user to get event types for.
   */
  username?: any | undefined;
  /**
   * The usernames for which available slots should be checked separated by a comma.
   *
   *     Checking slots by usernames is used mainly for dynamic events where there is no specific event but we just want to know when 2 or more people are available.
   *
   *     Must contain at least 2 usernames.
   */
  usernames?: any | undefined;
  /**
   * Must be set to 2024-09-04
   */
  calApiVersion: string;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  end: any;
  start: any;
  duration?: any | undefined;
  eventTypeId?: any | undefined;
  eventTypeSlug?: any | undefined;
  slotFormat?: any | undefined;
  timeZone?: any | undefined;
  username?: any | undefined;
  usernames?: any | undefined;
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
    end: zodRequiredAny,
    start: zodRequiredAny,
    duration: z.any().optional(),
    eventTypeId: z.any().optional(),
    eventTypeSlug: z.any().optional(),
    slotFormat: z.any().optional(),
    timeZone: z.any().optional(),
    username: z.any().optional(),
    usernames: z.any().optional(),
    "cal-api-version": z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      end: "end",
      start: "start",
      duration: "duration",
      eventTypeId: "eventTypeId",
      eventTypeSlug: "eventTypeSlug",
      slotFormat: "slotFormat",
      timeZone: "timeZone",
      username: "username",
      usernames: "usernames",
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
    end: zodRequiredAny,
    start: zodRequiredAny,
    duration: z.any().optional(),
    eventTypeId: z.any().optional(),
    eventTypeSlug: z.any().optional(),
    slotFormat: z.any().optional(),
    timeZone: z.any().optional(),
    username: z.any().optional(),
    usernames: z.any().optional(),
    calApiVersion: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      end: "end",
      start: "start",
      duration: "duration",
      eventTypeId: "eventTypeId",
      eventTypeSlug: "eventTypeSlug",
      slotFormat: "slotFormat",
      timeZone: "timeZone",
      username: "username",
      usernames: "usernames",
      calApiVersion: "cal-api-version",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};
