import Client, { Environment } from "calcom_ts";

describe("tests client.organizations.webhooks.delete", () => {
  test.concurrent(
    "DELETE /v2/organizations/{orgId}/webhooks/{webhookId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.webhooks
          .delete({ orgId: 123.45, webhookId: "string" })
          .asResponse(),
        client.organizations.webhooks.delete({
          orgId: 123.45,
          webhookId: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.webhooks.list", () => {
  test.concurrent(
    "GET /v2/organizations/{orgId}/webhooks | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.webhooks.list({ orgId: 123.45 }).asResponse(),
        client.organizations.webhooks.list({ orgId: 123.45 }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.webhooks.get", () => {
  test.concurrent(
    "GET /v2/organizations/{orgId}/webhooks/{webhookId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.webhooks
          .get({ orgId: 123.45, webhookId: "string" })
          .asResponse(),
        client.organizations.webhooks.get({
          orgId: 123.45,
          webhookId: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.webhooks.patch", () => {
  test.concurrent(
    "PATCH /v2/organizations/{orgId}/webhooks/{webhookId} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.webhooks
          .patch({ orgId: 123.45, webhookId: "string" })
          .asResponse(),
        client.organizations.webhooks.patch({
          orgId: 123.45,
          webhookId: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.webhooks.create", () => {
  test.concurrent(
    "POST /v2/organizations/{orgId}/webhooks | testId: success_default | Success test with response schema validation. Expects status code 201",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.webhooks
          .create({
            active: true,
            subscriberUrl: "string",
            triggers: "AFTER_GUESTS_CAL_VIDEO_NO_SHOW",
            orgId: 123.45,
          })
          .asResponse(),
        client.organizations.webhooks.create({
          active: true,
          subscriberUrl: "string",
          triggers: "AFTER_GUESTS_CAL_VIDEO_NO_SHOW",
          orgId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(201); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
