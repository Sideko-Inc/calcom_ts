import {
  External$StripConnectOutputDto,
  Schemas$StripConnectOutputDto,
  StripConnectOutputDto,
} from "./strip-connect-output-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * StripConnectOutputResponseDto
 */
export type StripConnectOutputResponseDto = {
  data: StripConnectOutputDto;
  status: "error" | "success";
};

/**
 * @internal
 * StripConnectOutputResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$StripConnectOutputResponseDto = {
  data: External$StripConnectOutputDto;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object StripConnectOutputResponseDto
 */
const SchemaIn$StripConnectOutputResponseDto: z.ZodType<
  StripConnectOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$StripConnectOutputDto.in,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$StripConnectOutputResponseDto
 */
const SchemaOut$StripConnectOutputResponseDto: z.ZodType<
  External$StripConnectOutputResponseDto, // output type of this zod object
  z.ZodTypeDef,
  StripConnectOutputResponseDto // the object to be transformed
> = z
  .object({
    data: Schemas$StripConnectOutputDto.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$StripConnectOutputResponseDto = {
  in: SchemaIn$StripConnectOutputResponseDto,
  out: SchemaOut$StripConnectOutputResponseDto,
};
