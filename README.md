<div align="center">

## DEPRECATION NOTICE

This package is no longer maintained.
</div>

<div align="center">

![TSLint config Ackee](https://i.imgur.com/Gvg8iJm.png)

[![Npm](https://img.shields.io/npm/v/tslint-config-ackee.svg?style=flat-square)](https://www.npmjs.com/package/tslint-config-ackee)
[![License](https://img.shields.io/github/license/AckeeCZ/tslint-config-ackee.svg?style=flat-square)](https://github.com/AckeeCZ/tslint-config-ackee/blob/master/LICENSE)
[![Known Vulnerabilities](https://snyk.io/test/github/AckeeCZ/tslint-config-ackee/badge.svg?targetFile=package.json)](https://snyk.io/test/github/AckeeCZ/tslint-config-ackee?targetFile=package.json)
[![Dependencies](https://img.shields.io/david/AckeeCZ/tslint-config-ackee.svg?style=flat-square)](https://david-dm.org/AckeeCZ/tslint-config-ackee)	
[![Dev dependencies](https://img.shields.io/david/dev/AckeeCZ/tslint-config-ackee.svg?style=flat-square)](https://david-dm.org/AckeeCZ/tslint-config-ackee)
[![Maintainability](https://img.shields.io/codeclimate/maintainability/AckeeCZ/tslint-config-ackee.svg?style=flat-square)](https://codeclimate.com/github/AckeeCZ/tslint-config-ackee)
[![Downloads](https://img.shields.io/npm/dw/tslint-config-ackee.svg?style=flat-square)](https://www.npmjs.com/package/tslint-config-ackee)

</div>

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

**Rules**

* [tslint-consistent-codestyle](https://github.com/ajafff/tslint-consistent-codestyle)
