import Client, { Environment } from "calcom_ts";

describe("tests client.oauthClients.delete", () => {
  test.concurrent(
    "DELETE /v2/oauth-clients/{clientId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.oauthClients.delete({ clientId: "string" }).asResponse(),
        client.oauthClients.delete({ clientId: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.oauthClients.list", () => {
  test.concurrent(
    "GET /v2/oauth-clients | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.oauthClients.list().asResponse(),
        client.oauthClients.list(),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.oauthClients.get", () => {
  test.concurrent(
    "GET /v2/oauth-clients/{clientId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.oauthClients.get({ clientId: "string" }).asResponse(),
        client.oauthClients.get({ clientId: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.oauthClients.patch", () => {
  test.concurrent(
    "PATCH /v2/oauth-clients/{clientId} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.oauthClients.patch({ clientId: "string" }).asResponse(),
        client.oauthClients.patch({ clientId: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.oauthClients.create", () => {
  test.concurrent(
    "POST /v2/oauth-clients | testId: success_default | Success test with response schema validation. Expects status code 201",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.oauthClients
          .create({
            name: "string",
            permissions: ["*"],
            redirectUris: ["string"],
          })
          .asResponse(),
        client.oauthClients.create({
          name: "string",
          permissions: ["*"],
          redirectUris: ["string"],
        }),
      ]);
      expect(rawResponse.status).toBe(201); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
