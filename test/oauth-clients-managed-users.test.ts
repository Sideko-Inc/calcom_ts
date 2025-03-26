import Client, { Environment } from "calcom_ts";

describe("tests client.oauthClients.managedUsers.list", () => {
  test.concurrent(
    "GET /v2/oauth-clients/{clientId}/managed-users | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.oauthClients.managedUsers
          .list({ clientId: "string" })
          .asResponse(),
        client.oauthClients.managedUsers.list({ clientId: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
