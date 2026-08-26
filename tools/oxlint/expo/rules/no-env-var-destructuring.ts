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

function bindingName(pattern: ESTree.BindingPattern): string | null {
  return pattern.type === "Identifier" ? pattern.name : null;
}

/** Disallow destructuring of environment variables. */
export const noEnvVarDestructuringRule = defineRule({
  meta: {
    type: "problem",
    docs: {
      description:
        "Disallow destructuring of environment variables; Expo statically replaces full `process.env.X` member accesses only.",
    },
    messages: {
      unexpectedDestructuring:
        "Unexpected destructuring. Cannot destructure {{value}} from process.env",
    },
    schema: [],
  },
  createOnce(context) {
    return {
      VariableDeclarator(node) {
        if (node.id.type !== "ObjectPattern" || node.init === null) return;
        if (!isProcessEnv(node.init)) return;

        for (const property of node.id.properties) {
          if (property.type !== "Property") continue;
          context.report({
            node,
            messageId: "unexpectedDestructuring",
            data: { value: bindingName(property.value) ?? "variables" },
          });
        }
      },
    };
  },
});
