import Client, { Environment } from "calcom_ts";

describe("tests client.selectedCalendars.delete", () => {
  test.concurrent(
    "DELETE /v2/selected-calendars | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.selectedCalendars
          .delete({
            credentialId: "string",
            externalId: "string",
            integration: "string",
          })
          .asResponse(),
        client.selectedCalendars.delete({
          credentialId: "string",
          externalId: "string",
          integration: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.selectedCalendars.create", () => {
  test.concurrent(
    "POST /v2/selected-calendars | testId: success_default | Success test with response schema validation. Expects status code 201",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.selectedCalendars
          .create({
            credentialId: 123.45,
            externalId: "string",
            integration: "string",
          })
          .asResponse(),
        client.selectedCalendars.create({
          credentialId: 123.45,
          externalId: "string",
          integration: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(201); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
