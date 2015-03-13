var http = require('http')
  , ecstatic = require('ecstatic')(__dirname + '/static')
  , router = require('routes')()

router.addRoute('/', function (req, res, params) {
  res.end('welcome!')
})

var server = http.createServer(function (req, res) {
  var m = router.match(req.url)
  if (m) m.fn(req, res, m.params)
  else ecstatic(req, res)
}).listen( 3000, 'localhost', function () {
  console.log('listening on :' + server.address().port);
})

