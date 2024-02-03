#!/usr/bin/node
const Args = process.argv.slice(2);

if (Args.length > 1) {
  console.log('Arguments found');
} else if (Args.length === 0) {
  console.log('No argument');
} else {
  console.log('Argument found');
}
