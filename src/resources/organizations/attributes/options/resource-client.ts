import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/organizations/attributes/options/request-types";
import { Schemas$AssignOptionUserOutput } from "calcom_ts/types/assign-option-user-output";
import { Schemas$AssignOrganizationAttributeOptionToUserInput } from "calcom_ts/types/assign-organization-attribute-option-to-user-input";
import { Schemas$CreateAttributeOptionOutput } from "calcom_ts/types/create-attribute-option-output";
import { Schemas$CreateOrganizationAttributeOptionInput } from "calcom_ts/types/create-organization-attribute-option-input";
import { Schemas$DeleteAttributeOptionOutput } from "calcom_ts/types/delete-attribute-option-output";
import { Schemas$GetAllAttributeOptionOutput } from "calcom_ts/types/get-all-attribute-option-output";
import { Schemas$GetOptionUserOutput } from "calcom_ts/types/get-option-user-output";
import { Schemas$UnassignOptionUserOutput } from "calcom_ts/types/unassign-option-user-output";
import { Schemas$UpdateAttributeOptionOutput } from "calcom_ts/types/update-attribute-option-output";
import { Schemas$UpdateOrganizationAttributeOptionInput } from "calcom_ts/types/update-organization-attribute-option-input";

export class OptionsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Create an attribute option
   *
   * POST /v2/organizations/{orgId}/attributes/{attributeId}/options
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreateAttributeOptionOutput> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/organizations/${request.orgId}/attributes/${request.attributeId}/options`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$CreateOrganizationAttributeOptionInput.out.parse(request),
      responseSchema: Schemas$CreateAttributeOptionOutput.in,
      opts,
    });
  }
  /**
   * Assign an attribute to a user
   *
   * POST /v2/organizations/{orgId}/attributes/options/{userId}
   */
  createToUser(
    request: requests.CreateToUserRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.AssignOptionUserOutput> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/organizations/${request.orgId}/attributes/options/${request.userId}`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$AssignOrganizationAttributeOptionToUserInput.out.parse(
        request,
      ),
      responseSchema: Schemas$AssignOptionUserOutput.in,
      opts,
    });
  }
  /**
   * Update an attribute option
   *
   * PATCH /v2/organizations/{orgId}/attributes/{attributeId}/options/{optionId}
   */
  patch(
    request: requests.PatchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.UpdateAttributeOptionOutput> {
    return this._client.makeRequest({
      method: "patch",
      path: `/v2/organizations/${request.orgId}/attributes/${request.attributeId}/options/${request.optionId}`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$UpdateOrganizationAttributeOptionInput.out.parse(request),
      responseSchema: Schemas$UpdateAttributeOptionOutput.in,
      opts,
    });
  }
  /**
   * Get all attribute options
   *
   * GET /v2/organizations/{orgId}/attributes/{attributeId}/options
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetAllAttributeOptionOutput> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/organizations/${request.orgId}/attributes/${request.attributeId}/options`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$GetAllAttributeOptionOutput.in,
      opts,
    });
  }
  /**
   * Get all attribute options for a user
   *
   * GET /v2/organizations/{orgId}/attributes/options/{userId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetOptionUserOutput> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/organizations/${request.orgId}/attributes/options/${request.userId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$GetOptionUserOutput.in,
      opts,
    });
  }
  /**
   * Delete an attribute option
   *
   * DELETE /v2/organizations/{orgId}/attributes/{attributeId}/options/{optionId}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeleteAttributeOptionOutput> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/organizations/${request.orgId}/attributes/${request.attributeId}/options/${request.optionId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$DeleteAttributeOptionOutput.in,
      opts,
    });
  }
  /**
   * Unassign an attribute from a user
   *
   * DELETE /v2/organizations/{orgId}/attributes/options/{userId}/{attributeOptionId}
   */
  deleteFromUser(
    request: requests.DeleteFromUserRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.UnassignOptionUserOutput> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/organizations/${request.orgId}/attributes/options/${request.userId}/${request.attributeOptionId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$UnassignOptionUserOutput.in,
      opts,
    });
  }
}
