var ogre = require('./');
var port = process.env.PORT || 3000;
ogre.createServer().listen(port)
console.log('Ogre listening on port ' + port)
