import { types } from "calcom_ts";
import {
  ApiPromise,
  ApiResponse,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
  zodRequiredAny,
} from "calcom_ts/core";
import { CredentialsClient } from "calcom_ts/resources/calendars/credentials";
import { IcsFeedClient } from "calcom_ts/resources/calendars/ics-feed";
import * as requests from "calcom_ts/resources/calendars/request-types";
import { Schemas$ConnectedCalendarsOutput } from "calcom_ts/types/connected-calendars-output";
import { Schemas$DeleteCalendarCredentialsInputBodyDto } from "calcom_ts/types/delete-calendar-credentials-input-body-dto";
import { Schemas$DeletedCalendarCredentialsOutputResponseDto } from "calcom_ts/types/deleted-calendar-credentials-output-response-dto";
import { Schemas$GetBusyTimesOutput } from "calcom_ts/types/get-busy-times-output";
import * as z from "zod";

export class CalendarsClient extends CoreResourceClient {
  icsFeed: IcsFeedClient;
  credentials: CredentialsClient;

  constructor(client: CoreClient) {
    super(client);

    this.icsFeed = new IcsFeedClient(this._client);
    this.credentials = new CredentialsClient(this._client);
  }
  /**
   * Disconnect a calendar
   *
   * POST /v2/calendars/{calendar}/disconnect
   */
  disconnect(
    request: requests.DisconnectRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeletedCalendarCredentialsOutputResponseDto> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/calendars/${request.calendar}/disconnect`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$DeleteCalendarCredentialsInputBodyDto.out.parse(request),
      responseSchema: Schemas$DeletedCalendarCredentialsOutputResponseDto.in,
      opts,
    });
  }
  /**
   * Save an oAuth calendar credentials
   *
   * GET /v2/calendars/{calendar}/save
   */
  save(
    request: requests.SaveRequest,
    opts?: RequestOptions,
  ): ApiPromise<ApiResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/calendars/${request.calendar}/save`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "code",
          value: z.string().parse(request.code),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "state",
          value: z.string().parse(request.state),
          style: "form",
          explode: true,
        }),
      ],
      responseRaw: true,
      responseSchema: zodRequiredAny,
      opts,
    });
  }
  /**
   * Get oAuth connect URL
   *
   * GET /v2/calendars/{calendar}/connect
   */
  connect(
    request: requests.ConnectRequest,
    opts?: RequestOptions,
  ): ApiPromise<Record<string, any>> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/calendars/${request.calendar}/connect`,
      auth: ["bearerAuth"],
      responseSchema: z.record(z.string(), z.any()),
      opts,
    });
  }
  /**
   * Check a calendar connection
   *
   * GET /v2/calendars/{calendar}/check
   */
  check(
    request: requests.CheckRequest,
    opts?: RequestOptions,
  ): ApiPromise<Record<string, any>> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/calendars/${request.calendar}/check`,
      auth: ["bearerAuth"],
      responseSchema: z.record(z.string(), z.any()),
      opts,
    });
  }
  /**
   * Get busy times
   *
   * Get busy times from a calendar. Example request URL is `https://api.cal.com/v2/calendars/busy-times?loggedInUsersTz=Europe%2FMadrid&dateFrom=2024-12-18&dateTo=2024-12-18&calendarsToLoad[0][credentialId]=135&calendarsToLoad[0][externalId]=skrauciz%40gmail.com`
   *
   * GET /v2/calendars/busy-times
   */
  getBusy(
    request: requests.GetBusyRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetBusyTimesOutput> {
    return this._client.makeRequest({
      method: "get",
      path: "/v2/calendars/busy-times",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "credentialId",
          value: z.number().parse(request.credentialId),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "externalId",
          value: z.string().parse(request.externalId),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "loggedInUsersTz",
          value: z.string().parse(request.loggedInUsersTz),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "dateFrom",
          value: z.string().optional().parse(request.dateFrom),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "dateTo",
          value: z.string().optional().parse(request.dateTo),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: Schemas$GetBusyTimesOutput.in,
      opts,
    });
  }
  /**
   * Get all calendars
   *
   * GET /v2/calendars
   */
  list(opts?: RequestOptions): ApiPromise<types.ConnectedCalendarsOutput> {
    return this._client.makeRequest({
      method: "get",
      path: "/v2/calendars",
      auth: ["bearerAuth"],
      responseSchema: Schemas$ConnectedCalendarsOutput.in,
      opts,
    });
  }
}
