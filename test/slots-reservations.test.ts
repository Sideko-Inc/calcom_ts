import Client, { Environment } from "calcom_ts";

describe("tests client.slots.reservations.delete", () => {
  test.concurrent(
    "DELETE /v2/slots/reservations/{uid} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.slots.reservations
          .delete({ uid: "string", calApiVersion: "string" })
          .asResponse(),
        client.slots.reservations.delete({
          uid: "string",
          calApiVersion: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.slots.reservations.get", () => {
  test.concurrent(
    "GET /v2/slots/reservations/{uid} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.slots.reservations
          .get({ uid: "string", calApiVersion: "string" })
          .asResponse(),
        client.slots.reservations.get({
          uid: "string",
          calApiVersion: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.slots.reservations.patch", () => {
  test.concurrent(
    "PATCH /v2/slots/reservations/{uid} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.slots.reservations
          .patch({
            eventTypeId: 1.0,
            slotStart: "2024-09-04T09:00:00Z",
            uid: "string",
            calApiVersion: "string",
          })
          .asResponse(),
        client.slots.reservations.patch({
          eventTypeId: 1.0,
          slotStart: "2024-09-04T09:00:00Z",
          uid: "string",
          calApiVersion: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.slots.reservations.create", () => {
  test.concurrent(
    "POST /v2/slots/reservations | testId: success_default | Success test with response schema validation. Expects status code 201",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.slots.reservations
          .create({
            eventTypeId: 1.0,
            slotStart: "2024-09-04T09:00:00Z",
            calApiVersion: "string",
          })
          .asResponse(),
        client.slots.reservations.create({
          eventTypeId: 1.0,
          slotStart: "2024-09-04T09:00:00Z",
          calApiVersion: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(201); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
