import Client, { Environment } from "calcom_ts";

describe("tests client.teams.eventTypes.createPhoneCall.create", () => {
  test.concurrent(
    "POST /v2/teams/{teamId}/event-types/{eventTypeId}/create-phone-call | testId: success_default | Success test with response schema validation. Expects status code 201",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.teams.eventTypes.createPhoneCall
          .create({
            calApiKey: "string",
            enabled: {},
            numberToCall: "string",
            templateType: "CHECK_IN_APPOINTMENT",
            yourPhoneNumber: "string",
            eventTypeId: 123.45,
            teamId: 123.45,
          })
          .asResponse(),
        client.teams.eventTypes.createPhoneCall.create({
          calApiKey: "string",
          enabled: {},
          numberToCall: "string",
          templateType: "CHECK_IN_APPOINTMENT",
          yourPhoneNumber: "string",
          eventTypeId: 123.45,
          teamId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(201); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
