import copy from 'rollup-plugin-copy';

const output = {
    input: "./src/index.js",
    output: [{
        chunkFileNames: "[name].js",
        format: "es",
        dir: "./dist"
    }],
    plugins: [
        copy({
            targets: [
                { src: "./src/descriptor.json", dest: "./dist" },
                { src: "./src/screenshot.png", dest: "./dist" },
                { src: "./src/template.html", dest: "./dist" },
            ]
        })
    ]
};

export default [output];
