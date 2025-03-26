import Client, { Environment } from "calcom_ts";

describe("tests client.conferencing.oauth.authUrl", () => {
  test.concurrent(
    "GET /v2/conferencing/{app}/oauth/auth-url | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.conferencing.oauth
          .authUrl({
            app: "msteams",
            onErrorReturnTo: "string",
            returnTo: "string",
          })
          .asResponse(),
        client.conferencing.oauth.authUrl({
          app: "msteams",
          onErrorReturnTo: "string",
          returnTo: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.conferencing.oauth.callback", () => {
  test.concurrent(
    "GET /v2/conferencing/{app}/oauth/callback | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.conferencing.oauth
          .callback({ app: "msteams", code: "string", state: "string" })
          .asResponse(),
        client.conferencing.oauth.callback({
          app: "msteams",
          code: "string",
          state: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
