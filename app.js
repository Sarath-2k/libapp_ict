const express = require('express');
const nav = [
    { link: '/books', name: 'books' },
    { link: '/author', name: 'author' },
    { link: '/login', name: 'Login' },
    { link: '/signup', name: 'Sign up' },
    { link: '/admin', name: 'Add book' }

];
const bookRouter = require('./src/routes/bookRoutes')(nav);
const authorRouter = require('./src/routes/authorroutes');
const loginRouter = require('./src/routes/loginroutes');
const signupRouter = require('./src/routes/signuproutes');
const adminrouter = require('./src/routes/adminrouter')
const app = new express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './src/views')
app.use('/books', bookRouter);
app.use('/author', authorRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/admin', adminrouter);
app.get('/', function(req, res) {

    res.render("index", {

        nav,
        title: 'Library'
    });


});

app.listen(8989);