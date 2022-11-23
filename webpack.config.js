const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const webpack = require('./webpack')

module.exports = async function(env, argv) {
    webpack.default
    const config = await createExpoWebpackConfigAsync({
        ...env,
        babel: {
            dangerouslyAddModulePathsToTranspile: ['@ui-kitten/components']
        }
    }, argv);
    return config;
};