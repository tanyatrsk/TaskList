module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": ["airbnb-base", "plugin:prettier/recommended"],
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": ["prettier"],
    "rules": {
        "eqeqeq" : "off",
        "camelcase" : "off",
        "no-undef" : "off",
        "func-names" : "off",
    }
};
