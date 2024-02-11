#!/usr/bin/node
const args = process.argv;
const request = require('request');

request
  .get(args[2])
  .on('response', function (response) {
    console.log('code:', response.statusCode);
<<<<<<< HEAD
  });
=======
  });
>>>>>>> 78ad21b4b1370d1d248cc822fe9778d8a54683cb
