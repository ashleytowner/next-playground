const fs = require('fs');

let keyFile;
let certFile;

try {
  keyFile = fs.readFileSync('/etc/letsencrypt/live/fullchain.pem');
  certFile = fs.readFileSync('/etc/letsencrypt/live/privkey.pem');
} catch {
  console.error('Couldn\'t get SSL certificate files');
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  secure: true,
  server: {
    https: {
      key: keyFile,
      cert: certFile
    }
  }
};

module.exports = nextConfig;
