import server from './server/index';
import devServer from './server/dev';

server((app) => devServer(app));
