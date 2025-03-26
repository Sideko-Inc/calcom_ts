import Client, { Environment } from "calcom_ts";

describe("tests client.destinationCalendars.update", () => {
  test.concurrent(
    "PUT /v2/destination-calendars | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.destinationCalendars
          .update({
            externalId:
              "https://caldav.icloud.com/26962146906/calendars/1644422A-1945-4438-BBC0-4F0Q23A57R7S/",
            integration: "apple_calendar",
          })
          .asResponse(),
        client.destinationCalendars.update({
          externalId:
            "https://caldav.icloud.com/26962146906/calendars/1644422A-1945-4438-BBC0-4F0Q23A57R7S/",
          integration: "apple_calendar",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
