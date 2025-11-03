const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++ {
}
// Throws error at solution.js:2 : SyntaxError: Unexpected token '{'

// /home/icaro/projects/exercicios-de-logica(javascript)/errorsInJavaScript/examples04.js:2
// for (let i = 0; i < arr.length; i++ {
//                                     ^

// ! SyntaxError: Unexpected token '{'
//     at wrapSafe (node:internal/modules/cjs/loader:1472:18)
//     at Module._compile (node:internal/modules/cjs/loader:1501:20)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1613:10)
//     at Module.load (node:internal/modules/cjs/loader:1275:32)
//     at Module._load (node:internal/modules/cjs/loader:1096:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
//     at node:internal/main/run_main_module:28:49

// Node.js v20.19.2