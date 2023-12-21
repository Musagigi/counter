import webpack from 'webpack'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolver';
import { BuildOptions } from './types/types';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
	const isDev = options.mode === 'development'

	return {
		mode: options.mode,
		entry: options.paths.entry,
		output: {
			path: options.paths.output,
			filename: '[name].[contenthash].js',
			clean: true
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(),
		devtool: isDev && 'inline-source-map',
		devServer: buildDevServer(options),
	}
}