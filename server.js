import bodyParser from 'body-parser';
import express from 'express';
import checkVisa from 'check-visa';
import * as routes from './app/constants/Routes';

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get(`${routes.CHECK_BARCODE}/:barcode`, (req, res) => {
  console.log(req.params.barcode);
  checkVisa(req.params.barcode)
    .then((result) => res.json({ ready: result }))
    .catch((error) => res.json({ ready: false, error: 'Can\'t'}));
});

app.listen(3000, () =>
  console.log(`Server running at localhost:3000`)
);

// if (env.production === false) {
  var webpack = require('webpack');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var config = require('./webpack.config');
  var compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    lazy: false,
    stats: { colors: true }
  }));
  app.use(webpackHotMiddleware(compiler));

  app.use((req, res) => res.sendFile(__dirname + '/index.html'));

  app.listen(3001, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.info('webpack dev server listening on http://localhost:3001');
    }
  });
// }
