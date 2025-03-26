import { CoreClient, CoreResourceClient } from "calcom_ts/core";
import { SchedulesClient } from "calcom_ts/resources/organizations/teams/users/schedules";

export class UsersClient extends CoreResourceClient {
  schedules: SchedulesClient;

  constructor(client: CoreClient) {
    super(client);

    this.schedules = new SchedulesClient(this._client);
  }
}
