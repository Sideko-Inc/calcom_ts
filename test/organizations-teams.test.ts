import Client, { Environment } from "calcom_ts";

describe("tests client.organizations.teams.delete", () => {
  test.concurrent(
    "DELETE /v2/organizations/{orgId}/teams/{teamId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.teams
          .delete({ orgId: 123.45, teamId: 123.45 })
          .asResponse(),
        client.organizations.teams.delete({ orgId: 123.45, teamId: 123.45 }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.teams.list", () => {
  test.concurrent(
    "GET /v2/organizations/{orgId}/teams | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.teams.list({ orgId: 123.45 }).asResponse(),
        client.organizations.teams.list({ orgId: 123.45 }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.teams.get", () => {
  test.concurrent(
    "GET /v2/organizations/{orgId}/teams/{teamId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.teams
          .get({ orgId: 123.45, teamId: 123.45 })
          .asResponse(),
        client.organizations.teams.get({ orgId: 123.45, teamId: 123.45 }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.teams.patch", () => {
  test.concurrent(
    "PATCH /v2/organizations/{orgId}/teams/{teamId} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.teams
          .patch({ orgId: 123.45, teamId: 123.45 })
          .asResponse(),
        client.organizations.teams.patch({ orgId: 123.45, teamId: 123.45 }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.teams.create", () => {
  test.concurrent(
    "POST /v2/organizations/{orgId}/teams | testId: success_default | Success test with response schema validation. Expects status code 201",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.teams
          .create({ name: "CalTeam", orgId: 123.45, xCalClientId: "string" })
          .asResponse(),
        client.organizations.teams.create({
          name: "CalTeam",
          orgId: 123.45,
          xCalClientId: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(201); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
