Stringcheck
=========

Stringcheck is a small module to check strings against common Regexpatterns (like email address, numbers, etc).
Stringcheck returns either the input if the input correctly formated or false.
It provides the following methods:

*   date
*   url
*   username
*   password
*   email
*   ipv4
*   integer
*   positiveInteger
*   negativeInteger
*   positiveOrNegativeNumber
*   positiveNumber
*   negativeNumber
*   phoneNumber
*   hex
*   newLine

## Installation

  npm install stringcheck --save

## Usage

  var stringcheck = require('stringcheck');

  let response = stringcheck.date('31.12.2016');

  if(response !== null) {
      // The date is correctly formated.
  }

## Tests

  npm test


## Release History

* 0.1.0 Initial release

## Sources

Thanks to [lukehass](https://github.com/lukehaas/RegexHub) for the Regex expressions.
