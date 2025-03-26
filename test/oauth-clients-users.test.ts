import Client, { Environment } from "calcom_ts";

describe("tests client.oauthClients.users.delete", () => {
  test.concurrent(
    "DELETE /v2/oauth-clients/{clientId}/users/{userId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.oauthClients.users
          .delete({ clientId: "string", userId: 123.45 })
          .asResponse(),
        client.oauthClients.users.delete({
          clientId: "string",
          userId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.oauthClients.users.list", () => {
  test.concurrent(
    "GET /v2/oauth-clients/{clientId}/users | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.oauthClients.users.list({ clientId: "string" }).asResponse(),
        client.oauthClients.users.list({ clientId: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.oauthClients.users.get", () => {
  test.concurrent(
    "GET /v2/oauth-clients/{clientId}/users/{userId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.oauthClients.users
          .get({ clientId: "string", userId: 123.45 })
          .asResponse(),
        client.oauthClients.users.get({ clientId: "string", userId: 123.45 }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.oauthClients.users.patch", () => {
  test.concurrent(
    "PATCH /v2/oauth-clients/{clientId}/users/{userId} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.oauthClients.users
          .patch({ clientId: "string", userId: 123.45 })
          .asResponse(),
        client.oauthClients.users.patch({ clientId: "string", userId: 123.45 }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.oauthClients.users.create", () => {
  test.concurrent(
    "POST /v2/oauth-clients/{clientId}/users | testId: success_default | Success test with response schema validation. Expects status code 201",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.oauthClients.users
          .create({
            email: "alice@example.com",
            name: "Alice Smith",
            clientId: "string",
          })
          .asResponse(),
        client.oauthClients.users.create({
          email: "alice@example.com",
          name: "Alice Smith",
          clientId: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(201); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
