import init, * as exports from "../target/wasm-bindgen/debug/trunk-demo";

const wasmPath = '../target/wasm-bindgen/debug/trunk-demo_bg.wasm';

init(wasmPath).then((wasm: any) => {
    console.log(wasm);
    console.log(exports.greet("Wasm"));
});

export function hello(name: string) {
    console.log(exports.greet(name));
}
