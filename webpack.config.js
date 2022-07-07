const path = require('path');

module.exports = {
    mode: 'none',
    entry: './src/index2.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        alias: {
            three: path.resolve('./node_modules/three')   // <----- Addition
        },
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test:  /\.glb/,
                type: 'asset/resource'
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      }
    }
};