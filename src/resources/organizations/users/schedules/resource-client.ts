import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/organizations/users/schedules/request-types";
import { Schemas$CreateScheduleInput20240611 } from "calcom_ts/types/create-schedule-input20240611";
import { Schemas$CreateScheduleOutput20240611 } from "calcom_ts/types/create-schedule-output20240611";
import { Schemas$DeleteScheduleOutput20240611 } from "calcom_ts/types/delete-schedule-output20240611";
import { Schemas$GetScheduleOutput20240611 } from "calcom_ts/types/get-schedule-output20240611";
import { Schemas$GetSchedulesOutput20240611 } from "calcom_ts/types/get-schedules-output20240611";
import { Schemas$UpdateScheduleInput20240611 } from "calcom_ts/types/update-schedule-input20240611";
import { Schemas$UpdateScheduleOutput20240611 } from "calcom_ts/types/update-schedule-output20240611";

export class SchedulesClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Create a schedule
   *
   * POST /v2/organizations/{orgId}/users/{userId}/schedules
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreateScheduleOutput20240611> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/organizations/${request.orgId}/users/${request.userId}/schedules`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$CreateScheduleInput20240611.out.parse(request),
      responseSchema: Schemas$CreateScheduleOutput20240611.in,
      opts,
    });
  }
  /**
   * Update a schedule
   *
   * PATCH /v2/organizations/{orgId}/users/{userId}/schedules/{scheduleId}
   */
  patch(
    request: requests.PatchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.UpdateScheduleOutput20240611> {
    return this._client.makeRequest({
      method: "patch",
      path: `/v2/organizations/${request.orgId}/users/${request.userId}/schedules/${request.scheduleId}`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$UpdateScheduleInput20240611.out.parse(request),
      responseSchema: Schemas$UpdateScheduleOutput20240611.in,
      opts,
    });
  }
  /**
   * Get a schedule
   *
   * GET /v2/organizations/{orgId}/users/{userId}/schedules/{scheduleId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetScheduleOutput20240611> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/organizations/${request.orgId}/users/${request.userId}/schedules/${request.scheduleId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$GetScheduleOutput20240611.in,
      opts,
    });
  }
  /**
   * Get all schedules
   *
   * GET /v2/organizations/{orgId}/users/{userId}/schedules
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetSchedulesOutput20240611> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/organizations/${request.orgId}/users/${request.userId}/schedules`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$GetSchedulesOutput20240611.in,
      opts,
    });
  }
  /**
   * Delete a schedule
   *
   * DELETE /v2/organizations/{orgId}/users/{userId}/schedules/{scheduleId}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeleteScheduleOutput20240611> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/organizations/${request.orgId}/users/${request.userId}/schedules/${request.scheduleId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$DeleteScheduleOutput20240611.in,
      opts,
    });
  }
}
