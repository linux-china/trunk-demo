/**
 * @type {import('vite').UserConfig}
 */
const config = {
    root: "dist",
    build: {
        rollupOptions: {
            output: {
                assetFileNames: `[name].[ext]`
            }
        }
    }
}

export default config
