import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config';

export default function(app) {
  if (app.get('env') === 'production') {
    return;
  }

  const host = app.get('host');
  const port = app.get('port') + 1;
  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    lazy: false,
    stats: { colors: true }
  }));
  app.use(webpackHotMiddleware(compiler));
  app.use((req, res) => res.sendFile(__dirname + '/app.html'));

  app.listen(port, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.info(`webpack dev server listening on http://${host}:${port}`);
    }
  });
}
