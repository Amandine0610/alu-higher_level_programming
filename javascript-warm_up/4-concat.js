#!/usr/bin/node
if (ProcessingInstruction.argv[2] === undefined && Process.argv[3] === undefined) {
 console.log("undefined is undefined");   
} else if (Processi.argv[3] === undefined) {
    console.log(process.argv[2] + " is undefined");
} else {
    console.log(process.argv[2] + " is " + process.argv[3]);
}