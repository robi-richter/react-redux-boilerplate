import WebpackDevMiddleware from 'webpack-dev-middleware';
import _debug from 'debug';
import config from '../../config';

const paths = config.utilsPaths;
const debug = _debug('app:server:webpack-dev');

export default function (compiler, publicPath) {
  debug('Enable webpack dev middleware.');

  return WebpackDevMiddleware(compiler, {
    publicPath,
    contentBase: paths.base(config.clientDir),
    hot: true,
    quiet: config.compiler.quiet,
    noInfo: config.compiler.quiet,
    lazy: false,
    stats: config.compiler.stats
  });
}
