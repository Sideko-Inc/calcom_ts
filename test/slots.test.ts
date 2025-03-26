import Client, { Environment } from "calcom_ts";

describe("tests client.slots.list", () => {
  test.concurrent(
    "GET /v2/slots | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.slots
          .list({
            end: "could be anything",
            start: "could be anything",
            calApiVersion: "string",
          })
          .asResponse(),
        client.slots.list({
          end: "could be anything",
          start: "could be anything",
          calApiVersion: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
