import { External$KeysDto, KeysDto, Schemas$KeysDto } from "./keys-dto";
import { zodTransform } from "calcom_ts/core";
import * as z from "zod";

/**
 * KeysResponseDto
 */
export type KeysResponseDto = {
  data: KeysDto;
  status: "error" | "success";
};

/**
 * @internal
 * KeysResponseDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$KeysResponseDto = {
  data: External$KeysDto;
  status: "error" | "success";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object KeysResponseDto
 */
const SchemaIn$KeysResponseDto: z.ZodType<
  KeysResponseDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$KeysDto.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$KeysResponseDto
 */
const SchemaOut$KeysResponseDto: z.ZodType<
  External$KeysResponseDto, // output type of this zod object
  z.ZodTypeDef,
  KeysResponseDto // the object to be transformed
> = z
  .object({
    data: Schemas$KeysDto.out,
    status: z.enum(["error", "success"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      status: "status",
    });
  });

export const Schemas$KeysResponseDto = {
  in: SchemaIn$KeysResponseDto,
  out: SchemaOut$KeysResponseDto,
};
