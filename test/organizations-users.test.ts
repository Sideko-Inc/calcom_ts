import Client, { Environment } from "calcom_ts";

describe("tests client.organizations.users.delete", () => {
  test.concurrent(
    "DELETE /v2/organizations/{orgId}/users/{userId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.users
          .delete({ orgId: 123.45, userId: 123.45 })
          .asResponse(),
        client.organizations.users.delete({ orgId: 123.45, userId: 123.45 }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.users.list", () => {
  test.concurrent(
    "GET /v2/organizations/{orgId}/users | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.users.list({ orgId: 123.45 }).asResponse(),
        client.organizations.users.list({ orgId: 123.45 }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.users.patch", () => {
  test.concurrent(
    "PATCH /v2/organizations/{orgId}/users/{userId} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.users
          .patch({ data: {}, orgId: 123.45, userId: 123.45 })
          .asResponse(),
        client.organizations.users.patch({
          data: {},
          orgId: 123.45,
          userId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.users.create", () => {
  test.concurrent(
    "POST /v2/organizations/{orgId}/users | testId: success_default | Success test with response schema validation. Expects status code 201",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.users
          .create({ email: "user@example.com", orgId: 123.45 })
          .asResponse(),
        client.organizations.users.create({
          email: "user@example.com",
          orgId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(201); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
