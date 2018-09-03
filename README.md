TSLint config Ackee
====================

TSLint rules and settings common for Ackee javascript developers.

How to use
----------

Install it `npm i -D tslint-config-ackee`

Create `tslint.json` in your project:

```json
{
    "defaultSeverity": "error",
    "extends": [
        "tslint-config-ackee"
    ],
    "jsRules": {},
    "rules": {},
    "rulesDirectory": []
}
```

Dependencies
------------

**Extends**

* [tslint:recommended](https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts)
* [tslint-eslint-rules](https://github.com/buzinas/tslint-eslint-rules)
* [tslint-no-unused-expression-chai](https://github.com/kwonoj/tslint-no-unused-expression-chai)
