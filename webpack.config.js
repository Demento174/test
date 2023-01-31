const path = require('path');

module.exports = {
    entry: './assets/src/js/index.ts',
    target: 'web',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'assets')+'/build',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        client: {

            // Показывает ошибки при компиляции в самом браузере
            overlay: {

                // Ошибки
                errors: true,

                // Предупреждения
                warnings: false,
            },

            // Показывает прогесс компиляции
            progress: true
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader","less-loader"]
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};