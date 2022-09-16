module.exports = (api) => {
    api.cache(true);

    return {
        "presets": [
            "@babel/preset-env",
            "@babel/preset-react"
        ],
        "plugins": [
            ["@babel/plugin-transform-runtime", {
                "helpers": true,
                "regenerator": true,

                // The option "corejs" can be added, toghether with adding dependecy "@babel/runtime-corejs2" or "@babel/runtime-corejs3" to package.json
                // to make babel add polyfills for newer js features like Promise, etc (https://babeljs.io/docs/en/babel-plugin-transform-runtime#corejs)
                // "corejs": 2
            }],
            ["@babel/plugin-transform-react-jsx", {
                // Transform all JSX to calls to preact's h()-function
                "pragma": "h"
            }],
            ['babel-plugin-jsx-pragmatic', {
                // Automatically inject the pragma dependency in all modules needing it:
                // import {h as h} from "preact"
                module: 'preact',
                import: 'h',
                export: 'h',
            }],
        ]
    }
}
