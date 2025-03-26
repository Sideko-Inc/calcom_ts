import { AuthBearer, CoreClient } from "calcom_ts/core";
import { Environment } from "calcom_ts/environment";
import { ApiKeysClient } from "calcom_ts/resources/api-keys";
import { BookingsClient } from "calcom_ts/resources/bookings";
import { CalendarsClient } from "calcom_ts/resources/calendars";
import { ConferencingClient } from "calcom_ts/resources/conferencing";
import { DestinationCalendarsClient } from "calcom_ts/resources/destination-calendars";
import { EventTypesClient } from "calcom_ts/resources/event-types";
import { MeClient } from "calcom_ts/resources/me";
import { OauthClient } from "calcom_ts/resources/oauth";
import { OauthClientsClient } from "calcom_ts/resources/oauth-clients";
import { OrganizationsClient } from "calcom_ts/resources/organizations";
import { ProviderClient } from "calcom_ts/resources/provider";
import { SchedulesClient } from "calcom_ts/resources/schedules";
import { SelectedCalendarsClient } from "calcom_ts/resources/selected-calendars";
import { SlotsClient } from "calcom_ts/resources/slots";
import { StripeClient } from "calcom_ts/resources/stripe";
import { TeamsClient } from "calcom_ts/resources/teams";
import { TimezonesClient } from "calcom_ts/resources/timezones";
import { WebhooksClient } from "calcom_ts/resources/webhooks";

export interface ClientOptions {
  baseUrl?: string;
  environment?: Environment;
  timeout?: number;
  apiKey?: string;
}

export class Client {
  protected _client: CoreClient;
  conferencing: ConferencingClient;
  eventTypes: EventTypesClient;
  oauthClients: OauthClientsClient;
  organizations: OrganizationsClient;
  schedules: SchedulesClient;
  selectedCalendars: SelectedCalendarsClient;
  slots: SlotsClient;
  teams: TeamsClient;
  webhooks: WebhooksClient;
  bookings: BookingsClient;
  calendars: CalendarsClient;
  me: MeClient;
  provider: ProviderClient;
  stripe: StripeClient;
  timezones: TimezonesClient;
  apiKeys: ApiKeysClient;
  oauth: OauthClient;
  destinationCalendars: DestinationCalendarsClient;

  constructor(opts?: ClientOptions) {
    const baseUrl = opts?.baseUrl ?? opts?.environment ?? Environment.Default;
    this._client = new CoreClient({ baseUrl, timeout: opts?.timeout });
    this._client.registerAuth("bearerAuth", new AuthBearer(opts?.apiKey));

    this.conferencing = new ConferencingClient(this._client);
    this.eventTypes = new EventTypesClient(this._client);
    this.oauthClients = new OauthClientsClient(this._client);
    this.organizations = new OrganizationsClient(this._client);
    this.schedules = new SchedulesClient(this._client);
    this.selectedCalendars = new SelectedCalendarsClient(this._client);
    this.slots = new SlotsClient(this._client);
    this.teams = new TeamsClient(this._client);
    this.webhooks = new WebhooksClient(this._client);
    this.bookings = new BookingsClient(this._client);
    this.calendars = new CalendarsClient(this._client);
    this.me = new MeClient(this._client);
    this.provider = new ProviderClient(this._client);
    this.stripe = new StripeClient(this._client);
    this.timezones = new TimezonesClient(this._client);
    this.apiKeys = new ApiKeysClient(this._client);
    this.oauth = new OauthClient(this._client);
    this.destinationCalendars = new DestinationCalendarsClient(this._client);
  }
}
