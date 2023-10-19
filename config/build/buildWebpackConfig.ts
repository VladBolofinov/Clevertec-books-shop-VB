import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolves} from "./buildResolves";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options:BuildOptions):webpack.Configuration {
    const {paths, mode, isDev} = options;
    return {
        mode: mode,//тип сборки (есть production он автоматически минимифицирует код)
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js", //название главного файла в проекте
            path: paths.build,//куда собирается сборка
            clean: true, //удаляет предыдущие файлы при новой сборке каждый раз
            publicPath: '/' //при динамических импортах при перезагрузке страницы сборка в дев режиме не правильный путь отображает
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolves(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}