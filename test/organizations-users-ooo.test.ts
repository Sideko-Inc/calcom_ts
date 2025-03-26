import Client, { Environment } from "calcom_ts";

describe("tests client.organizations.users.ooo.delete", () => {
  test.concurrent(
    "DELETE /v2/organizations/{orgId}/users/{userId}/ooo/{oooId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.users.ooo
          .delete({ oooId: 123.45, orgId: 123.45, userId: 123.45 })
          .asResponse(),
        client.organizations.users.ooo.delete({
          oooId: 123.45,
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

describe("tests client.organizations.users.ooo.list", () => {
  test.concurrent(
    "GET /v2/organizations/{orgId}/users/{userId}/ooo | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.users.ooo
          .list({ orgId: 123.45, userId: 123.45 })
          .asResponse(),
        client.organizations.users.ooo.list({ orgId: 123.45, userId: 123.45 }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.users.ooo.patch", () => {
  test.concurrent(
    "PATCH /v2/organizations/{orgId}/users/{userId}/ooo/{oooId} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.users.ooo
          .patch({ oooId: 123.45, orgId: 123.45, userId: 123.45 })
          .asResponse(),
        client.organizations.users.ooo.patch({
          oooId: 123.45,
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

describe("tests client.organizations.users.ooo.create", () => {
  test.concurrent(
    "POST /v2/organizations/{orgId}/users/{userId}/ooo | testId: success_default | Success test with response schema validation. Expects status code 201",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.users.ooo
          .create({
            end: "2023-05-10T23:59:59.999Z",
            start: "2023-05-01T00:00:00.000Z",
            orgId: 123.45,
            userId: 123.45,
          })
          .asResponse(),
        client.organizations.users.ooo.create({
          end: "2023-05-10T23:59:59.999Z",
          start: "2023-05-01T00:00:00.000Z",
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
