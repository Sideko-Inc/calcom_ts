import { CoreClient, CoreResourceClient } from "calcom_ts/core";
import { ResponsesClient } from "calcom_ts/resources/organizations/teams/routing-forms/responses";

export class RoutingFormsClient extends CoreResourceClient {
  responses: ResponsesClient;

  constructor(client: CoreClient) {
    super(client);

    this.responses = new ResponsesClient(this._client);
  }
}
