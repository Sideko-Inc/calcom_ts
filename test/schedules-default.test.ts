import Client, { Environment } from "calcom_ts";

describe("tests client.schedules.default.list", () => {
  test.concurrent(
    "GET /v2/schedules/default | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.schedules.default.list({ calApiVersion: "string" }).asResponse(),
        client.schedules.default.list({ calApiVersion: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
