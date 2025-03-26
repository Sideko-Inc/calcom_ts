import Client, { Environment } from "calcom_ts";

describe("tests client.teams.eventTypes.delete", () => {
  test.concurrent(
    "DELETE /v2/teams/{teamId}/event-types/{eventTypeId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.teams.eventTypes
          .delete({ eventTypeId: 123.45, teamId: 123.45 })
          .asResponse(),
        client.teams.eventTypes.delete({ eventTypeId: 123.45, teamId: 123.45 }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.teams.eventTypes.list", () => {
  test.concurrent(
    "GET /v2/teams/{teamId}/event-types | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.teams.eventTypes.list({ teamId: 123.45 }).asResponse(),
        client.teams.eventTypes.list({ teamId: 123.45 }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.teams.eventTypes.get", () => {
  test.concurrent(
    "GET /v2/teams/{teamId}/event-types/{eventTypeId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.teams.eventTypes
          .get({ eventTypeId: 123.45, teamId: 123.45 })
          .asResponse(),
        client.teams.eventTypes.get({ eventTypeId: 123.45, teamId: 123.45 }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.teams.eventTypes.patch", () => {
  test.concurrent(
    "PATCH /v2/teams/{teamId}/event-types/{eventTypeId} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.teams.eventTypes
          .patch({ eventTypeId: 123.45, teamId: 123.45 })
          .asResponse(),
        client.teams.eventTypes.patch({ eventTypeId: 123.45, teamId: 123.45 }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.teams.eventTypes.create", () => {
  test.concurrent(
    "POST /v2/teams/{teamId}/event-types | testId: success_default | Success test with response schema validation. Expects status code 201",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.teams.eventTypes
          .create({
            hosts: [{ userId: 123.45 }],
            lengthInMinutes: 60.0,
            schedulingType: "collective",
            slug: "learn-the-secrets-of-masterchief",
            title: "Learn the secrets of masterchief!",
            teamId: 123.45,
          })
          .asResponse(),
        client.teams.eventTypes.create({
          hosts: [{ userId: 123.45 }],
          lengthInMinutes: 60.0,
          schedulingType: "collective",
          slug: "learn-the-secrets-of-masterchief",
          title: "Learn the secrets of masterchief!",
          teamId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(201); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
