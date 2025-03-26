import Client, { Environment } from "calcom_ts";

describe("tests client.eventTypes.webhooks.deleteAll", () => {
  test.concurrent(
    "DELETE /v2/event-types/{eventTypeId}/webhooks | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.eventTypes.webhooks
          .deleteAll({ eventTypeId: 123.45 })
          .asResponse(),
        client.eventTypes.webhooks.deleteAll({ eventTypeId: 123.45 }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.eventTypes.webhooks.delete", () => {
  test.concurrent(
    "DELETE /v2/event-types/{eventTypeId}/webhooks/{webhookId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.eventTypes.webhooks
          .delete({ eventTypeId: 123.45, webhookId: "string" })
          .asResponse(),
        client.eventTypes.webhooks.delete({
          eventTypeId: 123.45,
          webhookId: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.eventTypes.webhooks.list", () => {
  test.concurrent(
    "GET /v2/event-types/{eventTypeId}/webhooks | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.eventTypes.webhooks.list({ eventTypeId: 123.45 }).asResponse(),
        client.eventTypes.webhooks.list({ eventTypeId: 123.45 }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.eventTypes.webhooks.get", () => {
  test.concurrent(
    "GET /v2/event-types/{eventTypeId}/webhooks/{webhookId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.eventTypes.webhooks
          .get({ eventTypeId: 123.45, webhookId: "string" })
          .asResponse(),
        client.eventTypes.webhooks.get({
          eventTypeId: 123.45,
          webhookId: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.eventTypes.webhooks.patch", () => {
  test.concurrent(
    "PATCH /v2/event-types/{eventTypeId}/webhooks/{webhookId} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.eventTypes.webhooks
          .patch({ eventTypeId: 123.45, webhookId: "string" })
          .asResponse(),
        client.eventTypes.webhooks.patch({
          eventTypeId: 123.45,
          webhookId: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.eventTypes.webhooks.create", () => {
  test.concurrent(
    "POST /v2/event-types/{eventTypeId}/webhooks | testId: success_default | Success test with response schema validation. Expects status code 201",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.eventTypes.webhooks
          .create({
            active: true,
            subscriberUrl: "string",
            triggers: "AFTER_GUESTS_CAL_VIDEO_NO_SHOW",
            eventTypeId: 123.45,
          })
          .asResponse(),
        client.eventTypes.webhooks.create({
          active: true,
          subscriberUrl: "string",
          triggers: "AFTER_GUESTS_CAL_VIDEO_NO_SHOW",
          eventTypeId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(201); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
