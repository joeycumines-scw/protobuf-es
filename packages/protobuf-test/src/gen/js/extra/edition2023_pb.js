// Copyright 2021-2025 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v2.6.2 with parameter "target=js+dts,import_extension=js"
// @generated from file extra/edition2023.proto (package spec, edition 2023)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv2";
import { file_google_protobuf_wrappers } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file extra/edition2023.proto.
 */
export const file_extra_edition2023 = /*@__PURE__*/
  fileDesc("ChdleHRyYS9lZGl0aW9uMjAyMy5wcm90bxIEc3BlYyLsJgoSRWRpdGlvbjIwMjNNZXNzYWdlEh4KFWV4cGxpY2l0X3N0cmluZ19maWVsZBitAiABKAkSHQoUZXhwbGljaXRfYnl0ZXNfZmllbGQYrgIgASgMEh0KFGV4cGxpY2l0X2ludDMyX2ZpZWxkGK8CIAEoBRIdChRleHBsaWNpdF9pbnQ2NF9maWVsZBiwAiABKAMSKwoeZXhwbGljaXRfaW50NjRfanNfbnVtYmVyX2ZpZWxkGLECIAEoA0ICMAISKwoeZXhwbGljaXRfaW50NjRfanNfc3RyaW5nX2ZpZWxkGLICIAEoA0ICMAESHQoUZXhwbGljaXRfZmxvYXRfZmllbGQYswIgASgCEhwKE2V4cGxpY2l0X2Jvb2xfZmllbGQYtAIgASgIEjwKGGV4cGxpY2l0X2VudW1fb3Blbl9maWVsZBi1AiABKA4yGS5zcGVjLkVkaXRpb24yMDIzRW51bU9wZW4SQAoaZXhwbGljaXRfZW51bV9jbG9zZWRfZmllbGQYtgIgASgOMhsuc3BlYy5FZGl0aW9uMjAyM0VudW1DbG9zZWQSOQoWZXhwbGljaXRfbWVzc2FnZV9maWVsZBi3AiABKAsyGC5zcGVjLkVkaXRpb24yMDIzTWVzc2FnZRJKCiBleHBsaWNpdF9tZXNzYWdlX2RlbGltaXRlZF9maWVsZBi4AiABKAsyGC5zcGVjLkVkaXRpb24yMDIzTWVzc2FnZUIFqgECKAISRAodZXhwbGljaXRfd3JhcHBlZF91aW50MzJfZmllbGQYuQIgASgLMhwuZ29vZ2xlLnByb3RvYnVmLlVJbnQzMlZhbHVlEiUKFWltcGxpY2l0X3N0cmluZ19maWVsZBjJASABKAlCBaoBAggCEiQKFGltcGxpY2l0X2J5dGVzX2ZpZWxkGMoBIAEoDEIFqgECCAISJAoUaW1wbGljaXRfaW50MzJfZmllbGQYywEgASgFQgWqAQIIAhIkChRpbXBsaWNpdF9pbnQ2NF9maWVsZBjMASABKANCBaoBAggCEjAKHmltcGxpY2l0X2ludDY0X2pzX251bWJlcl9maWVsZBjNASABKANCBzACqgECCAISMAoeaW1wbGljaXRfaW50NjRfanNfc3RyaW5nX2ZpZWxkGM4BIAEoA0IHMAGqAQIIAhIkChRpbXBsaWNpdF9mbG9hdF9maWVsZBjPASABKAJCBaoBAggCEiMKE2ltcGxpY2l0X2Jvb2xfZmllbGQY0AEgASgIQgWqAQIIAhJDChhpbXBsaWNpdF9lbnVtX29wZW5fZmllbGQY0QEgASgOMhkuc3BlYy5FZGl0aW9uMjAyM0VudW1PcGVuQgWqAQIIAhIkChVyZXF1aXJlZF9zdHJpbmdfZmllbGQYASABKAlCBaoBAggDEiMKFHJlcXVpcmVkX2J5dGVzX2ZpZWxkGAIgASgMQgWqAQIIAxIjChRyZXF1aXJlZF9pbnQzMl9maWVsZBgDIAEoBUIFqgECCAMSIwoUcmVxdWlyZWRfaW50NjRfZmllbGQYBCABKANCBaoBAggDEi8KHnJlcXVpcmVkX2ludDY0X2pzX251bWJlcl9maWVsZBgFIAEoA0IHMAKqAQIIAxIvCh5yZXF1aXJlZF9pbnQ2NF9qc19zdHJpbmdfZmllbGQYBiABKANCBzABqgECCAMSIwoUcmVxdWlyZWRfZmxvYXRfZmllbGQYByABKAJCBaoBAggDEiIKE3JlcXVpcmVkX2Jvb2xfZmllbGQYCCABKAhCBaoBAggDEkIKGHJlcXVpcmVkX2VudW1fb3Blbl9maWVsZBgJIAEoDjIZLnNwZWMuRWRpdGlvbjIwMjNFbnVtT3BlbkIFqgECCAMSRgoacmVxdWlyZWRfZW51bV9jbG9zZWRfZmllbGQYCiABKA4yGy5zcGVjLkVkaXRpb24yMDIzRW51bUNsb3NlZEIFqgECCAMSRQoWcmVxdWlyZWRfbWVzc2FnZV9maWVsZBgLIAEoCzIeLnNwZWMuRWRpdGlvbjIwMjNNZXNzYWdlLkNoaWxkQgWqAQIIAxJRCiByZXF1aXJlZF9tZXNzYWdlX2RlbGltaXRlZF9maWVsZBgMIAEoCzIeLnNwZWMuRWRpdGlvbjIwMjNNZXNzYWdlLkNoaWxkQgeqAQQIAygCEkoKHXJlcXVpcmVkX3dyYXBwZWRfdWludDMyX2ZpZWxkGA0gASgLMhwuZ29vZ2xlLnByb3RvYnVmLlVJbnQzMlZhbHVlQgWqAQIIAxI5Ch1yZXF1aXJlZF9kZWZhdWx0X3N0cmluZ19maWVsZBhlIAEoCToLaGVsbG8gIiAqLyBCBaoBAggDElIKHHJlcXVpcmVkX2RlZmF1bHRfYnl0ZXNfZmllbGQYZiABKAw6JVwwMDB4XFx4XCJ4XCdBQUFBQUFcMDEwXDAxNFxuXHJcdFwwMTNCBaoBAggDEjAKHHJlcXVpcmVkX2RlZmF1bHRfaW50MzJfZmllbGQYZyABKAU6AzEyOEIFqgECCAMSMQoccmVxdWlyZWRfZGVmYXVsdF9pbnQ2NF9maWVsZBhoIAEoAzoELTI1NkIFqgECCAMSPQomcmVxdWlyZWRfZGVmYXVsdF9pbnQ2NF9qc19udW1iZXJfZmllbGQYaSABKAM6BC0yNTZCBzACqgECCAMSPQomcmVxdWlyZWRfZGVmYXVsdF9pbnQ2NF9qc19zdHJpbmdfZmllbGQYaiABKAM6BC0yNTZCBzABqgECCAMSNAoccmVxdWlyZWRfZGVmYXVsdF9mbG9hdF9maWVsZBhrIAEoAjoHLTUxMi4xM0IFqgECCAMSMAobcmVxdWlyZWRfZGVmYXVsdF9ib29sX2ZpZWxkGGwgASgIOgR0cnVlQgWqAQIIAxJjCiByZXF1aXJlZF9kZWZhdWx0X2VudW1fb3Blbl9maWVsZBhtIAEoDjIZLnNwZWMuRWRpdGlvbjIwMjNFbnVtT3BlbjoXRURJVElPTjIwMjNfRU5VTV9PUEVOX0FCBaoBAggDEmkKInJlcXVpcmVkX2RlZmF1bHRfZW51bV9jbG9zZWRfZmllbGQYbiABKA4yGy5zcGVjLkVkaXRpb24yMDIzRW51bUNsb3NlZDoZRURJVElPTjIwMjNfRU5VTV9DTE9TRURfQUIFqgECCAMSHgoVcmVwZWF0ZWRfc3RyaW5nX2ZpZWxkGJEDIAMoCRIdChRyZXBlYXRlZF9ieXRlc19maWVsZBiSAyADKAwSHQoUcmVwZWF0ZWRfaW50MzJfZmllbGQYkwMgAygFEh0KFHJlcGVhdGVkX2ludDY0X2ZpZWxkGJQDIAMoAxIrCh5yZXBlYXRlZF9pbnQ2NF9qc19udW1iZXJfZmllbGQYlQMgAygDQgIwAhIrCh5yZXBlYXRlZF9pbnQ2NF9qc19zdHJpbmdfZmllbGQYlgMgAygDQgIwARIdChRyZXBlYXRlZF9mbG9hdF9maWVsZBiXAyADKAISHAoTcmVwZWF0ZWRfYm9vbF9maWVsZBiYAyADKAgSPAoYcmVwZWF0ZWRfZW51bV9vcGVuX2ZpZWxkGJkDIAMoDjIZLnNwZWMuRWRpdGlvbjIwMjNFbnVtT3BlbhJAChpyZXBlYXRlZF9lbnVtX2Nsb3NlZF9maWVsZBiaAyADKA4yGy5zcGVjLkVkaXRpb24yMDIzRW51bUNsb3NlZBI5ChZyZXBlYXRlZF9tZXNzYWdlX2ZpZWxkGJsDIAMoCzIYLnNwZWMuRWRpdGlvbjIwMjNNZXNzYWdlEkoKIHJlcGVhdGVkX21lc3NhZ2VfZGVsaW1pdGVkX2ZpZWxkGJwDIAMoCzIYLnNwZWMuRWRpdGlvbjIwMjNNZXNzYWdlQgWqAQIoAhJECh1yZXBlYXRlZF93cmFwcGVkX3VpbnQzMl9maWVsZBidAyADKAsyHC5nb29nbGUucHJvdG9idWYuVUludDMyVmFsdWUSIwoTcGFja2VkX2RvdWJsZV9maWVsZBieAyADKAFCBaoBAhgBEiMKE3BhY2tlZF91aW50MzJfZmllbGQYnwMgAygNQgWqAQIYARIjChNwYWNrZWRfdWludDY0X2ZpZWxkGKADIAMoBEIFqgECGAESJQoVdW5wYWNrZWRfZG91YmxlX2ZpZWxkGKEDIAMoAUIFqgECGAISJQoVdW5wYWNrZWRfdWludDMyX2ZpZWxkGKIDIAMoDUIFqgECGAISJQoVdW5wYWNrZWRfdWludDY0X2ZpZWxkGKMDIAMoBEIFqgECGAISHQoSb25lb2Zfc3RyaW5nX2ZpZWxkGPUDIAEoCUgAEhwKEW9uZW9mX2J5dGVzX2ZpZWxkGPYDIAEoDEgAEhwKEW9uZW9mX2ludDMyX2ZpZWxkGPcDIAEoBUgAEhwKEW9uZW9mX2ludDY0X2ZpZWxkGPgDIAEoA0gAEioKG29uZW9mX2ludDY0X2pzX251bWJlcl9maWVsZBj5AyABKANCAjACSAASKgobb25lb2ZfaW50NjRfanNfc3RyaW5nX2ZpZWxkGPoDIAEoA0ICMAFIABIcChFvbmVvZl9mbG9hdF9maWVsZBj7AyABKAJIABIbChBvbmVvZl9ib29sX2ZpZWxkGPwDIAEoCEgAEjsKFW9uZW9mX2VudW1fb3Blbl9maWVsZBj9AyABKA4yGS5zcGVjLkVkaXRpb24yMDIzRW51bU9wZW5IABI/ChdvbmVvZl9lbnVtX2Nsb3NlZF9maWVsZBj+AyABKA4yGy5zcGVjLkVkaXRpb24yMDIzRW51bUNsb3NlZEgAEjgKE29uZW9mX21lc3NhZ2VfZmllbGQY/wMgASgLMhguc3BlYy5FZGl0aW9uMjAyM01lc3NhZ2VIABJJCh1vbmVvZl9tZXNzYWdlX2RlbGltaXRlZF9maWVsZBiABCABKAsyGC5zcGVjLkVkaXRpb24yMDIzTWVzc2FnZUIFqgECKAJIABJDChpvbmVvZl93cmFwcGVkX3VpbnQzMl9maWVsZBiBBCABKAsyHC5nb29nbGUucHJvdG9idWYuVUludDMyVmFsdWVIABJUChdtYXBfc3RyaW5nX3N0cmluZ19maWVsZBjZBCADKAsyMi5zcGVjLkVkaXRpb24yMDIzTWVzc2FnZS5NYXBTdHJpbmdTdHJpbmdGaWVsZEVudHJ5ElAKFW1hcF9pbnQzMl9pbnQzMl9maWVsZBjaBCADKAsyMC5zcGVjLkVkaXRpb24yMDIzTWVzc2FnZS5NYXBJbnQzMkludDMyRmllbGRFbnRyeRJMChNtYXBfYm9vbF9ib29sX2ZpZWxkGNsEIAMoCzIuLnNwZWMuRWRpdGlvbjIwMjNNZXNzYWdlLk1hcEJvb2xCb29sRmllbGRFbnRyeRJQChVtYXBfaW50NjRfaW50NjRfZmllbGQY3AQgAygLMjAuc3BlYy5FZGl0aW9uMjAyM01lc3NhZ2UuTWFwSW50NjRJbnQ2NEZpZWxkRW50cnkSVwoZbWFwX2ludDMyX2VudW1fb3Blbl9maWVsZBjdBCADKAsyMy5zcGVjLkVkaXRpb24yMDIzTWVzc2FnZS5NYXBJbnQzMkVudW1PcGVuRmllbGRFbnRyeRJUChdtYXBfaW50MzJfbWVzc2FnZV9maWVsZBjfBCADKAsyMi5zcGVjLkVkaXRpb24yMDIzTWVzc2FnZS5NYXBJbnQzMk1lc3NhZ2VGaWVsZEVudHJ5EmEKHm1hcF9pbnQzMl93cmFwcGVkX3VpbnQzMl9maWVsZBjgBCADKAsyOC5zcGVjLkVkaXRpb24yMDIzTWVzc2FnZS5NYXBJbnQzMldyYXBwZWRVaW50MzJGaWVsZEVudHJ5GjsKGU1hcFN0cmluZ1N0cmluZ0ZpZWxkRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4ARo5ChdNYXBJbnQzMkludDMyRmllbGRFbnRyeRILCgNrZXkYASABKAUSDQoFdmFsdWUYAiABKAU6AjgBGjcKFU1hcEJvb2xCb29sRmllbGRFbnRyeRILCgNrZXkYASABKAgSDQoFdmFsdWUYAiABKAg6AjgBGjkKF01hcEludDY0SW50NjRGaWVsZEVudHJ5EgsKA2tleRgBIAEoAxINCgV2YWx1ZRgCIAEoAzoCOAEaVwoaTWFwSW50MzJFbnVtT3BlbkZpZWxkRW50cnkSCwoDa2V5GAEgASgFEigKBXZhbHVlGAIgASgOMhkuc3BlYy5FZGl0aW9uMjAyM0VudW1PcGVuOgI4ARpVChlNYXBJbnQzMk1lc3NhZ2VGaWVsZEVudHJ5EgsKA2tleRgBIAEoBRInCgV2YWx1ZRgCIAEoCzIYLnNwZWMuRWRpdGlvbjIwMjNNZXNzYWdlOgI4ARpfCh9NYXBJbnQzMldyYXBwZWRVaW50MzJGaWVsZEVudHJ5EgsKA2tleRgBIAEoBRIrCgV2YWx1ZRgCIAEoCzIcLmdvb2dsZS5wcm90b2J1Zi5VSW50MzJWYWx1ZToCOAEaEgoFQ2hpbGQSCQoBZhgBIAEoBUIICgZlaXRoZXIijAUKHEVkaXRpb24yMDIzRnJvbVByb3RvMk1lc3NhZ2USGwoTb3B0aW9uYWxfYm9vbF9maWVsZBgBIAEoCBI/ChpvcHRpb25hbF9jbG9zZWRfZW51bV9maWVsZBgCIAEoDjIbLnNwZWMuRWRpdGlvbjIwMjNFbnVtQ2xvc2VkEjcKIm9wdGlvbmFsX3N0cmluZ19maWVsZF93aXRoX2RlZmF1bHQYAyABKAk6C2hlbGxvICIgKi8gEk4KDW9wdGlvbmFsZ3JvdXAYBCABKAsyMC5zcGVjLkVkaXRpb24yMDIzRnJvbVByb3RvMk1lc3NhZ2UuT3B0aW9uYWxHcm91cEIFqgECKAISIgoTcmVxdWlyZWRfYm9vbF9maWVsZBgFIAEoCEIFqgECCAMSRgoacmVxdWlyZWRfY2xvc2VkX2VudW1fZmllbGQYBiABKA4yGy5zcGVjLkVkaXRpb24yMDIzRW51bUNsb3NlZEIFqgECCAMSMwoicmVxdWlyZWRfc3RyaW5nX2ZpZWxkX3dpdGhfZGVmYXVsdBgHIAEoCToAQgWqAQIIAxJOCg1yZXF1aXJlZGdyb3VwGAggASgLMjAuc3BlYy5FZGl0aW9uMjAyM0Zyb21Qcm90bzJNZXNzYWdlLlJlcXVpcmVkR3JvdXBCBaoBAigCEiIKE3BhY2tlZF9kb3VibGVfZmllbGQYCSADKAFCBaoBAhgBEiQKFXVucGFja2VkX2RvdWJsZV9maWVsZBgKIAMoAUIFqgECGAIaJAoNT3B0aW9uYWxHcm91cBITCgtpbnQzMl9maWVsZBgBIAEoBRokCg1SZXF1aXJlZEdyb3VwEhMKC2ludDMyX2ZpZWxkGAEgASgFIrgCChxFZGl0aW9uMjAyM0Zyb21Qcm90bzNNZXNzYWdlEiIKE2ltcGxpY2l0X2Jvb2xfZmllbGQYASABKAhCBaoBAggCEkIKGGltcGxpY2l0X29wZW5fZW51bV9maWVsZBgCIAEoDjIZLnNwZWMuRWRpdGlvbjIwMjNFbnVtT3BlbkIFqgECCAISIgoTZXhwbGljaXRfYm9vbF9maWVsZBgFIAEoCEIFqgECCAESQgoYZXhwbGljaXRfb3Blbl9lbnVtX2ZpZWxkGAYgASgOMhkuc3BlYy5FZGl0aW9uMjAyM0VudW1PcGVuQgWqAQIIARIiChNwYWNrZWRfZG91YmxlX2ZpZWxkGAkgAygBQgWqAQIYARIkChV1bnBhY2tlZF9kb3VibGVfZmllbGQYCiADKAFCBaoBAhgCKlkKE0VkaXRpb24yMDIzRW51bU9wZW4SJQohRURJVElPTjIwMjNfRU5VTV9PUEVOX1VOU1BFQ0lGSUVEEAASGwoXRURJVElPTjIwMjNfRU5VTV9PUEVOX0EQASo8ChVFZGl0aW9uMjAyM0VudW1DbG9zZWQSHQoZRURJVElPTjIwMjNfRU5VTV9DTE9TRURfQRABGgQ6AhACYghlZGl0aW9uc3DoBw", [file_google_protobuf_wrappers]);

/**
 * Describes the message spec.Edition2023Message.
 * Use `create(Edition2023MessageSchema)` to create a new message.
 */
export const Edition2023MessageSchema = /*@__PURE__*/
  messageDesc(file_extra_edition2023, 0);

/**
 * Describes the message spec.Edition2023Message.Child.
 * Use `create(Edition2023Message_ChildSchema)` to create a new message.
 */
export const Edition2023Message_ChildSchema = /*@__PURE__*/
  messageDesc(file_extra_edition2023, 0, 0);

/**
 * Describes the message spec.Edition2023FromProto2Message.
 * Use `create(Edition2023FromProto2MessageSchema)` to create a new message.
 */
export const Edition2023FromProto2MessageSchema = /*@__PURE__*/
  messageDesc(file_extra_edition2023, 1);

/**
 * Describes the message spec.Edition2023FromProto2Message.OptionalGroup.
 * Use `create(Edition2023FromProto2Message_OptionalGroupSchema)` to create a new message.
 */
export const Edition2023FromProto2Message_OptionalGroupSchema = /*@__PURE__*/
  messageDesc(file_extra_edition2023, 1, 0);

/**
 * Describes the message spec.Edition2023FromProto2Message.RequiredGroup.
 * Use `create(Edition2023FromProto2Message_RequiredGroupSchema)` to create a new message.
 */
export const Edition2023FromProto2Message_RequiredGroupSchema = /*@__PURE__*/
  messageDesc(file_extra_edition2023, 1, 1);

/**
 * Describes the message spec.Edition2023FromProto3Message.
 * Use `create(Edition2023FromProto3MessageSchema)` to create a new message.
 */
export const Edition2023FromProto3MessageSchema = /*@__PURE__*/
  messageDesc(file_extra_edition2023, 2);

/**
 * Describes the enum spec.Edition2023EnumOpen.
 */
export const Edition2023EnumOpenSchema = /*@__PURE__*/
  enumDesc(file_extra_edition2023, 0);

/**
 * @generated from enum spec.Edition2023EnumOpen
 */
export const Edition2023EnumOpen = /*@__PURE__*/
  tsEnum(Edition2023EnumOpenSchema);

/**
 * Describes the enum spec.Edition2023EnumClosed.
 */
export const Edition2023EnumClosedSchema = /*@__PURE__*/
  enumDesc(file_extra_edition2023, 1);

/**
 * @generated from enum spec.Edition2023EnumClosed
 * @generated with option features.enum_type = CLOSED
 */
export const Edition2023EnumClosed = /*@__PURE__*/
  tsEnum(Edition2023EnumClosedSchema);

