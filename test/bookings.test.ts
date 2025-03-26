import Client, { Environment } from "calcom_ts";

describe("tests client.bookings.list", () => {
  test.concurrent(
    "GET /v2/bookings | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.bookings.list({ calApiVersion: "string" }).asResponse(),
        client.bookings.list({ calApiVersion: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.bookings.get", () => {
  test.concurrent(
    "GET /v2/bookings/{bookingUid} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.bookings
          .get({ bookingUid: "string", calApiVersion: "string" })
          .asResponse(),
        client.bookings.get({ bookingUid: "string", calApiVersion: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.bookings.create", () => {
  test.concurrent(
    "POST /v2/bookings | testId: success_default | Success test with response schema validation. Expects status code 201",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.bookings
          .create({
            data: {
              attendee: { name: "John Doe", timeZone: "America/New_York" },
              eventTypeId: 123.0,
              start: "2024-08-13T09:00:00Z",
            },
            calApiVersion: "string",
          })
          .asResponse(),
        client.bookings.create({
          data: {
            attendee: { name: "John Doe", timeZone: "America/New_York" },
            eventTypeId: 123.0,
            start: "2024-08-13T09:00:00Z",
          },
          calApiVersion: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(201); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.bookings.cancel", () => {
  test.concurrent(
    "POST /v2/bookings/{bookingUid}/cancel | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.bookings
          .cancel({ data: {}, bookingUid: "string", calApiVersion: "string" })
          .asResponse(),
        client.bookings.cancel({
          data: {},
          bookingUid: "string",
          calApiVersion: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.bookings.confirm", () => {
  test.concurrent(
    "POST /v2/bookings/{bookingUid}/confirm | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.bookings
          .confirm({ bookingUid: "string", calApiVersion: "string" })
          .asResponse(),
        client.bookings.confirm({
          bookingUid: "string",
          calApiVersion: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.bookings.decline", () => {
  test.concurrent(
    "POST /v2/bookings/{bookingUid}/decline | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.bookings
          .decline({ bookingUid: "string", calApiVersion: "string" })
          .asResponse(),
        client.bookings.decline({
          bookingUid: "string",
          calApiVersion: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.bookings.markAbsent", () => {
  test.concurrent(
    "POST /v2/bookings/{bookingUid}/mark-absent | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.bookings
          .markAbsent({ bookingUid: "string", calApiVersion: "string" })
          .asResponse(),
        client.bookings.markAbsent({
          bookingUid: "string",
          calApiVersion: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.bookings.reassign", () => {
  test.concurrent(
    "POST /v2/bookings/{bookingUid}/reassign | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.bookings
          .reassign({ bookingUid: "string", calApiVersion: "string" })
          .asResponse(),
        client.bookings.reassign({
          bookingUid: "string",
          calApiVersion: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.bookings.reassignToUser", () => {
  test.concurrent(
    "POST /v2/bookings/{bookingUid}/reassign/{userId} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.bookings
          .reassignToUser({
            bookingUid: "string",
            userId: 123.45,
            calApiVersion: "string",
          })
          .asResponse(),
        client.bookings.reassignToUser({
          bookingUid: "string",
          userId: 123.45,
          calApiVersion: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.bookings.reschedule", () => {
  test.concurrent(
    "POST /v2/bookings/{bookingUid}/reschedule | testId: success_default | Success test with response schema validation. Expects status code 201",
    async () => {
      const client = new Client({
        apiKey: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.bookings
          .reschedule({
            data: { start: "2024-08-13T10:00:00Z" },
            bookingUid: "string",
            calApiVersion: "string",
          })
          .asResponse(),
        client.bookings.reschedule({
          data: { start: "2024-08-13T10:00:00Z" },
          bookingUid: "string",
          calApiVersion: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(201); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
