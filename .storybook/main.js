const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/preset-scss",
        "@storybook/addon-interactions",
    ],
    "core": {
        "builder": "webpack5"
    },
    features: {
        interactionsDebugger: true,
    },
    webpackFinal: async (config) => {
        // configure for absolute imports
        config.resolve.plugins = [
            ...(config.resolve.plugins || []),
            new TsconfigPathsPlugin({
                extensions: config.resolve.extensions,
            }),
        ];

        // disable whatever is already set to load SVGs
        config.module.rules
            .filter(rule => rule.test.test('.svg'))
            .forEach(rule => rule.exclude = /\.svg$/i);

        // add SVGR instead
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        svgoConfig: {
                            plugins: [
                                {
                                    name: 'preset-default',
                                    params: {
                                        overrides: {
                                            removeViewBox: false,
                                        },
                                    },
                                },
                            ]
                        },
                    },
                },
                {
                    loader: 'file-loader',
                    options: {
                        name: 'static/media/[path][name].[ext]'
                    }
                }
            ],
            type: 'javascript/auto',
            issuer: {
                and: [/\.(ts|tsx|js|jsx|md|mdx)$/]
            }
        });
        return {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    ...config.resolve.alias,
                    '@emotion/core': toPath('node_modules/@emotion/react'),
                    'emotion-theming': toPath('node_modules/@emotion/react'),
                },
            },
        };

    }
}