import pluginReact from "eslint-plugin-react";

import config from "@packages/eslint-config";

export default [
  ...config,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "18",
      },
    },
    rules: {
      "jsx-a11y/no-static-element-interactions": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/label-has-for": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [
        "error",
        { extensions: [".js", ".jsx", ".tsx", "ts"] },
      ],
      "react/button-has-type": "off",
      "react/jsx-key": "error",
      "react/jsx-props-no-spreading": "off",
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "react/forbid-prop-types": "off",
      "react/no-unknown-property": [
        "error",
        { ignore: ["webkit-playsInline"] },
      ],
    },
    ignores: ["*.d.ts"],
  },
];
