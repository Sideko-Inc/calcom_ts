import Client, { Environment } from "calcom_ts";

describe("tests client.oauthClients.webhooks.deleteAll", () => {
  test.concurrent(
    "DELETE /v2/oauth-clients/{clientId}/webhooks | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.oauthClients.webhooks
          .deleteAll({ clientId: "string" })
          .asResponse(),
        client.oauthClients.webhooks.deleteAll({ clientId: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.oauthClients.webhooks.delete", () => {
  test.concurrent(
    "DELETE /v2/oauth-clients/{clientId}/webhooks/{webhookId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.oauthClients.webhooks
          .delete({ clientId: "string", webhookId: "string" })
          .asResponse(),
        client.oauthClients.webhooks.delete({
          clientId: "string",
          webhookId: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.oauthClients.webhooks.list", () => {
  test.concurrent(
    "GET /v2/oauth-clients/{clientId}/webhooks | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.oauthClients.webhooks.list({ clientId: "string" }).asResponse(),
        client.oauthClients.webhooks.list({ clientId: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.oauthClients.webhooks.get", () => {
  test.concurrent(
    "GET /v2/oauth-clients/{clientId}/webhooks/{webhookId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.oauthClients.webhooks
          .get({ clientId: "string", webhookId: "string" })
          .asResponse(),
        client.oauthClients.webhooks.get({
          clientId: "string",
          webhookId: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.oauthClients.webhooks.patch", () => {
  test.concurrent(
    "PATCH /v2/oauth-clients/{clientId}/webhooks/{webhookId} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.oauthClients.webhooks
          .patch({ clientId: "string", webhookId: "string" })
          .asResponse(),
        client.oauthClients.webhooks.patch({
          clientId: "string",
          webhookId: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.oauthClients.webhooks.create", () => {
  test.concurrent(
    "POST /v2/oauth-clients/{clientId}/webhooks | testId: success_default | Success test with response schema validation. Expects status code 201",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.oauthClients.webhooks
          .create({
            active: true,
            subscriberUrl: "string",
            triggers: "AFTER_GUESTS_CAL_VIDEO_NO_SHOW",
            clientId: "string",
          })
          .asResponse(),
        client.oauthClients.webhooks.create({
          active: true,
          subscriberUrl: "string",
          triggers: "AFTER_GUESTS_CAL_VIDEO_NO_SHOW",
          clientId: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(201); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
