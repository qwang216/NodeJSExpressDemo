var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

var bookRouter = require('./src/routes/bookRoutes');

app.use(express.static('public'));
app.set('views', './src/views');

//var handlebars = require('express-handlebars');
//app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', 'ejs');
app.use('/books', bookRouter);

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello from render',
        nav: [{
            Link: '/Books',
            Text: 'Books'
        }, {
            Link: '/Authors',
            Text: 'Authors'
        }]
    });
});

//app.get('/books', function (req, res) {
//    res.send('Hello Books');
//});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});
