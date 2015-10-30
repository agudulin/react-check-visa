import bodyParser from 'body-parser';
import express from 'express';
import checkVisa from 'check-visa';
import * as routes from '../app/constants/Routes';

export default function(callback) {
  const app = express();
  app.set('env', process.env.NODE_ENV || 'development');
  app.set('host', process.env.HOST || '0.0.0.0');
  app.set('port', process.env.PORT || 3000);

  app.use(bodyParser.json({ extended: true }));
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get(`${routes.CHECK_BARCODE}/:barcode`, (req, res) => {
    console.log(req.params.barcode);
    checkVisa(req.params.barcode)
      .then((result) => res.json({ ready: result }))
      .catch((error) => res.json({ ready: false, error: 'Can\'t'}));
  });

  if (app.get('env') === 'production') {
    app.use('/dist', express.static('dist'));
    app.get('/', (req, res) => res.sendFile(__dirname + '/app.html'));
  }

  return app.listen(app.get('port'), () => {
    console.log(`Express ${app.get('env')} server listening on ${app.get('host')}:${app.get('port')}`);
    callback(app);
  });
}
