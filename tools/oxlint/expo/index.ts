import { definePlugin } from "@oxlint/plugins";

import { noDynamicEnvVarRule } from "./rules/no-dynamic-env-var.ts";
import { noEnvVarDestructuringRule } from "./rules/no-env-var-destructuring.ts";
import { useDomExportsRule } from "./rules/use-dom-exports.ts";

/** Oxlint ports of the Expo-specific rules from eslint-plugin-expo. */
const expoPlugin = definePlugin({
  meta: { name: "expo" },
  rules: {
    "no-dynamic-env-var": noDynamicEnvVarRule,
    "no-env-var-destructuring": noEnvVarDestructuringRule,
    "use-dom-exports": useDomExportsRule,
  },
});

export default expoPlugin;
