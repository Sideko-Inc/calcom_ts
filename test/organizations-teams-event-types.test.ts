import Client, { Environment } from "calcom_ts";

describe("tests client.organizations.teams.eventTypes.delete", () => {
  test.concurrent(
    "DELETE /v2/organizations/{orgId}/teams/{teamId}/event-types/{eventTypeId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.teams.eventTypes
          .delete({ eventTypeId: 123.45, orgId: 123.45, teamId: 123.45 })
          .asResponse(),
        client.organizations.teams.eventTypes.delete({
          eventTypeId: 123.45,
          orgId: 123.45,
          teamId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.teams.eventTypes.listForTeam", () => {
  test.concurrent(
    "GET /v2/organizations/{orgId}/teams/event-types | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.teams.eventTypes
          .listForTeam({ orgId: 123.45 })
          .asResponse(),
        client.organizations.teams.eventTypes.listForTeam({ orgId: 123.45 }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.teams.eventTypes.list", () => {
  test.concurrent(
    "GET /v2/organizations/{orgId}/teams/{teamId}/event-types | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.teams.eventTypes
          .list({ orgId: 123.45, teamId: 123.45 })
          .asResponse(),
        client.organizations.teams.eventTypes.list({
          orgId: 123.45,
          teamId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.teams.eventTypes.getOne", () => {
  test.concurrent(
    "GET /v2/organizations/{orgId}/teams/{teamId}/event-types/{eventTypeId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.teams.eventTypes
          .getOne({ eventTypeId: 123.45, orgId: 123.45, teamId: 123.45 })
          .asResponse(),
        client.organizations.teams.eventTypes.getOne({
          eventTypeId: 123.45,
          orgId: 123.45,
          teamId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.teams.eventTypes.patch", () => {
  test.concurrent(
    "PATCH /v2/organizations/{orgId}/teams/{teamId}/event-types/{eventTypeId} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.teams.eventTypes
          .patch({ eventTypeId: 123.45, orgId: 123.45, teamId: 123.45 })
          .asResponse(),
        client.organizations.teams.eventTypes.patch({
          eventTypeId: 123.45,
          orgId: 123.45,
          teamId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.teams.eventTypes.create", () => {
  test.concurrent(
    "POST /v2/organizations/{orgId}/teams/{teamId}/event-types | testId: success_default | Success test with response schema validation. Expects status code 201",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.teams.eventTypes
          .create({
            hosts: [{ userId: 123.45 }],
            lengthInMinutes: 60.0,
            schedulingType: "collective",
            slug: "learn-the-secrets-of-masterchief",
            title: "Learn the secrets of masterchief!",
            orgId: 123.45,
            teamId: 123.45,
          })
          .asResponse(),
        client.organizations.teams.eventTypes.create({
          hosts: [{ userId: 123.45 }],
          lengthInMinutes: 60.0,
          schedulingType: "collective",
          slug: "learn-the-secrets-of-masterchief",
          title: "Learn the secrets of masterchief!",
          orgId: 123.45,
          teamId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(201); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.teams.eventTypes.createPhoneCall", () => {
  test.concurrent(
    "POST /v2/organizations/{orgId}/teams/{teamId}/event-types/{eventTypeId}/create-phone-call | testId: success_default | Success test with response schema validation. Expects status code 201",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.teams.eventTypes
          .createPhoneCall({
            calApiKey: "string",
            enabled: {},
            numberToCall: "string",
            templateType: "CHECK_IN_APPOINTMENT",
            yourPhoneNumber: "string",
            eventTypeId: 123.45,
            orgId: 123.45,
            teamId: 123.45,
          })
          .asResponse(),
        client.organizations.teams.eventTypes.createPhoneCall({
          calApiKey: "string",
          enabled: {},
          numberToCall: "string",
          templateType: "CHECK_IN_APPOINTMENT",
          yourPhoneNumber: "string",
          eventTypeId: 123.45,
          orgId: 123.45,
          teamId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(201); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
