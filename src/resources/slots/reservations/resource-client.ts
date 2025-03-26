import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/slots/reservations/request-types";
import { Schemas$GetReservedSlotOutput20240904 } from "calcom_ts/types/get-reserved-slot-output20240904";
import { Schemas$ReserveSlotInput20240904 } from "calcom_ts/types/reserve-slot-input20240904";
import { Schemas$ReserveSlotOutputResponse20240904 } from "calcom_ts/types/reserve-slot-output-response20240904";
import * as z from "zod";

export class ReservationsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Reserve a slot
   *
   * Make a slot not available for others to book for a certain period of time.
   *
   * POST /v2/slots/reservations
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ReserveSlotOutputResponse20240904> {
    return this._client.makeRequest({
      method: "post",
      path: "/v2/slots/reservations",
      auth: ["bearerAuth"],
      headers: { "cal-api-version": request.calApiVersion },
      contentType: "application/json",
      body: Schemas$ReserveSlotInput20240904.out.parse(request),
      responseSchema: Schemas$ReserveSlotOutputResponse20240904.in,
      opts,
    });
  }
  /**
   * Updated reserved a slot
   *
   * PATCH /v2/slots/reservations/{uid}
   */
  patch(
    request: requests.PatchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ReserveSlotOutputResponse20240904> {
    return this._client.makeRequest({
      method: "patch",
      path: `/v2/slots/reservations/${request.uid}`,
      auth: ["bearerAuth"],
      headers: { "cal-api-version": request.calApiVersion },
      contentType: "application/json",
      body: Schemas$ReserveSlotInput20240904.out.parse(request),
      responseSchema: Schemas$ReserveSlotOutputResponse20240904.in,
      opts,
    });
  }
  /**
   * Get reserved slot
   *
   * GET /v2/slots/reservations/{uid}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetReservedSlotOutput20240904> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/slots/reservations/${request.uid}`,
      auth: ["bearerAuth"],
      headers: { "cal-api-version": request.calApiVersion },
      responseSchema: Schemas$GetReservedSlotOutput20240904.in,
      opts,
    });
  }
  /**
   * DELETE /v2/slots/reservations/{uid}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<Record<string, any>> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/slots/reservations/${request.uid}`,
      auth: ["bearerAuth"],
      headers: { "cal-api-version": request.calApiVersion },
      responseSchema: z.record(z.string(), z.any()),
      opts,
    });
  }
}
