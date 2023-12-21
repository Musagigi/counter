import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ModuleOptions } from "webpack";
import { BuildOptions } from './types/types';
import ReactRefreshTypeScript from 'react-refresh-typescript';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
	
	const isDev = options.mode === 'development'

	return [
			{
				test: /\.s[ac]ss$/i,
				use: [
					isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 
					"css-loader", 
					"sass-loader",
				],
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							getCustomTransformers: () => ({
								before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
							})
						}
					}
				]
			},
			// {
			// 	test: /\.tsx?$/,
			// 	exclude: /node_modules/,
			// 	use: {
			// 		loader: 'babel-loader',
			// 		options: {
			// 			presets: [
			// 				'@babel/preset-env',
			// 				'@babel/preset-typescript',
			// 				[
			// 					'@babel/preset-react', {
			// 						runtime: isDev ? 'automatic' : 'classic',
			// 					}
			// 				],
			// 			]
			// 		}
			// 	}
			// }
	]
}