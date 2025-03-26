
# Cal.com API v2 Typescript SDK

### Example Client Initialization

```typescript
import Client from "calcom_ts";

const client = new Client({ apiKey: process.env["API_TOKEN"]!! });
```

## Module Documentation and Snippets

### [apiKeys.refresh](src/resources/api-keys/refresh/README.md)

* [create](src/resources/api-keys/refresh/README.md#create) - Refresh API Key

### [bookings](src/resources/bookings/README.md)

* [cancel](src/resources/bookings/README.md#cancel) - Cancel a booking
* [confirm](src/resources/bookings/README.md#confirm) - Confirm booking that requires a confirmation
* [create](src/resources/bookings/README.md#create) - Create a booking
* [decline](src/resources/bookings/README.md#decline) - Decline booking that requires a confirmation
* [get](src/resources/bookings/README.md#get) - Get a booking
* [list](src/resources/bookings/README.md#list) - Get all bookings
* [mark_absent](src/resources/bookings/README.md#mark_absent) - Mark a booking absence
* [reassign](src/resources/bookings/README.md#reassign) - Automatically reassign booking to a new host
* [reassign_to_user](src/resources/bookings/README.md#reassign_to_user) - Reassign a booking to a specific user
* [reschedule](src/resources/bookings/README.md#reschedule) - Reschedule a booking

### [bookings.calendarLinks](src/resources/bookings/calendar-links/README.md)

* [list](src/resources/bookings/calendar-links/README.md#list) - Get 'Add to Calendar' links for a booking

### [calendars](src/resources/calendars/README.md)

* [check](src/resources/calendars/README.md#check) - Check a calendar connection
* [connect](src/resources/calendars/README.md#connect) - Get oAuth connect URL
* [disconnect](src/resources/calendars/README.md#disconnect) - Disconnect a calendar
* [get_busy](src/resources/calendars/README.md#get_busy) - Get busy times
* [list](src/resources/calendars/README.md#list) - Get all calendars
* [save](src/resources/calendars/README.md#save) - Save an oAuth calendar credentials

### [calendars.credentials](src/resources/calendars/credentials/README.md)

* [create](src/resources/calendars/credentials/README.md#create) - Sync credentials

### [calendars.icsFeed](src/resources/calendars/ics-feed/README.md)

* [check](src/resources/calendars/ics-feed/README.md#check) - Check an ICS feed
* [save](src/resources/calendars/ics-feed/README.md#save) - Save an ICS feed

### [conferencing](src/resources/conferencing/README.md)

* [connect](src/resources/conferencing/README.md#connect) - Connect your conferencing application
* [default](src/resources/conferencing/README.md#default) - Set your default conferencing application
* [disconnect](src/resources/conferencing/README.md#disconnect) - Disconnect your conferencing application
* [list](src/resources/conferencing/README.md#list) - List your conferencing applications
* [list_1](src/resources/conferencing/README.md#list_1) - Get your default conferencing application

### [conferencing.oauth](src/resources/conferencing/oauth/README.md)

* [auth_url](src/resources/conferencing/oauth/README.md#auth_url) - Get OAuth conferencing app auth url
* [callback](src/resources/conferencing/oauth/README.md#callback) - conferencing apps oauths callback

### [destinationCalendars](src/resources/destination-calendars/README.md)

* [update](src/resources/destination-calendars/README.md#update) - Update destination calendars

### [eventTypes](src/resources/event-types/README.md)

* [create](src/resources/event-types/README.md#create) - Create an event type
* [delete](src/resources/event-types/README.md#delete) - Delete an event type
* [get](src/resources/event-types/README.md#get) - Get an event type
* [list](src/resources/event-types/README.md#list) - Get all event types
* [patch](src/resources/event-types/README.md#patch) - Update an event type

### [eventTypes.webhooks](src/resources/event-types/webhooks/README.md)

* [create](src/resources/event-types/webhooks/README.md#create) - Create a webhook
* [delete](src/resources/event-types/webhooks/README.md#delete) - Delete a webhook
* [delete_all](src/resources/event-types/webhooks/README.md#delete_all) - Delete all webhooks
* [get](src/resources/event-types/webhooks/README.md#get) - Get a webhook
* [list](src/resources/event-types/webhooks/README.md#list) - Get all webhooks
* [patch](src/resources/event-types/webhooks/README.md#patch) - Update a webhook

### [me](src/resources/me/README.md)

* [get](src/resources/me/README.md#get) - Get my profile
* [patch](src/resources/me/README.md#patch) - Update my profile

### [oauth](src/resources/oauth/README.md)

* [refresh](src/resources/oauth/README.md#refresh) - Refresh managed user tokens

### [oauthClients](src/resources/oauth-clients/README.md)

* [create](src/resources/oauth-clients/README.md#create) - POST /v2/oauth-clients
* [delete](src/resources/oauth-clients/README.md#delete) - DELETE /v2/oauth-clients/{clientId}
* [get](src/resources/oauth-clients/README.md#get) - GET /v2/oauth-clients/{clientId}
* [list](src/resources/oauth-clients/README.md#list) - GET /v2/oauth-clients
* [patch](src/resources/oauth-clients/README.md#patch) - PATCH /v2/oauth-clients/{clientId}

### [oauthClients.managedUsers](src/resources/oauth-clients/managed-users/README.md)

* [list](src/resources/oauth-clients/managed-users/README.md#list) - GET /v2/oauth-clients/{clientId}/managed-users

### [oauthClients.users](src/resources/oauth-clients/users/README.md)

* [create](src/resources/oauth-clients/users/README.md#create) - Create a managed user
* [delete](src/resources/oauth-clients/users/README.md#delete) - Delete a managed user
* [get](src/resources/oauth-clients/users/README.md#get) - Get a managed user
* [list](src/resources/oauth-clients/users/README.md#list) - Get all managed users
* [patch](src/resources/oauth-clients/users/README.md#patch) - Update a managed user

### [oauthClients.users.forceRefresh](src/resources/oauth-clients/users/force-refresh/README.md)

* [create](src/resources/oauth-clients/users/force-refresh/README.md#create) - Force refresh tokens

### [oauthClients.webhooks](src/resources/oauth-clients/webhooks/README.md)

* [create](src/resources/oauth-clients/webhooks/README.md#create) - Create a webhook
* [delete](src/resources/oauth-clients/webhooks/README.md#delete) - Delete a webhook
* [delete_all](src/resources/oauth-clients/webhooks/README.md#delete_all) - Delete all webhooks
* [get](src/resources/oauth-clients/webhooks/README.md#get) - Get a webhook
* [list](src/resources/oauth-clients/webhooks/README.md#list) - Get all webhooks
* [patch](src/resources/oauth-clients/webhooks/README.md#patch) - Update a webhook

### [organizations](src/resources/organizations/README.md)

* [create](src/resources/organizations/README.md#create) - Create an organization within an organization
* [delete](src/resources/organizations/README.md#delete) - Delete an organization within an organization
* [get](src/resources/organizations/README.md#get) - Get an organization within an organization
* [list](src/resources/organizations/README.md#list) - Get all organizations within an organization
* [patch](src/resources/organizations/README.md#patch) - Update an organization within an organization

### [organizations.attributes](src/resources/organizations/attributes/README.md)

* [create](src/resources/organizations/attributes/README.md#create) - Create an attribute
* [delete](src/resources/organizations/attributes/README.md#delete) - Delete an attribute
* [get](src/resources/organizations/attributes/README.md#get) - Get an attribute
* [list](src/resources/organizations/attributes/README.md#list) - Get all attributes
* [patch](src/resources/organizations/attributes/README.md#patch) - Update an attribute

### [organizations.attributes.options](src/resources/organizations/attributes/options/README.md)

* [create](src/resources/organizations/attributes/options/README.md#create) - Create an attribute option
* [create_to_user](src/resources/organizations/attributes/options/README.md#create_to_user) - Assign an attribute to a user
* [delete](src/resources/organizations/attributes/options/README.md#delete) - Delete an attribute option
* [delete_from_user](src/resources/organizations/attributes/options/README.md#delete_from_user) - Unassign an attribute from a user
* [get](src/resources/organizations/attributes/options/README.md#get) - Get all attribute options for a user
* [list](src/resources/organizations/attributes/options/README.md#list) - Get all attribute options
* [patch](src/resources/organizations/attributes/options/README.md#patch) - Update an attribute option

### [organizations.delegationCredentials](src/resources/organizations/delegation-credentials/README.md)

* [create](src/resources/organizations/delegation-credentials/README.md#create) - Save delegation credentials for your organization.
* [patch](src/resources/organizations/delegation-credentials/README.md#patch) - Update delegation credentials of your organization.

### [organizations.memberships](src/resources/organizations/memberships/README.md)

* [create](src/resources/organizations/memberships/README.md#create) - Create a membership
* [delete](src/resources/organizations/memberships/README.md#delete) - Delete a membership
* [get](src/resources/organizations/memberships/README.md#get) - Get a membership
* [list](src/resources/organizations/memberships/README.md#list) - Get all memberships
* [patch](src/resources/organizations/memberships/README.md#patch) - Update a membership

### [organizations.ooo](src/resources/organizations/ooo/README.md)

* [get](src/resources/organizations/ooo/README.md#get) - Get all OOO entries of org users

### [organizations.schedules](src/resources/organizations/schedules/README.md)

* [list](src/resources/organizations/schedules/README.md#list) - Get all schedules

### [organizations.teams](src/resources/organizations/teams/README.md)

* [create](src/resources/organizations/teams/README.md#create) - Create a team
* [delete](src/resources/organizations/teams/README.md#delete) - Delete a team
* [get](src/resources/organizations/teams/README.md#get) - Get a team
* [list](src/resources/organizations/teams/README.md#list) - Get all teams
* [patch](src/resources/organizations/teams/README.md#patch) - Update a team

### [organizations.teams.bookings](src/resources/organizations/teams/bookings/README.md)

* [list](src/resources/organizations/teams/bookings/README.md#list) - Get organization team bookings

### [organizations.teams.eventTypes](src/resources/organizations/teams/event-types/README.md)

* [create](src/resources/organizations/teams/event-types/README.md#create) - Create an event type
* [create_phone_call](src/resources/organizations/teams/event-types/README.md#create_phone_call) - Create a phone call
* [delete](src/resources/organizations/teams/event-types/README.md#delete) - Delete a team event type
* [get_one](src/resources/organizations/teams/event-types/README.md#get_one) - Get an event type
* [list](src/resources/organizations/teams/event-types/README.md#list) - Get a team event type
* [list_for_team](src/resources/organizations/teams/event-types/README.md#list_for_team) - Get all team event types
* [patch](src/resources/organizations/teams/event-types/README.md#patch) - Update a team event type

### [organizations.teams.me](src/resources/organizations/teams/me/README.md)

* [get](src/resources/organizations/teams/me/README.md#get) - Get teams membership for user

### [organizations.teams.memberships](src/resources/organizations/teams/memberships/README.md)

* [create](src/resources/organizations/teams/memberships/README.md#create) - Create a membership
* [delete](src/resources/organizations/teams/memberships/README.md#delete) - Delete a membership
* [get](src/resources/organizations/teams/memberships/README.md#get) - Get a membership
* [list](src/resources/organizations/teams/memberships/README.md#list) - Get all memberships
* [patch](src/resources/organizations/teams/memberships/README.md#patch) - Update a membership

### [organizations.teams.routingForms.responses](src/resources/organizations/teams/routing-forms/responses/README.md)

* [list](src/resources/organizations/teams/routing-forms/responses/README.md#list) - Get routing form responses

### [organizations.teams.users.schedules](src/resources/organizations/teams/users/schedules/README.md)

* [list](src/resources/organizations/teams/users/schedules/README.md#list) - Get schedules of a team member

### [organizations.users](src/resources/organizations/users/README.md)

* [create](src/resources/organizations/users/README.md#create) - Create a user
* [delete](src/resources/organizations/users/README.md#delete) - Delete a user
* [list](src/resources/organizations/users/README.md#list) - Get all users
* [patch](src/resources/organizations/users/README.md#patch) - Update a user

### [organizations.users.ooo](src/resources/organizations/users/ooo/README.md)

* [create](src/resources/organizations/users/ooo/README.md#create) - Create an ooo entry for user
* [delete](src/resources/organizations/users/ooo/README.md#delete) - Delete ooo entry of a user
* [list](src/resources/organizations/users/ooo/README.md#list) - Get all ooo entries of a user
* [patch](src/resources/organizations/users/ooo/README.md#patch) - Update ooo entry of a user

### [organizations.users.schedules](src/resources/organizations/users/schedules/README.md)

* [create](src/resources/organizations/users/schedules/README.md#create) - Create a schedule
* [delete](src/resources/organizations/users/schedules/README.md#delete) - Delete a schedule
* [get](src/resources/organizations/users/schedules/README.md#get) - Get a schedule
* [list](src/resources/organizations/users/schedules/README.md#list) - Get all schedules
* [patch](src/resources/organizations/users/schedules/README.md#patch) - Update a schedule

### [organizations.webhooks](src/resources/organizations/webhooks/README.md)

* [create](src/resources/organizations/webhooks/README.md#create) - Create a webhook
* [delete](src/resources/organizations/webhooks/README.md#delete) - Delete a webhook
* [get](src/resources/organizations/webhooks/README.md#get) - Get a webhook
* [list](src/resources/organizations/webhooks/README.md#list) - Get all webhooks
* [patch](src/resources/organizations/webhooks/README.md#patch) - Update a webhook

### [provider](src/resources/provider/README.md)

* [get](src/resources/provider/README.md#get) - Get a provider
* [verify_token](src/resources/provider/README.md#verify_token) - Verify an access token

### [schedules](src/resources/schedules/README.md)

* [create](src/resources/schedules/README.md#create) - Create a schedule
* [delete](src/resources/schedules/README.md#delete) - Delete a schedule
* [get](src/resources/schedules/README.md#get) - Get a schedule
* [list](src/resources/schedules/README.md#list) - Get all schedules
* [patch](src/resources/schedules/README.md#patch) - Update a schedule

### [schedules.default](src/resources/schedules/default-resource/README.md)

* [list](src/resources/schedules/default-resource/README.md#list) - Get default schedule

### [selectedCalendars](src/resources/selected-calendars/README.md)

* [create](src/resources/selected-calendars/README.md#create) - Add a selected calendar
* [delete](src/resources/selected-calendars/README.md#delete) - Delete a selected calendar

### [slots](src/resources/slots/README.md)

* [list](src/resources/slots/README.md#list) - Find out when is an event type ready to be booked.

### [slots.reservations](src/resources/slots/reservations/README.md)

* [create](src/resources/slots/reservations/README.md#create) - Reserve a slot
* [delete](src/resources/slots/reservations/README.md#delete) - DELETE /v2/slots/reservations/{uid}
* [get](src/resources/slots/reservations/README.md#get) - Get reserved slot
* [patch](src/resources/slots/reservations/README.md#patch) - Updated reserved a slot

### [stripe](src/resources/stripe/README.md)

* [save](src/resources/stripe/README.md#save) - Save stripe credentials

### [stripe.check](src/resources/stripe/check/README.md)

* [check](src/resources/stripe/check/README.md#check) - Check stripe connection
* [get](src/resources/stripe/check/README.md#get) - Check team stripe connection

### [stripe.connect](src/resources/stripe/connect/README.md)

* [redirect](src/resources/stripe/connect/README.md#redirect) - Get stripe connect URL

### [teams](src/resources/teams/README.md)

* [create](src/resources/teams/README.md#create) - Create a team
* [delete](src/resources/teams/README.md#delete) - Delete a team
* [get](src/resources/teams/README.md#get) - Get a team
* [list](src/resources/teams/README.md#list) - Get teams
* [patch](src/resources/teams/README.md#patch) - Update a team

### [teams.eventTypes](src/resources/teams/event-types/README.md)

* [create](src/resources/teams/event-types/README.md#create) - Create an event type
* [delete](src/resources/teams/event-types/README.md#delete) - Delete a team event type
* [get](src/resources/teams/event-types/README.md#get) - Get an event type
* [list](src/resources/teams/event-types/README.md#list) - Get a team event type
* [patch](src/resources/teams/event-types/README.md#patch) - Update a team event type

### [teams.eventTypes.createPhoneCall](src/resources/teams/event-types/create-phone-call/README.md)

* [create](src/resources/teams/event-types/create-phone-call/README.md#create) - Create a phone call

### [teams.memberships](src/resources/teams/memberships/README.md)

* [create](src/resources/teams/memberships/README.md#create) - Create a membership
* [delete](src/resources/teams/memberships/README.md#delete) - Delete a membership
* [get](src/resources/teams/memberships/README.md#get) - Get a membership
* [list](src/resources/teams/memberships/README.md#list) - Get all memberships
* [patch](src/resources/teams/memberships/README.md#patch) - Create a membership

### [timezones](src/resources/timezones/README.md)

* [list](src/resources/timezones/README.md#list) - Get all timezones

### [webhooks](src/resources/webhooks/README.md)

* [create](src/resources/webhooks/README.md#create) - Create a webhook
* [delete](src/resources/webhooks/README.md#delete) - Delete a webhook
* [get](src/resources/webhooks/README.md#get) - Get a webhook
* [list](src/resources/webhooks/README.md#list) - Get all webooks
* [patch](src/resources/webhooks/README.md#patch) - Update a webhook

<!-- MODULE DOCS END -->
