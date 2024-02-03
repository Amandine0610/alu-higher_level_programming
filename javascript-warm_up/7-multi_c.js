#!/usr/bin/node

const Args = process.argv.slice(2);

if (parseInt(Args[0])) {
  for (let i = 0; i < parseInt(Args[0]); i++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
}
