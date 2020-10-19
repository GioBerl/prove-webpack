const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: process.env.NODE_ENV || "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        //!Il metodo path.resolve () risolve una sequenza di percorsi (o segmenti di percorso) in un percorso assoluto.
    },
    devServer: {
        contentBase: "dist/", // Relative directory for base of server
        publicPath: "/", // Live-reload
        inline: true,
        port: process.env.PORT || 3000, // Port Number
        host: "localhost", // Change to '0.0.0.0' for external facing server
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    {
                        // Adds CSS to the DOM by injecting a `<style>` tag
                        loader: "style-loader",
                    },
                    {
                        // Interprets `@import` and `url()` like `import/require()` and will resolve them
                        loader: "css-loader",
                    },
                    {
                        // Loads a SASS/SCSS file and compiles it to CSS
                        loader: "sass-loader",
                    },
                ],
            },
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
    plugins: [
        // ! per ogni pagina html basta duplicare questo e cambiare con i nomi rilevanti
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
    ],
};
