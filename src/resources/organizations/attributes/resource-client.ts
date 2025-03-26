import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "calcom_ts/core";
import { OptionsClient } from "calcom_ts/resources/organizations/attributes/options";
import * as requests from "calcom_ts/resources/organizations/attributes/request-types";
import { Schemas$CreateOrganizationAttributeInput } from "calcom_ts/types/create-organization-attribute-input";
import { Schemas$CreateOrganizationAttributesOutput } from "calcom_ts/types/create-organization-attributes-output";
import { Schemas$DeleteOrganizationAttributesOutput } from "calcom_ts/types/delete-organization-attributes-output";
import { Schemas$GetOrganizationAttributesOutput } from "calcom_ts/types/get-organization-attributes-output";
import { Schemas$GetSingleAttributeOutput } from "calcom_ts/types/get-single-attribute-output";
import { Schemas$UpdateOrganizationAttributeInput } from "calcom_ts/types/update-organization-attribute-input";
import { Schemas$UpdateOrganizationAttributesOutput } from "calcom_ts/types/update-organization-attributes-output";
import * as z from "zod";

export class AttributesClient extends CoreResourceClient {
  options: OptionsClient;

  constructor(client: CoreClient) {
    super(client);

    this.options = new OptionsClient(this._client);
  }
  /**
   * Create an attribute
   *
   * POST /v2/organizations/{orgId}/attributes
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreateOrganizationAttributesOutput> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/organizations/${request.orgId}/attributes`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$CreateOrganizationAttributeInput.out.parse(request),
      responseSchema: Schemas$CreateOrganizationAttributesOutput.in,
      opts,
    });
  }
  /**
   * Update an attribute
   *
   * PATCH /v2/organizations/{orgId}/attributes/{attributeId}
   */
  patch(
    request: requests.PatchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.UpdateOrganizationAttributesOutput> {
    return this._client.makeRequest({
      method: "patch",
      path: `/v2/organizations/${request.orgId}/attributes/${request.attributeId}`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$UpdateOrganizationAttributeInput.out.parse(request),
      responseSchema: Schemas$UpdateOrganizationAttributesOutput.in,
      opts,
    });
  }
  /**
   * Get an attribute
   *
   * GET /v2/organizations/{orgId}/attributes/{attributeId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetSingleAttributeOutput> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/organizations/${request.orgId}/attributes/${request.attributeId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$GetSingleAttributeOutput.in,
      opts,
    });
  }
  /**
   * Get all attributes
   *
   * GET /v2/organizations/{orgId}/attributes
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetOrganizationAttributesOutput> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/organizations/${request.orgId}/attributes`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "skip",
          value: z.number().optional().parse(request.skip),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "take",
          value: z.number().optional().parse(request.take),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: Schemas$GetOrganizationAttributesOutput.in,
      opts,
    });
  }
  /**
   * Delete an attribute
   *
   * DELETE /v2/organizations/{orgId}/attributes/{attributeId}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeleteOrganizationAttributesOutput> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/organizations/${request.orgId}/attributes/${request.attributeId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$DeleteOrganizationAttributesOutput.in,
      opts,
    });
  }
}
