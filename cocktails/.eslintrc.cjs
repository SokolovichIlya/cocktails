/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    "root": true,
    "env": {
        "node": true,
    },
    "extends": [
        "plugin:vue/vue3-strongly-recommended",
        "plugin:vue/vue3-essential",
        "plugin:vue/vue3-recommended",
    ],
    "parserOptions": {
        "parser": "@typescript-eslint/parser",
        "ecmaVersion": 2020,
    },
    "overrides": [
        {
            "files": [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)",
            ],
            "env": {
                "jest": true,
            },
        },
    ],
    "rules": {
        "vue/attributes-order": ["error", {
            "order": [
              "DEFINITION",
              "CONDITIONALS",
              "LIST_RENDERING",
              "TWO_WAY_BINDING",
              "CONTENT",
              "EVENTS",
              ["UNIQUE", "SLOT"],
              "OTHER_DIRECTIVES",
              "OTHER_ATTR",
              "RENDER_MODIFIERS",
              "GLOBAL",
            ],
            "alphabetical": false,
        }],

        "vue/html-self-closing": ["error", {
            "html": {
                "void": "never",
                "normal": "always",
                "component": "always",
            },
            "svg": "always",
            "math": "always",
        }],

        "vue/html-indent": [
            "error",
            4,
            {
                "attribute": 1,
                "baseIndent": 1,
                "closeBracket": 0,
                "alignAttributesVertically": true,
                "ignores": [],
            },
        ],

        "vue/component-definition-name-casing": ["error", "PascalCase"],

        "vue/no-dupe-keys": ["error", {
            "groups": [],
        }],

        "vue/order-in-components": ["error", {
            "order": [
                "el",
                "name",
                "key",
                "parent",
                "functional",
                ["delimiters", "comments"],
                ["components", "directives", "filters"],
                "extends",
                "mixins",
                ["provide", "inject"],
                "ROUTER_GUARDS",
                "layout",
                "middleware",
                "validate",
                "scrollToTop",
                "transition",
                "loading",
                "inheritAttrs",
                "model",
                ["props", "propsData"],
                "emits",
                "setup",
                "asyncData",
                "data",
                "fetch",
                "head",
                "computed",
                "watch",
                "watchQuery",
                "LIFECYCLE_HOOKS",
                "methods",
                ["template", "render"],
                "renderError",
            ],
        }],

        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "always-multiline",
        }],

        "arrow-parens": ["error", "as-needed"],

        "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],

        "max-len": ["error", { "code": 200 }],

        "vue/max-attributes-per-line": ["error", {
            "singleline": {
                "max": 4,
            },      
            "multiline": {
                "max": 1,
            },
        }],

        "vue/singleline-html-element-content-newline": ["error", {
            "ignoreWhenNoAttributes": true,
            "ignoreWhenEmpty": true,
            "ignores": ["td", "th", "p", "a", "h1", "h2", "h3", "button", "el-button", "span", "label"],
        }],

        "vue/multi-word-component-names": 0,
    },
}

