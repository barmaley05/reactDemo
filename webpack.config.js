var path    = require('path')
    ,   webpack = require('webpack')
;
module.exports = {
    entry: [
        // Set up an ES6-ish environment
        'babel-polyfill',

        // Add your application's scripts below
        './src',
    ],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },resolve: {
        // require files in app without specifying extensions
        extensions: ['.js', '.json', '.jsx', '.less'],
        alias: {
            // pretty useful to have a starting point in nested modules
            'appRoot': path.join(__dirname, 'js'),
            'vendor': 'appRoot/vendor'
        }
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",

                // Skip any files outside of your project's `src` directory
                include: [
                    path.resolve(__dirname, "src"),
                ],

                // Only run `.js` and `.jsx` files through Babel
                test: /\.jsx?$/,

                // Options to configure babel with
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0', 'react'],
                }
            },
        ]
    }
};