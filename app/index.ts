import init, * as exports from "../target/trunk/trunk-demo";

const wasmPath = '../target/trunk/trunk-demo_bg.wasm';

init(wasmPath).then((wasm: any) => {
    console.log(wasm);
    console.log(exports.greet("Wasm"));
});

export function hello(name: string) {
    console.log(exports.greet(name));
}
