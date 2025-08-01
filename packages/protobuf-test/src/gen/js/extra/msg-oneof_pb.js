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
// @generated from file extra/msg-oneof.proto (package spec, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv2";

/**
 * Describes the file extra/msg-oneof.proto.
 */
export const file_extra_msg_oneof = /*@__PURE__*/
  fileDesc("ChVleHRyYS9tc2ctb25lb2YucHJvdG8SBHNwZWMi7gEKDE9uZW9mTWVzc2FnZRIPCgV2YWx1ZRgBIAEoBUgAEg8KBWVycm9yGAIgASgJSAASDwoFYnl0ZXMYAyABKAxIABIkCgNmb28YCyABKAsyFS5zcGVjLk9uZW9mTWVzc2FnZUZvb0gBEiQKA2JhchgMIAEoCzIVLnNwZWMuT25lb2ZNZXNzYWdlQmFySAESJAoDYmF6GA0gASgLMhUuc3BlYy5PbmVvZk1lc3NhZ2VCYXJIARIcCgFlGBUgASgOMg8uc3BlYy5PbmVvZkVudW1IAkIICgZzY2FsYXJCCQoHbWVzc2FnZUIGCgRlbnVtIi8KD09uZW9mTWVzc2FnZUZvbxIMCgRuYW1lGAEgASgJEg4KBnRvZ2dsZRgCIAEoCCInCg9PbmVvZk1lc3NhZ2VCYXISCQoBYRgBIAEoBRIJCgFiGAIgASgFKksKCU9uZW9mRW51bRIaChZPTkVPRl9FTlVNX1VOU1BFQ0lGSUVEEAASEAoMT05FT0ZfRU5VTV9BEAESEAoMT05FT0ZfRU5VTV9CEAJiBnByb3RvMw");

/**
 * Describes the message spec.OneofMessage.
 * Use `create(OneofMessageSchema)` to create a new message.
 */
export const OneofMessageSchema = /*@__PURE__*/
  messageDesc(file_extra_msg_oneof, 0);

/**
 * Describes the message spec.OneofMessageFoo.
 * Use `create(OneofMessageFooSchema)` to create a new message.
 */
export const OneofMessageFooSchema = /*@__PURE__*/
  messageDesc(file_extra_msg_oneof, 1);

/**
 * Describes the message spec.OneofMessageBar.
 * Use `create(OneofMessageBarSchema)` to create a new message.
 */
export const OneofMessageBarSchema = /*@__PURE__*/
  messageDesc(file_extra_msg_oneof, 2);

/**
 * Describes the enum spec.OneofEnum.
 */
export const OneofEnumSchema = /*@__PURE__*/
  enumDesc(file_extra_msg_oneof, 0);

/**
 * @generated from enum spec.OneofEnum
 */
export const OneofEnum = /*@__PURE__*/
  tsEnum(OneofEnumSchema);

