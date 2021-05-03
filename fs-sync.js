const fs = require("fs");
const { Console } = require("node:console");

console.log((process.hrtime()[0] / 60).toFixed(5));
console.log("Antes da leitura");

//const dados = fs.readFileSync("file.txt"); //LEITURA BLOQUEANTE
const dados = fs.readFile("file.txt", (err, data) => { //LEITURA NAO BLOQUEANTE
  if (err) throw err;
  console.log("Termino da leitura");
});

console.log("Apos a leitura");

console.log((process.hrtime()[0] / 60).toFixed(5));