#!/usr/bin/node

const Args = process.argv.slice(2);

if (parseInt(Args[0])) {
  console.log(`My number: ${parseInt(Args[0])}`);
} else {
  console.log('Not a number');
}
