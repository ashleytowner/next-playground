const https = require('https');
const http = require('http');
const fs = require('fs');
const next = require('next');
require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });

const handle = app.getRequestHandler();

if (process.env.NODE_ENV === 'production') {
  const sslKeyFile = process.env.SSL_KEY;
  const sslCertFile = process.env.SSL_CERT;

  if (!sslKeyFile || !sslCertFile) {
    throw new Error('SSL_KEY and SSL_CERT must be set');
  }

  let httpsOptions;

  httpsOptions = {
    key: fs.readFileSync(process.env.SSL_KEY),
    cert: fs.readFileSync(process.env.SSL_CERT),
  };

  app.prepare().then(() => {
    https
      .createServer(httpsOptions, (req, res) => {
        handle(req, res);
      })
      .listen(443, (err) => {
        if (err) throw err;
        console.log('> Ready on https://localhost:443');
      });
  });
} else {
  app.prepare().then(() => {
    http
      .createServer((req, res) => {
        handle(req, res);
      })
      .listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
      });
  });
}
