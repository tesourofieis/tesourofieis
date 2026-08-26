import { defineRule } from "@oxlint/plugins";

import type { ESTree } from "@oxlint/plugins";

function isUseDomDirective(statement: ESTree.Directive | ESTree.Statement): boolean {
  return (
    statement.type === "ExpressionStatement" &&
    "directive" in statement &&
    statement.directive === "use dom"
  );
}

function exportsDefault(specifiers: ESTree.ExportSpecifier[]): boolean {
  return specifiers.some(
    (specifier) =>
      specifier.exported.type !== "StringLiteral" && specifier.exported.name === "default",
  );
}

/** Files with the "use dom" directive may only default-export a single non-async function component. */
export const useDomExportsRule = defineRule({
  meta: {
    type: "problem",
    docs: {
      description:
        'Files with the "use dom" directive may only contain a single default export of a React component, which must not be async and must be a function.',
    },
    messages: {
      noOtherExports:
        'Files with the "use dom" directive may not contain named exports or other default exports.',
      asyncDefaultExport: "The default export must not be an async function.",
      invalidDefaultExport: "The default export must be a function.",
      missingDefaultExport:
        'Files with the "use dom" directive must export a React component as the default export.',
    },
    schema: [],
  },
  createOnce(context) {
    return {
      Program(node) {
        let isDomComponent = false;
        let hasDefaultExport = false;

        for (const statement of node.body) {
          if (isUseDomDirective(statement)) isDomComponent = true;
          if (!isDomComponent) continue;

          if (statement.type === "ExportNamedDeclaration") {
            const declarationAllowsTypes =
              statement.declaration === null ||
              statement.declaration.type === "TSInterfaceDeclaration" ||
              statement.declaration.type === "TSTypeAliasDeclaration" ||
              statement.declaration.type === "TSModuleDeclaration";
            if (!declarationAllowsTypes || !exportsDefault(statement.specifiers)) {
              context.report({ node: statement, messageId: "noOtherExports" });
            }
            if (exportsDefault(statement.specifiers)) hasDefaultExport = true;
          }

          if (statement.type === "ExportDefaultDeclaration") {
            if (hasDefaultExport) {
              context.report({ node: statement, messageId: "noOtherExports" });
              continue;
            }
            hasDefaultExport = true;

            const { declaration } = statement;
            if (declaration.type === "Identifier") continue;
            if (
              declaration.type !== "FunctionDeclaration" &&
              declaration.type !== "ArrowFunctionExpression" &&
              declaration.type !== "FunctionExpression"
            ) {
              context.report({ node: statement, messageId: "invalidDefaultExport" });
              continue;
            }
            if (declaration.async) {
              context.report({ node: statement, messageId: "asyncDefaultExport" });
            }
          }

          if (statement.type === "ExportAllDeclaration" && statement.exported !== null) {
            if (hasDefaultExport) {
              context.report({ node: statement, messageId: "noOtherExports" });
              continue;
            }
            if (
              statement.exported.type !== "StringLiteral" &&
              statement.exported.name === "default"
            ) {
              hasDefaultExport = true;
            }
          }
        }

        if (isDomComponent && !hasDefaultExport) {
          context.report({ node, messageId: "missingDefaultExport" });
        }
      },
    };
  },
});
