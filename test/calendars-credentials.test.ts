import Client, { Environment } from "calcom_ts";

describe("tests client.calendars.credentials.create", () => {
  test.concurrent(
    "POST /v2/calendars/{calendar}/credentials | testId: generated_success | Success test with response schema validation. Expects status code 201",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.calendars.credentials.create({ calendar: "apple" }).asResponse(),
        client.calendars.credentials.create({ calendar: "apple" }),
      ]);
      expect(rawResponse.status).toBe(201); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
