var express = require('express')
  , browserSync = require('browser-sync')
  , app = express()
  , port = process.env.PORT || 3400

app.set('views', __dirname + '/public')
app.set('view enginge', 'jade')
//app.use(express.static(__dirname + '/public'))

// routes
require('./routes.js')(app)

// start server
app.listen( port, 'localhost', function () {
  if (app.get('env') == 'development') {
    browserSync({
      proxy: 'localhost:' + port,
      files: ['public/**/*.{js,css,html}']
    })
  }
})
