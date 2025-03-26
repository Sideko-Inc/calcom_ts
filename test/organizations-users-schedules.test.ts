import Client, { Environment } from "calcom_ts";

describe("tests client.organizations.users.schedules.delete", () => {
  test.concurrent(
    "DELETE /v2/organizations/{orgId}/users/{userId}/schedules/{scheduleId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.users.schedules
          .delete({ orgId: 123.45, scheduleId: 123.45, userId: 123.45 })
          .asResponse(),
        client.organizations.users.schedules.delete({
          orgId: 123.45,
          scheduleId: 123.45,
          userId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.users.schedules.list", () => {
  test.concurrent(
    "GET /v2/organizations/{orgId}/users/{userId}/schedules | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.users.schedules
          .list({ orgId: 123.45, userId: 123.45 })
          .asResponse(),
        client.organizations.users.schedules.list({
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

describe("tests client.organizations.users.schedules.get", () => {
  test.concurrent(
    "GET /v2/organizations/{orgId}/users/{userId}/schedules/{scheduleId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.users.schedules
          .get({ orgId: 123.45, scheduleId: 123.45, userId: 123.45 })
          .asResponse(),
        client.organizations.users.schedules.get({
          orgId: 123.45,
          scheduleId: 123.45,
          userId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.users.schedules.patch", () => {
  test.concurrent(
    "PATCH /v2/organizations/{orgId}/users/{userId}/schedules/{scheduleId} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.users.schedules
          .patch({ orgId: 123.45, scheduleId: 123.45, userId: 123.45 })
          .asResponse(),
        client.organizations.users.schedules.patch({
          orgId: 123.45,
          scheduleId: 123.45,
          userId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.users.schedules.create", () => {
  test.concurrent(
    "POST /v2/organizations/{orgId}/users/{userId}/schedules | testId: success_default | Success test with response schema validation. Expects status code 201",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.users.schedules
          .create({
            isDefault: true,
            name: "Catch up hours",
            timeZone: "Europe/Rome",
            orgId: 123.45,
            userId: 123.45,
          })
          .asResponse(),
        client.organizations.users.schedules.create({
          isDefault: true,
          name: "Catch up hours",
          timeZone: "Europe/Rome",
          orgId: 123.45,
          userId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(201); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
