module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "embertest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "react/prop-types": 0,
      "no-undef": 0,
      "react/no-string-refs": 0,
      "no-unused-vars": 0,
      "no-bitwise": ["error", { "allow": ["~"] }],
      "quotes": ["error", "single", { "avoidEscape": true }],
      "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
      "object-curly-newline": 0,
      "no-ternary": 0,
      "no-underscore-dangle": 0,
      "linebreak-style": 0,
      "padded-blocks": 0,
      "object-shorthand": 0,
      "sort-vars": 0,
      "max-params": 0,
      "multiline-ternary": "off",
      "newline-before-return": "off",
      "newline-per-chained-call": "off",
      "object-curly-spacing": ["off", "never"],
      "prefer-arrow-callback": 0,
      "prefer-reflect": 0,
      "prefer-template": 0,
      "spaced-comment": ["error", "always", { "markers": ["global", "eslint"] }],
      "dot-location": 0,
      "eol-last": 0,
      "func-names": 0,
      "global-require": 0,
      "require-jsdoc": 0,
      "valid-jsdoc": 0,
      "sort-keys": 0,
      "prefer-destructuring": 0,
      "jsx-quotes": ["error", "prefer-double"],
      "babel/new-cap": 0,
      "babel/no-invalid-this": 0,
      "babel/no-unused-expressions": 0,
    }
};