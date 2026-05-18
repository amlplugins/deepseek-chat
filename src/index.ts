/**
 * @amlplugins/deepseek-chat
 *
 * Thin namespaced re-export of the native @ai-sdk/deepseek SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * DeepSeek Chat — deepseek-chat / deepseek-coder completions via @ai-sdk/deepseek with streaming and tool use.
 */

import * as _sdk from "@ai-sdk/deepseek";
export * from "@ai-sdk/deepseek";
export { _sdk as sdk };
export default _sdk;

import * as _secondary from "ai";
export * as secondary from "ai";
export { _secondary };
