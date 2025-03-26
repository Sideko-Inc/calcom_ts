import Client, { Environment } from "calcom_ts";

describe("tests client.organizations.attributes.delete", () => {
  test.concurrent(
    "DELETE /v2/organizations/{orgId}/attributes/{attributeId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.attributes
          .delete({ attributeId: "string", orgId: 123.45 })
          .asResponse(),
        client.organizations.attributes.delete({
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

describe("tests client.organizations.attributes.list", () => {
  test.concurrent(
    "GET /v2/organizations/{orgId}/attributes | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.attributes.list({ orgId: 123.45 }).asResponse(),
        client.organizations.attributes.list({ orgId: 123.45 }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.organizations.attributes.get", () => {
  test.concurrent(
    "GET /v2/organizations/{orgId}/attributes/{attributeId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.attributes
          .get({ attributeId: "string", orgId: 123.45 })
          .asResponse(),
        client.organizations.attributes.get({
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

describe("tests client.organizations.attributes.patch", () => {
  test.concurrent(
    "PATCH /v2/organizations/{orgId}/attributes/{attributeId} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.attributes
          .patch({ attributeId: "string", orgId: 123.45 })
          .asResponse(),
        client.organizations.attributes.patch({
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

describe("tests client.organizations.attributes.create", () => {
  test.concurrent(
    "POST /v2/organizations/{orgId}/attributes | testId: success_default | Success test with response schema validation. Expects status code 201",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.organizations.attributes
          .create({
            name: "string",
            options: [{ slug: "string", value: "string" }],
            slug: "string",
            type: "MULTI_SELECT",
            orgId: 123.45,
          })
          .asResponse(),
        client.organizations.attributes.create({
          name: "string",
          options: [{ slug: "string", value: "string" }],
          slug: "string",
          type: "MULTI_SELECT",
          orgId: 123.45,
        }),
      ]);
      expect(rawResponse.status).toBe(201); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
