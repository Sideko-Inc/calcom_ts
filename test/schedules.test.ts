import Client, { Environment } from "calcom_ts";

describe("tests client.schedules.delete", () => {
  test.concurrent(
    "DELETE /v2/schedules/{scheduleId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.schedules
          .delete({ scheduleId: 123.45, calApiVersion: "string" })
          .asResponse(),
        client.schedules.delete({
          scheduleId: 123.45,
          calApiVersion: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.schedules.list", () => {
  test.concurrent(
    "GET /v2/schedules | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.schedules.list({ calApiVersion: "string" }).asResponse(),
        client.schedules.list({ calApiVersion: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.schedules.get", () => {
  test.concurrent(
    "GET /v2/schedules/{scheduleId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.schedules
          .get({ scheduleId: 123.45, calApiVersion: "string" })
          .asResponse(),
        client.schedules.get({ scheduleId: 123.45, calApiVersion: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.schedules.patch", () => {
  test.concurrent(
    "PATCH /v2/schedules/{scheduleId} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.schedules
          .patch({ scheduleId: "string", calApiVersion: "string" })
          .asResponse(),
        client.schedules.patch({
          scheduleId: "string",
          calApiVersion: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.schedules.create", () => {
  test.concurrent(
    "POST /v2/schedules | testId: success_default | Success test with response schema validation. Expects status code 201",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.schedules
          .create({
            isDefault: true,
            name: "Catch up hours",
            timeZone: "Europe/Rome",
            calApiVersion: "string",
          })
          .asResponse(),
        client.schedules.create({
          isDefault: true,
          name: "Catch up hours",
          timeZone: "Europe/Rome",
          calApiVersion: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(201); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
