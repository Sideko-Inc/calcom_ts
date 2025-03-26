import Client, { Environment } from "calcom_ts";

describe("tests client.apiKeys.refresh.create", () => {
  test.concurrent(
    "POST /v2/api-keys/refresh | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.apiKeys.refresh.create().asResponse(),
        client.apiKeys.refresh.create(),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
