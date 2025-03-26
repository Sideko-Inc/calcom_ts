import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "calcom_ts/core";
import { DefaultClient } from "calcom_ts/resources/schedules/default-resource";
import * as requests from "calcom_ts/resources/schedules/request-types";
import { Schemas$CreateScheduleInput20240611 } from "calcom_ts/types/create-schedule-input20240611";
import { Schemas$CreateScheduleOutput20240611 } from "calcom_ts/types/create-schedule-output20240611";
import { Schemas$DeleteScheduleOutput20240611 } from "calcom_ts/types/delete-schedule-output20240611";
import { Schemas$GetScheduleOutput20240611 } from "calcom_ts/types/get-schedule-output20240611";
import { Schemas$GetSchedulesOutput20240611 } from "calcom_ts/types/get-schedules-output20240611";
import { Schemas$UpdateScheduleInput20240611 } from "calcom_ts/types/update-schedule-input20240611";
import { Schemas$UpdateScheduleOutput20240611 } from "calcom_ts/types/update-schedule-output20240611";

export class SchedulesClient extends CoreResourceClient {
  default: DefaultClient;

  constructor(client: CoreClient) {
    super(client);

    this.default = new DefaultClient(this._client);
  }
  /**
   * Create a schedule
   *
   *
   *       Create a schedule for the authenticated user.
   *
   *       The point of creating schedules is for event types to be available at specific times.
   *
   *       The first goal of schedules is to have a default schedule. If you are platform customer and created managed users, then it is important to note that each managed user should have a default schedule.
   *       1. If you passed `timeZone` when creating managed user, then the default schedule from Monday to Friday from 9AM to 5PM will be created with that timezone. The managed user can then change the default schedule via the `AvailabilitySettings` atom.
   *       2. If you did not, then we assume you want the user to have this specific schedule right away. You should create a default schedule by specifying
   *       `"isDefault": true` in the request body. Until the user has a default schedule the user can't be booked nor manage their schedule via the AvailabilitySettings atom.
   *
   *       The second goal of schedules is to create another schedule that event types can point to. This is useful for when an event is booked because availability is not checked against the default schedule but instead against that specific schedule.
   *       After creating a non-default schedule, you can update an event type to point to that schedule via the PATCH `event-types/{eventTypeId}` endpoint.
   *
   *       When specifying start time and end time for each day use the 24 hour format e.g. 08:00, 15:00 etc.
   *
   *
   * POST /v2/schedules
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreateScheduleOutput20240611> {
    return this._client.makeRequest({
      method: "post",
      path: "/v2/schedules",
      auth: ["bearerAuth"],
      headers: { "cal-api-version": request.calApiVersion },
      contentType: "application/json",
      body: Schemas$CreateScheduleInput20240611.out.parse(request),
      responseSchema: Schemas$CreateScheduleOutput20240611.in,
      opts,
    });
  }
  /**
   * Update a schedule
   *
   * PATCH /v2/schedules/{scheduleId}
   */
  patch(
    request: requests.PatchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.UpdateScheduleOutput20240611> {
    return this._client.makeRequest({
      method: "patch",
      path: `/v2/schedules/${request.scheduleId}`,
      auth: ["bearerAuth"],
      headers: { "cal-api-version": request.calApiVersion },
      contentType: "application/json",
      body: Schemas$UpdateScheduleInput20240611.out.parse(request),
      responseSchema: Schemas$UpdateScheduleOutput20240611.in,
      opts,
    });
  }
  /**
   * Get a schedule
   *
   * GET /v2/schedules/{scheduleId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetScheduleOutput20240611> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/schedules/${request.scheduleId}`,
      auth: ["bearerAuth"],
      headers: { "cal-api-version": request.calApiVersion },
      responseSchema: Schemas$GetScheduleOutput20240611.in,
      opts,
    });
  }
  /**
   * Get all schedules
   *
   * Get all schedules of the authenticated user.
   *
   * GET /v2/schedules
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetSchedulesOutput20240611> {
    return this._client.makeRequest({
      method: "get",
      path: "/v2/schedules",
      auth: ["bearerAuth"],
      headers: { "cal-api-version": request.calApiVersion },
      responseSchema: Schemas$GetSchedulesOutput20240611.in,
      opts,
    });
  }
  /**
   * Delete a schedule
   *
   * DELETE /v2/schedules/{scheduleId}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeleteScheduleOutput20240611> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/schedules/${request.scheduleId}`,
      auth: ["bearerAuth"],
      headers: { "cal-api-version": request.calApiVersion },
      responseSchema: Schemas$DeleteScheduleOutput20240611.in,
      opts,
    });
  }
}
