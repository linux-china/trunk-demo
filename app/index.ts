// @ts-ignore
import init, * as exports from "../public/wasm/trunk-demo.js"

init('/wasm/trunk-demo_bg.wasm').then((wasm: any) => {
    console.log(wasm);
    console.log(exports.greet("Wasm"));
});

export function hello(name: string) {
    console.log(exports.greet(name));
}
