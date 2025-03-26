import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "calcom_ts/core";
import { AttributesClient } from "calcom_ts/resources/organizations/attributes";
import { DelegationCredentialsClient } from "calcom_ts/resources/organizations/delegation-credentials";
import { MembershipsClient } from "calcom_ts/resources/organizations/memberships";
import { OooClient } from "calcom_ts/resources/organizations/ooo";
import * as requests from "calcom_ts/resources/organizations/request-types";
import { SchedulesClient } from "calcom_ts/resources/organizations/schedules";
import { TeamsClient } from "calcom_ts/resources/organizations/teams";
import { UsersClient } from "calcom_ts/resources/organizations/users";
import { WebhooksClient } from "calcom_ts/resources/organizations/webhooks";
import { Schemas$CreateManagedOrganizationOutput } from "calcom_ts/types/create-managed-organization-output";
import { Schemas$CreateOrganizationInput } from "calcom_ts/types/create-organization-input";
import { Schemas$GetManagedOrganizationOutput } from "calcom_ts/types/get-managed-organization-output";
import { Schemas$GetManagedOrganizationsOutput } from "calcom_ts/types/get-managed-organizations-output";
import { Schemas$UpdateOrganizationInput } from "calcom_ts/types/update-organization-input";

export class OrganizationsClient extends CoreResourceClient {
  attributes: AttributesClient;
  memberships: MembershipsClient;
  teams: TeamsClient;
  users: UsersClient;
  webhooks: WebhooksClient;
  ooo: OooClient;
  schedules: SchedulesClient;
  delegationCredentials: DelegationCredentialsClient;

  constructor(client: CoreClient) {
    super(client);

    this.attributes = new AttributesClient(this._client);
    this.memberships = new MembershipsClient(this._client);
    this.teams = new TeamsClient(this._client);
    this.users = new UsersClient(this._client);
    this.webhooks = new WebhooksClient(this._client);
    this.ooo = new OooClient(this._client);
    this.schedules = new SchedulesClient(this._client);
    this.delegationCredentials = new DelegationCredentialsClient(this._client);
  }
  /**
   * Create an organization within an organization
   *
   * Requires the user to have at least the 'ORG_ADMIN' role within the organization. Additionally, for platform, the plan must be 'SCALE' or higher to access this endpoint.
   *
   * POST /v2/organizations/{orgId}/organizations
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreateManagedOrganizationOutput> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/organizations/${request.orgId}/organizations`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$CreateOrganizationInput.out.parse(request),
      responseSchema: Schemas$CreateManagedOrganizationOutput.in,
      opts,
    });
  }
  /**
   * Update an organization within an organization
   *
   * Requires the user to have at least the 'ORG_ADMIN' role within the organization. Additionally, for platform, the plan must be 'SCALE' or higher to access this endpoint.
   *
   * PATCH /v2/organizations/{orgId}/organizations/{managedOrganizationId}
   */
  patch(
    request: requests.PatchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetManagedOrganizationOutput> {
    return this._client.makeRequest({
      method: "patch",
      path: `/v2/organizations/${request.orgId}/organizations/${request.managedOrganizationId}`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$UpdateOrganizationInput.out.parse(request),
      responseSchema: Schemas$GetManagedOrganizationOutput.in,
      opts,
    });
  }
  /**
   * Get an organization within an organization
   *
   * Requires the user to have at least the 'ORG_ADMIN' role within the organization. Additionally, for platform, the plan must be 'SCALE' or higher to access this endpoint.
   *
   * GET /v2/organizations/{orgId}/organizations/{managedOrganizationId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetManagedOrganizationOutput> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/organizations/${request.orgId}/organizations/${request.managedOrganizationId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$GetManagedOrganizationOutput.in,
      opts,
    });
  }
  /**
   * Get all organizations within an organization
   *
   * Requires the user to have at least the 'ORG_ADMIN' role within the organization. Additionally, for platform, the plan must be 'SCALE' or higher to access this endpoint.
   *
   * GET /v2/organizations/{orgId}/organizations
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetManagedOrganizationsOutput> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/organizations/${request.orgId}/organizations`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$GetManagedOrganizationsOutput.in,
      opts,
    });
  }
  /**
   * Delete an organization within an organization
   *
   * Requires the user to have at least the 'ORG_ADMIN' role within the organization. Additionally, for platform, the plan must be 'SCALE' or higher to access this endpoint.
   *
   * DELETE /v2/organizations/{orgId}/organizations/{managedOrganizationId}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetManagedOrganizationOutput> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/organizations/${request.orgId}/organizations/${request.managedOrganizationId}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$GetManagedOrganizationOutput.in,
      opts,
    });
  }
}
