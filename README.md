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

* [tslint-config-airbnb](https://github.com/progre/tslint-config-airbnb)
* [tslint-no-unused-expression-chai](https://github.com/kwonoj/tslint-no-unused-expression-chai)
