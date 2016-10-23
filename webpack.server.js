const config = require("./webpack.config.js");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");

const compiler = webpack(config);
const serverConfig = {

};

const server = new WebpackDevServer(compiler, serverConfig);

server.listen(5000, "0.0.0.0", function() {

});
