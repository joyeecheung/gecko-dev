// |reftest| skip -- Temporal is not supported
// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.now.instant
description: Temporal.Now.instant is extensible.
features: [Temporal]
---*/

assert(Object.isExtensible(Temporal.Now.instant));

reportCompare(0, 0);
