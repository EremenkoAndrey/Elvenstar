let debug = process.env.NODE_ENV !== "production";

module.exports = {
    entry: {
        app: "./dev/app.js"
    },
    output: {
        path: "C:/Bitrix/www/bitrix/templates/elvenstar/js/",
        filename: "app.min.js",
        publicPath: '/bitrix/templates/elvenstar/js/'
    },
    watch: true, // boolean
    // enables watching
    devtool: debug ? "cheap-source-map" : null,
    watchOptions: {
        aggregateTimeout: 1000, // in ms
        // aggregates multiple changes to a single rebuild

        poll: true,
        poll: 500, // intervall in ms
        // enables polling mode for watching
        // must be used on filesystems that doesn't notify on change
        // i. e. nfs shares
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'less-loader'
                ]
            }
        ],
    },
};