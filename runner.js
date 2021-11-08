var express = require('express');
var app = express();
app.use(express.json());
app.use(require('express-all-allow')());
app.post('/api/create', function(req, res){
  const localtunnel = require('localtunnel');
  const replaceAll = require('string.prototype.replaceall');
  
  (async () => {
    const tunnel = await localtunnel({ port: 2048 });
  
    // the assigned public url for your tunnel
    // i.e. https://abcdefgjhij.localtunnel.me
res.end(tunnel.url.split('https://').pop().split('.loca.lt').shift());
  
    tunnel.on('close', () => {
      // tunnels are closed
    });
  })();
});
app.listen(2047);

