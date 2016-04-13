import config from '../config';
import server from '../server/main';
import _debug from 'debug';

const debug = _debug('app:bin:server');
const port = config.server.port;
const host = config.server.host;

server.listen(port);
debug(`Server is now running at http://${host}:${port}.`);
