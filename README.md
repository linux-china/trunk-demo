Trunk Demo
=========================

Trunk is a WASM web application bundler for Rust.

# Development

* install Trunk first:  `brew install trunk`
* start dev server by `npm run dev` and visit http://localhost:3000

# Features

* Wasm build by Trunk
* Web development by Vite.js
* Bundle by Vite.js

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
