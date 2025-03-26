import Client, { Environment } from "calcom_ts";

describe("tests client.eventTypes.delete", () => {
  test.concurrent(
    "DELETE /v2/event-types/{eventTypeId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.eventTypes
          .delete({ eventTypeId: 123.45, calApiVersion: "string" })
          .asResponse(),
        client.eventTypes.delete({
          eventTypeId: 123.45,
          calApiVersion: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.eventTypes.list", () => {
  test.concurrent(
    "GET /v2/event-types | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.eventTypes.list({ calApiVersion: "string" }).asResponse(),
        client.eventTypes.list({ calApiVersion: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.eventTypes.get", () => {
  test.concurrent(
    "GET /v2/event-types/{eventTypeId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.eventTypes
          .get({ eventTypeId: "string", calApiVersion: "string" })
          .asResponse(),
        client.eventTypes.get({
          eventTypeId: "string",
          calApiVersion: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.eventTypes.patch", () => {
  test.concurrent(
    "PATCH /v2/event-types/{eventTypeId} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.eventTypes
          .patch({ eventTypeId: 123.45, calApiVersion: "string" })
          .asResponse(),
        client.eventTypes.patch({
          eventTypeId: 123.45,
          calApiVersion: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.eventTypes.create", () => {
  test.concurrent(
    "POST /v2/event-types | testId: success_default | Success test with response schema validation. Expects status code 201",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.eventTypes
          .create({
            lengthInMinutes: 60.0,
            slug: "learn-the-secrets-of-masterchief",
            title: "Learn the secrets of masterchief!",
            calApiVersion: "string",
          })
          .asResponse(),
        client.eventTypes.create({
          lengthInMinutes: 60.0,
          slug: "learn-the-secrets-of-masterchief",
          title: "Learn the secrets of masterchief!",
          calApiVersion: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(201); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
