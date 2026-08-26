import { defineRule } from "@oxlint/plugins";

import type { ESTree } from "@oxlint/plugins";

function isProcessEnv(node: ESTree.Expression): node is ESTree.MemberExpression {
  return (
    node.type === "MemberExpression" &&
    node.object.type === "Identifier" &&
    node.object.name === "process" &&
    !node.computed &&
    node.property.type === "Identifier" &&
    node.property.name === "env"
  );
}

function describeProperty(node: ESTree.MemberExpression): string {
  const { property } = node;
  if (property.type === "Identifier") return property.name;
  if (property.type === "StringLiteral") return property.value;
  if (property.type === "NumericLiteral") return String(property.value);
  return "an expression";
}

/** Disallow dynamic access on `process.env`; Expo statically replaces static member accesses only. */
export const noDynamicEnvVarRule = defineRule({
  meta: {
    type: "problem",
    docs: {
      description: "Prevents process.env from being accessed dynamically.",
    },
    messages: {
      unexpectedDynamicAccess:
        "Unexpected dynamic access. Cannot dynamically access {{value}} from process.env",
    },
    schema: [],
  },
  createOnce(context) {
    return {
      VariableDeclarator(node) {
        const init = node.init;
        if (init === null || init.type !== "MemberExpression" || !init.computed) return;
        if (!isProcessEnv(init.object)) return;

        context.report({
          node,
          messageId: "unexpectedDynamicAccess",
          data: { value: describeProperty(init) },
        });
      },
    };
  },
});
