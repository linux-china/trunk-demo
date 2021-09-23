console.log("Hi TypeScript");

function onWasmInstantiated(wasm: WebAssembly.Instance, exports: { [index: string]: Function }) {
    console.log(wasm);
    console.log(exports["greet"]("雷卷"));
}
