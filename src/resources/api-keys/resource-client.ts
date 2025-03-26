import { CoreClient, CoreResourceClient } from "calcom_ts/core";
import { RefreshClient } from "calcom_ts/resources/api-keys/refresh";

export class ApiKeysClient extends CoreResourceClient {
  refresh: RefreshClient;

  constructor(client: CoreClient) {
    super(client);

    this.refresh = new RefreshClient(this._client);
  }
}
