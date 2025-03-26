import Client, { Environment } from "calcom_ts";

describe("tests client.calendars.list", () => {
  test.concurrent(
    "GET /v2/calendars | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.calendars.list().asResponse(),
        client.calendars.list(),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.calendars.getBusy", () => {
  test.concurrent(
    "GET /v2/calendars/busy-times | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.calendars
          .getBusy({
            credentialId: 123.45,
            externalId: "string",
            loggedInUsersTz: "string",
          })
          .asResponse(),
        client.calendars.getBusy({
          credentialId: 123.45,
          externalId: "string",
          loggedInUsersTz: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.calendars.check", () => {
  test.concurrent(
    "GET /v2/calendars/{calendar}/check | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.calendars.check({ calendar: "apple" }).asResponse(),
        client.calendars.check({ calendar: "apple" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.calendars.connect", () => {
  test.concurrent(
    "GET /v2/calendars/{calendar}/connect | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.calendars.connect({ calendar: "google" }).asResponse(),
        client.calendars.connect({ calendar: "google" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.calendars.save", () => {
  test.concurrent(
    "GET /v2/calendars/{calendar}/save | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.calendars
          .save({ calendar: "google", code: "string", state: "string" })
          .asResponse(),
        client.calendars.save({
          calendar: "google",
          code: "string",
          state: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.calendars.disconnect", () => {
  test.concurrent(
    "POST /v2/calendars/{calendar}/disconnect | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.calendars.disconnect({ id: 10, calendar: "apple" }).asResponse(),
        client.calendars.disconnect({ id: 10, calendar: "apple" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
