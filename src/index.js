const server = require('express')();
const path = require('path');
const exphbs = require('express-handlebars');
const res = require('express/lib/response');
// Configurations

server.set('port', process.env.PORT || 3000);
server.set('views', path.join(__dirname, 'views'));
server.engine('.hbs', exphbs.engine({
    defaultLayout: 'main.hbs',
    LayoutsDir: path.join(server.get('views'), 'layouts'),
    PartialsDir:  path.join(server.get('views'), 'partials'),
    extname: '.hbs'
}));
server.set('view engine', '.hbs');

// initializations

// middlewares

// routes 

server.use(require(path.join(__dirname, 'routes')));

// public files 

server.listen(server.get('port'), (request,response) => {
    console.log('listening on port: ', server.get('port'));
});