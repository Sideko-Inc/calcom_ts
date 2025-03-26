import { types } from "calcom_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "calcom_ts/core";
import * as requests from "calcom_ts/resources/organizations/delegation-credentials/request-types";
import { Schemas$CreateDelegationCredentialInput } from "calcom_ts/types/create-delegation-credential-input";
import { Schemas$CreateDelegationCredentialOutput } from "calcom_ts/types/create-delegation-credential-output";
import { Schemas$UpdateDelegationCredentialInput } from "calcom_ts/types/update-delegation-credential-input";
import { Schemas$UpdateDelegationCredentialOutput } from "calcom_ts/types/update-delegation-credential-output";

export class DelegationCredentialsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Save delegation credentials for your organization.
   *
   * POST /v2/organizations/{orgId}/delegation-credentials
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreateDelegationCredentialOutput> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/organizations/${request.orgId}/delegation-credentials`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$CreateDelegationCredentialInput.out.parse(request),
      responseSchema: Schemas$CreateDelegationCredentialOutput.in,
      opts,
    });
  }
  /**
   * Update delegation credentials of your organization.
   *
   * PATCH /v2/organizations/{orgId}/delegation-credentials/{credentialId}
   */
  patch(
    request: requests.PatchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.UpdateDelegationCredentialOutput> {
    return this._client.makeRequest({
      method: "patch",
      path: `/v2/organizations/${request.orgId}/delegation-credentials/${request.credentialId}`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: Schemas$UpdateDelegationCredentialInput.out.parse(request),
      responseSchema: Schemas$UpdateDelegationCredentialOutput.in,
      opts,
    });
  }
}
