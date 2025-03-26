import Client, { Environment } from "calcom_ts";

describe("tests client.organizations.teams.users.schedules.list", () => {
  test.concurrent(
    "GET /v2/organizations/{orgId}/teams/{teamId}/users/{userId}/schedules | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.teams.users.schedules
          .list({ orgId: 123.45, teamId: 123.45, userId: 123.45 })
          .asResponse(),
        client.organizations.teams.users.schedules.list({
          orgId: 123.45,
          teamId: 123.45,
          userId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
