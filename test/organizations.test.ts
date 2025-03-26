import Client, { Environment } from "calcom_ts";

describe("tests client.organizations.delete", () => {
  test.concurrent(
    "DELETE /v2/organizations/{orgId}/organizations/{managedOrganizationId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations
          .delete({ managedOrganizationId: 123.45, orgId: 123.45 })
          .asResponse(),
        client.organizations.delete({
          managedOrganizationId: 123.45,
          orgId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.list", () => {
  test.concurrent(
    "GET /v2/organizations/{orgId}/organizations | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.list({ orgId: 123.45 }).asResponse(),
        client.organizations.list({ orgId: 123.45 }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.get", () => {
  test.concurrent(
    "GET /v2/organizations/{orgId}/organizations/{managedOrganizationId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations
          .get({ managedOrganizationId: 123.45, orgId: 123.45 })
          .asResponse(),
        client.organizations.get({
          managedOrganizationId: 123.45,
          orgId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.patch", () => {
  test.concurrent(
    "PATCH /v2/organizations/{orgId}/organizations/{managedOrganizationId} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations
          .patch({ managedOrganizationId: 123.45, orgId: 123.45 })
          .asResponse(),
        client.organizations.patch({
          managedOrganizationId: 123.45,
          orgId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.create", () => {
  test.concurrent(
    "POST /v2/organizations/{orgId}/organizations | testId: success_default | Success test with response schema validation. Expects status code 201",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations
          .create({ name: "CalTeam", orgId: 123.45 })
          .asResponse(),
        client.organizations.create({ name: "CalTeam", orgId: 123.45 }),
      ]);
      expect(rawResponse.status).toBe(201); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
