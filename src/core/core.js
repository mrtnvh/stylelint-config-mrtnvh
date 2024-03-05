module.exports = {
  extends: [
    // https://github.com/stylelint/stylelint-config-standard/
    "stylelint-config-standard",

    // https://github.com/stormwarning/stylelint-config-recess-order
    "stylelint-config-recess-order",
  ],

  plugins: [
    // https://github.com/AndyOGo/stylelint-declaration-strict-value
    "stylelint-declaration-strict-value",

    // https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties#readme
    "stylelint-declaration-block-no-ignored-properties",

    // https://github.com/kristerkari/stylelint-high-performance-animation
    "stylelint-high-performance-animation",

    // https://github.com/Moxio/stylelint-selector-tag-no-without-class
    "stylelint-selector-tag-no-without-class",

    // https://github.com/csstools/stylelint-use-nesting
    "stylelint-use-nesting",

    // https://github.com/csstree/validator
    "stylelint-csstree-validator",

    // https://github.com/yuschick/stylelint-plugin-logical-css
    "stylelint-plugin-logical-css",
  ],

  rules: {
    // https://stylelint.io/user-guide/rules/max-nesting-depth
    // Search for 'the-inception-rule'
    "max-nesting-depth": 3,

    // https://stylelint.io/user-guide/rules/function-url-no-scheme-relative/
    // use explicit https
    "function-url-no-scheme-relative": true,

    // https://stylelint.io/user-guide/rules/function-url-quotes/
    "function-url-quotes": "always",

    // https://stylelint.io/user-guide/rules/font-weight-notation/
    "font-weight-notation": "numeric",

    // https://stylelint.io/user-guide/rules/media-feature-name-no-unknown/
    // TODO - are logical properties already supported by the rule?
    "media-feature-name-no-unknown": [true, { ignoreMediaFeatureNames: [/.*-(inline|block)-size/] }],

    // https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix/
    "media-feature-name-no-vendor-prefix": true,

    // https://stylelint.io/user-guide/rules/property-no-vendor-prefix/
    "property-no-vendor-prefix": true,

    // https://stylelint.io/user-guide/rules/value-no-vendor-prefix/
    "value-no-vendor-prefix": true,

    // https://stylelint.io/user-guide/rules/selector-no-vendor-prefix/
    "selector-no-vendor-prefix": true,

    // https://stylelint.io/user-guide/rules/selector-max-universal/
    "selector-max-universal": 1,

    // https://stylelint.io/user-guide/rules/selector-max-specificity/
    "selector-max-specificity": "1,3,3", // id,class,type

    // https://stylelint.io/user-guide/rules/selector-max-compound-selectors/
    "selector-max-compound-selectors": 3,

    // https://stylelint.io/user-guide/rules/rule-empty-line-before/
    "at-rule-empty-line-before": [
      "always",
      {
        // Only for SCSS
        ignoreAtRules: ["else"],
        except: ["blockless-after-same-name-blockless", "first-nested"],
        ignore: ["after-comment"],
      },
    ],

    // https://stylelint.io/user-guide/rules/color-named/#never
    "color-named": "never",

    // https://stylelint.io/user-guide/rules/alpha-value-notation/
    // This overrides the value of "stylelint-config-standard"
    // https://github.com/stylelint/stylelint-config-standard/blob/main/index.js#L6
    "alpha-value-notation": "number",

    // https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties/
    "declaration-block-no-redundant-longhand-properties": [true, { ignoreShorthands: ["/font/"] }],

    // https://stylelint.io/user-guide/rules/selector-class-pattern/
    "selector-class-pattern": null,

    // https://stylelint.io/user-guide/rules/custom-property-pattern/
    "custom-property-pattern": null,

    // https://stylelint.io/user-guide/rules/custom-media-pattern/
    // Disallow custom media queries because:
    //   1. They are still experimental.
    //   2. Doesn't an additional named media query make the solution more complex?
    //      Can't the problem be solved by moving the responsibility of the query to the element itself by using a container query?
    "custom-media-pattern": [
      "^(s*)$",
      {
        message: `Disallow experimental custom media queries. Can the problem be solved by a container query?`,
      },
    ],

    // use performant animations
    // https://github.com/kristerkari/stylelint-high-performance-animation?tab=readme-ov-file#details
    "plugin/no-low-performance-animation-properties": true,

    // forbids to use `div` and `span` without class names
    // https://github.com/Moxio/stylelint-selector-tag-no-without-class
    "plugin/selector-tag-no-without-class": ["div", "span"],

    // always use nesting where possible
    // https://github.com/csstools/stylelint-use-nesting
    "csstools/use-nesting": "always",

    // use valid css
    // https://github.com/csstree/validator
    "csstree/validator": {
      ignoreAtrules: ["container", "layer"],
      ignoreProperties: ["container", "container-type", "container-name", "text-wrap"],
      ignoreValue: "oklch",
    },

    // https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties
    // Disallow property values that are ignored due to another property value in the same rule.
    "plugin/declaration-block-no-ignored-properties": true,

    // https://github.com/AndyOGo/stylelint-declaration-strict-value
    "scale-unlimited/declaration-strict-value": [
      // For properties containing color, or are z-index, font-size, or font-family
      ["/color/", "z-index", "font-size", "font-family"],
      {
        ignoreKeywords: {
          // Do not throw error for any property if value is 'inherit'
          "": ["inherit"],
          // Do not throw error for properties containing color if value is 'currentColor', 'transparent', or 'inherit'
          "/color/": ["currentColor", "transparent", "inherit"],
        },
        disableFix: true,
      },
    ],

    // Warn author to use logical properties
    // https://github.com/yuschick/stylelint-plugin-logical-css
    "plugin/use-logical-properties-and-values": [true, { severity: "warning" }],
    "plugin/use-logical-units": [true, { severity: "warning" }],
  },
};
