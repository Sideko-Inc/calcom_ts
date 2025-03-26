import Client, { Environment } from "calcom_ts";

describe("tests client.organizations.attributes.options.deleteFromUser", () => {
  test.concurrent(
    "DELETE /v2/organizations/{orgId}/attributes/options/{userId}/{attributeOptionId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.attributes.options
          .deleteFromUser({
            attributeOptionId: "string",
            orgId: 123.45,
            userId: 123.45,
          })
          .asResponse(),
        client.organizations.attributes.options.deleteFromUser({
          attributeOptionId: "string",
          orgId: 123.45,
          userId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.attributes.options.delete", () => {
  test.concurrent(
    "DELETE /v2/organizations/{orgId}/attributes/{attributeId}/options/{optionId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.attributes.options
          .delete({ attributeId: "string", optionId: "string", orgId: 123.45 })
          .asResponse(),
        client.organizations.attributes.options.delete({
          attributeId: "string",
          optionId: "string",
          orgId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.attributes.options.get", () => {
  test.concurrent(
    "GET /v2/organizations/{orgId}/attributes/options/{userId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.attributes.options
          .get({ orgId: 123.45, userId: 123.45 })
          .asResponse(),
        client.organizations.attributes.options.get({
          orgId: 123.45,
          userId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.attributes.options.list", () => {
  test.concurrent(
    "GET /v2/organizations/{orgId}/attributes/{attributeId}/options | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.attributes.options
          .list({ attributeId: "string", orgId: 123.45 })
          .asResponse(),
        client.organizations.attributes.options.list({
          attributeId: "string",
          orgId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.attributes.options.patch", () => {
  test.concurrent(
    "PATCH /v2/organizations/{orgId}/attributes/{attributeId}/options/{optionId} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.attributes.options
          .patch({ attributeId: "string", optionId: "string", orgId: 123.45 })
          .asResponse(),
        client.organizations.attributes.options.patch({
          attributeId: "string",
          optionId: "string",
          orgId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.attributes.options.createToUser", () => {
  test.concurrent(
    "POST /v2/organizations/{orgId}/attributes/options/{userId} | testId: success_default | Success test with response schema validation. Expects status code 201",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.attributes.options
          .createToUser({
            attributeId: "string",
            orgId: 123.45,
            userId: 123.45,
          })
          .asResponse(),
        client.organizations.attributes.options.createToUser({
          attributeId: "string",
          orgId: 123.45,
          userId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(201); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.attributes.options.create", () => {
  test.concurrent(
    "POST /v2/organizations/{orgId}/attributes/{attributeId}/options | testId: success_default | Success test with response schema validation. Expects status code 201",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.attributes.options
          .create({
            slug: "string",
            value: "string",
            attributeId: "string",
            orgId: 123.45,
          })
          .asResponse(),
        client.organizations.attributes.options.create({
          slug: "string",
          value: "string",
          attributeId: "string",
          orgId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(201); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
