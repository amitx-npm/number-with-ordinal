## ordinal-number

[![npm version](https://img.shields.io/npm/v/ordinal-number.svg)](https://www.npmjs.com/package/ordinal-number)
[![npm downloads](https://img.shields.io/npm/dm/ordinal-number.svg)](https://www.npmjs.com/package/ordinal-number)
[![CI](https://github.com/amitx-npm/number-with-ordinal/actions/workflows/ci.yml/badge.svg)](https://github.com/amitx-npm/number-with-ordinal/actions)
[![license: ISC](https://img.shields.io/badge/license-ISC-blue.svg)](LICENSE)

Lightweight, dependency-free utility to convert numbers to their ordinal strings: `1 -> 1st`, `2 -> 2nd`, `3 -> 3rd`, …

### Install

```bash
npm i ordinal-number
# or
pnpm add ordinal-number
# or
yarn add ordinal-number
```

### Usage

ESM:
```ts
import ordinal from 'ordinal-number';

ordinal(1); // "1st"
ordinal(2); // "2nd"
```

CommonJS:
```js
const ordinal = require('ordinal-number');

ordinal(3); // "3rd"
ordinal(11); // "11th"
```

TypeScript:
```ts
import { ordinal } from 'ordinal-number';

const out: string = ordinal(22);
```

### API

#### `ordinal(input: number | bigint | string): string`

Converts an integer-like input into a string with an ordinal suffix. Handles:
- **0**: `0th`
- **Negatives**: `-1st`, `-2nd`, `-3rd`, `-11th`
- **Very large integers**: via `bigint` or numeric strings
- **Strings**: numeric strings are parsed; other inputs are stringified as-is

### Edge cases

```ts
ordinal(0);      // "0th"
ordinal(-1);     // "-1st"
ordinal(11);     // "11th"
ordinal(12);     // "12th"
ordinal(13);     // "13th"
ordinal(111);    // "111th"
ordinal(112);    // "112th"
ordinal(113);    // "113th"
ordinal(101);    // "101st"
ordinal(-22);    // "-22nd"
ordinal(12345678901234567890n); // "12345678901234567890th"
ordinal('42');   // "42nd"
ordinal('foo');  // "foo" (non-numeric strings are returned stringified)
```

### Why this package?

- **Dependency-free** and **tiny**
- **Dual ESM/CJS** with TypeScript types
- **Robust edge-case handling**

### Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

### License

ISC © Amit
