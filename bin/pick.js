#!/usr/bin/env node
'use strict';
const fs = require('fs');
const file = process.argv[2];
const paths = process.argv.slice(3);
if (!file || !paths.length) {
  console.error('Usage: json-pick <file.json> <path> [path...]');
  process.exit(1);
}
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
function get(o, p) {
  return p.split('.').reduce((a, k) => (a == null ? undefined : a[k]), o);
}
for (const p of paths) {
  const v = get(data, p);
  console.log(p + '=', typeof v === 'object' ? JSON.stringify(v) : v);
}
