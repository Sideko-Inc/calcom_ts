import Client, { Environment } from "calcom_ts";

describe("tests client.calendars.icsFeed.check", () => {
  test.concurrent(
    "GET /v2/calendars/ics-feed/check | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.calendars.icsFeed.check().asResponse(),
        client.calendars.icsFeed.check(),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.calendars.icsFeed.save", () => {
  test.concurrent(
    "POST /v2/calendars/ics-feed/save | testId: success_default | Success test with response schema validation. Expects status code 201",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.calendars.icsFeed
          .save({
            urls: [
              "https://cal.com/ics/feed.ics",
              "http://cal.com/ics/feed.ics",
            ],
          })
          .asResponse(),
        client.calendars.icsFeed.save({
          urls: ["https://cal.com/ics/feed.ics", "http://cal.com/ics/feed.ics"],
        }),
      ]);
      expect(rawResponse.status).toBe(201); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
