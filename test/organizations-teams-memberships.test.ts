import Client, { Environment } from "calcom_ts";

describe("tests client.organizations.teams.memberships.delete", () => {
  test.concurrent(
    "DELETE /v2/organizations/{orgId}/teams/{teamId}/memberships/{membershipId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.teams.memberships
          .delete({ membershipId: 123.45, orgId: 123.45, teamId: 123.45 })
          .asResponse(),
        client.organizations.teams.memberships.delete({
          membershipId: 123.45,
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

describe("tests client.organizations.teams.memberships.list", () => {
  test.concurrent(
    "GET /v2/organizations/{orgId}/teams/{teamId}/memberships | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.teams.memberships
          .list({ orgId: 123.45, teamId: 123.45 })
          .asResponse(),
        client.organizations.teams.memberships.list({
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

describe("tests client.organizations.teams.memberships.get", () => {
  test.concurrent(
    "GET /v2/organizations/{orgId}/teams/{teamId}/memberships/{membershipId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.teams.memberships
          .get({ membershipId: 123.45, orgId: 123.45, teamId: 123.45 })
          .asResponse(),
        client.organizations.teams.memberships.get({
          membershipId: 123.45,
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

describe("tests client.organizations.teams.memberships.patch", () => {
  test.concurrent(
    "PATCH /v2/organizations/{orgId}/teams/{teamId}/memberships/{membershipId} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.teams.memberships
          .patch({ membershipId: 123.45, orgId: 123.45, teamId: 123.45 })
          .asResponse(),
        client.organizations.teams.memberships.patch({
          membershipId: 123.45,
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

describe("tests client.organizations.teams.memberships.create", () => {
  test.concurrent(
    "POST /v2/organizations/{orgId}/teams/{teamId}/memberships | testId: success_default | Success test with response schema validation. Expects status code 201",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.teams.memberships
          .create({
            role: "ADMIN",
            userId: 123.45,
            orgId: 123.45,
            teamId: 123.45,
          })
          .asResponse(),
        client.organizations.teams.memberships.create({
          role: "ADMIN",
          userId: 123.45,
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
