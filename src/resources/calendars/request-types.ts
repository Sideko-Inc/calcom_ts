import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * GetBusyRequest
 */
export type GetBusyRequest = {
  credentialId: number;
  externalId: string;
  /**
   * The timezone of the logged in user represented as a string
   */
  loggedInUsersTz: string;
  /**
   * The starting date for the busy times query
   */
  dateFrom?: string | undefined;
  /**
   * The ending date for the busy times query
   */
  dateTo?: string | undefined;
};

/**
 * @internal
 * GetBusyRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetBusyRequest = {
  credentialId: number;
  externalId: string;
  loggedInUsersTz: string;
  dateFrom?: string | undefined;
  dateTo?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetBusyRequest
 */
const SchemaIn$GetBusyRequest: z.ZodType<
  GetBusyRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    credentialId: z.number(),
    externalId: z.string(),
    loggedInUsersTz: z.string(),
    dateFrom: z.string().optional(),
    dateTo: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      credentialId: "credentialId",
      externalId: "externalId",
      loggedInUsersTz: "loggedInUsersTz",
      dateFrom: "dateFrom",
      dateTo: "dateTo",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetBusyRequest
 */
const SchemaOut$GetBusyRequest: z.ZodType<
  External$GetBusyRequest, // output type of this zod object
  z.ZodTypeDef,
  GetBusyRequest // the object to be transformed
> = z
  .object({
    credentialId: z.number(),
    externalId: z.string(),
    loggedInUsersTz: z.string(),
    dateFrom: z.string().optional(),
    dateTo: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      credentialId: "credentialId",
      externalId: "externalId",
      loggedInUsersTz: "loggedInUsersTz",
      dateFrom: "dateFrom",
      dateTo: "dateTo",
    });
  });

export const Schemas$GetBusyRequest = {
  in: SchemaIn$GetBusyRequest,
  out: SchemaOut$GetBusyRequest,
};

/**
 * CheckRequest
 */
export type CheckRequest = {
  calendar: "apple" | "google" | "office365";
};

/**
 * @internal
 * CheckRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckRequest = {
  calendar: "apple" | "google" | "office365";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckRequest
 */
const SchemaIn$CheckRequest: z.ZodType<
  CheckRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    calendar: z.enum(["apple", "google", "office365"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      calendar: "calendar",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckRequest
 */
const SchemaOut$CheckRequest: z.ZodType<
  External$CheckRequest, // output type of this zod object
  z.ZodTypeDef,
  CheckRequest // the object to be transformed
> = z
  .object({
    calendar: z.enum(["apple", "google", "office365"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      calendar: "calendar",
    });
  });

export const Schemas$CheckRequest = {
  in: SchemaIn$CheckRequest,
  out: SchemaOut$CheckRequest,
};

/**
 * ConnectRequest
 */
export type ConnectRequest = {
  calendar: "google" | "office365";
};

/**
 * @internal
 * ConnectRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConnectRequest = {
  calendar: "google" | "office365";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConnectRequest
 */
const SchemaIn$ConnectRequest: z.ZodType<
  ConnectRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    calendar: z.enum(["google", "office365"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      calendar: "calendar",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConnectRequest
 */
const SchemaOut$ConnectRequest: z.ZodType<
  External$ConnectRequest, // output type of this zod object
  z.ZodTypeDef,
  ConnectRequest // the object to be transformed
> = z
  .object({
    calendar: z.enum(["google", "office365"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      calendar: "calendar",
    });
  });

export const Schemas$ConnectRequest = {
  in: SchemaIn$ConnectRequest,
  out: SchemaOut$ConnectRequest,
};

/**
 * SaveRequest
 */
export type SaveRequest = {
  calendar: "google" | "office365";
  code: string;
  state: string;
};

/**
 * @internal
 * SaveRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SaveRequest = {
  calendar: "google" | "office365";
  code: string;
  state: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SaveRequest
 */
const SchemaIn$SaveRequest: z.ZodType<
  SaveRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    calendar: z.enum(["google", "office365"]),
    code: z.string(),
    state: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      calendar: "calendar",
      code: "code",
      state: "state",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SaveRequest
 */
const SchemaOut$SaveRequest: z.ZodType<
  External$SaveRequest, // output type of this zod object
  z.ZodTypeDef,
  SaveRequest // the object to be transformed
> = z
  .object({
    calendar: z.enum(["google", "office365"]),
    code: z.string(),
    state: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      calendar: "calendar",
      code: "code",
      state: "state",
    });
  });

export const Schemas$SaveRequest = {
  in: SchemaIn$SaveRequest,
  out: SchemaOut$SaveRequest,
};

/**
 * DisconnectRequest
 */
export type DisconnectRequest = {
  /**
   * Credential ID of the calendar to delete, as returned by the /calendars endpoint
   */
  id: number;
  calendar: "apple" | "google" | "office365";
};

/**
 * @internal
 * DisconnectRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisconnectRequest = {
  id: number;
  calendar: "apple" | "google" | "office365";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisconnectRequest
 */
const SchemaIn$DisconnectRequest: z.ZodType<
  DisconnectRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    id: z.number().int(),
    calendar: z.enum(["apple", "google", "office365"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      calendar: "calendar",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisconnectRequest
 */
const SchemaOut$DisconnectRequest: z.ZodType<
  External$DisconnectRequest, // output type of this zod object
  z.ZodTypeDef,
  DisconnectRequest // the object to be transformed
> = z
  .object({
    id: z.number().int(),
    calendar: z.enum(["apple", "google", "office365"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      calendar: "calendar",
    });
  });

export const Schemas$DisconnectRequest = {
  in: SchemaIn$DisconnectRequest,
  out: SchemaOut$DisconnectRequest,
};
