'use strict';

module.exports = {
  plugins: ['stylelint-order', 'stylelint-scss'],
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'order/order': ['custom-properties', 'declarations'], // Sort alphabetically
    'order/properties-alphabetical-order': true,
    indentation: 2,
    'string-quotes': 'single',
    'color-hex-case': 'lower',
    'color-hex-length': 'long',
    'color-named': 'never',
    'selector-no-qualifying-type': true,
    'selector-combinator-space-after': 'always',
    'selector-attribute-quotes': 'always',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-brackets-space-inside': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-colon-space-after': 'always-single-line',
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'number-leading-zero': 'never',
    'function-url-quotes': 'always',
    'font-family-name-quotes': 'always-where-recommended',
    'comment-whitespace-inside': 'always',
    'comment-empty-line-before': 'never',
    'rule-empty-line-before': ['always', { ignore: ['first-nested', 'after-comment'] }],
    'selector-pseudo-element-colon-notation': 'single',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-no-vendor-prefix': true,
    'media-feature-range-operator-space-before': 'never',
    'media-feature-range-operator-space-after': 'never',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-colon-space-before': 'never',
    'media-feature-colon-space-after': 'never'
  }
};