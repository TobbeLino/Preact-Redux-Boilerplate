const path = require('path');
const { merge } = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const PreactRefreshPlugin = require('@prefresh/webpack');

module.exports = (env, argv) => {
    const isDevelopment = (argv.mode === 'development');

    const baseConfig = {
        output: {
            path: __dirname + '/dist',
            /*
            // The property 'environment' can be used to switch off specific js features from built output.
            // But usually "target" (below) is better to tweak output compatibility...
            environment: {
                arrowFunction: false,
                bigIntLiteral: false,
                const: false,
                destructuring: false,
                dynamicImport: false,
                forOf: false,
                module: false,
            },
            */
        },
        // Set target/output compatibility (setting e.g. 'es6' will keep arrow-functions, etc)
        target: ['web', 'es5'],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },
        resolve: {
            modules: [
                path.resolve('./src'),
                path.resolve('./node_modules')
            ],
            alias: {
                react: 'preact/compat',
                'react-dom/test-utils': 'preact/test-utils',
                'react-dom': 'preact/compat',     // Must be below test-utils
                'react/jsx-runtime': 'preact/jsx-runtime'
            }
        },
        devServer: {
            compress: true,
            // port: 9001,
            // open: true,
            static: {
                directory: __dirname + '/dist',
            },
            headers: {
                // Add some headers that allow CORS from other servers when running in dev mode
                // E.g. when dynamically loading this module from another host/server
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
            },
            devMiddleware: {
                stats: {
                    assets: false,
                    children: false,
                    chunks: false,
                    chunkModules: false,
                    colors: true,
                    entrypoints: false,
                    hash: false,
                    modules: false,
                    timings: false,
                    version: false,
                },
            },
            liveReload: false,
            hot: 'only'
        },
        watch: false,
        devtool: 'source-map',
        plugins: isDevelopment ? [
            new PreactRefreshPlugin(),
        ] : [
        ],
    }

    // dependencies are copied to folder '/dist/"
    return merge(baseConfig, {
        entry: ['./src/index.js'],
        output: {
            filename: 'index.js',
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, 'src', 'index.html'),
                        to: path.resolve(__dirname, 'dist', 'index.html')
                    }
                ],
            }),
        ],
        devServer: {
            port: 9002
        }
    });
};
