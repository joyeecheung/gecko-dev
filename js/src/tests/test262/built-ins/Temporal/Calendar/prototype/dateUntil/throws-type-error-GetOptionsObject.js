// |reftest| skip -- Temporal is not supported
// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.dateuntil
description: Temporal.Calendar.prototype.dateUntil throw TypeError on GetOptionsObject
info: |
  6. Set options to ? GetOptionsObject(options).
features: [Symbol, Temporal, arrow-function]
---*/
let cal = new Temporal.Calendar("iso8601");

["string", null, true, false, 123, 456n, Symbol(), Infinity, NaN].forEach(function (opt) {
  assert.throws(TypeError, () => cal.dateUntil("2021-07-16", "2021-08-11", opt),
      "Invalid options will cause GetOptionsObject to throw TypeError");
})

reportCompare(0, 0);
