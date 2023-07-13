import copy from 'rollup-plugin-copy';

const output = {
    input: "./index.js",
    output: [{
        chunkFileNames: "[name].js",
        format: "es",
        dir: "./dist"
    }],
    plugins: [
        copy({
            targets: [
                { src: "./descriptor.json", dest: "./dist" },
                { src: "./screenshot.png", dest: "./dist" }
            ]
        })
    ]
};

export default [output];
