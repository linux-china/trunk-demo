Trunk & Vite.js Demo
=========================

Trunk is a WASM web application bundler for Rust, and Vite.js is next Generation Frontend Tooling. Ok, they are
together now for you.

# Development

* install Trunk first:  `cargo install --git https://github.com/linux-china/trunk.git`
* start dev server by `npm run dev` and visit http://localhost:3000

# Features

* Wasm build by Trunk
* Web development by Vite.js
* Bundle by Vite.js
* Trunk can still work as his way.

# Trunk Configuration

Elements in trunk.toml:

```
pub struct ConfigOpts {
    pub build: Option<ConfigOptsBuild>,
    pub watch: Option<ConfigOptsWatch>,
    pub serve: Option<ConfigOptsServe>,
    pub clean: Option<ConfigOptsClean>,
    pub tools: Option<ConfigOptsTools>,
    pub proxy: Option<Vec<ConfigOptsProxy>>,
    pub hooks: Option<Vec<ConfigOptsHook>>,
}
```

More details: https://github.com/thedodd/trunk/blob/master/src/config/models.rs

# References

* Trunk: https://trunkrs.dev/
* Vite.js: https://vitejs.dev/
* npm-run-all: https://github.com/mysticatea/npm-run-all
