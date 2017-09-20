const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname+"/views/partials");
app.set('view engine', 'hbs');

//app.use((req, res, next) => {
//	res.render('maintenance.hbs', {
//		maintenanceMsg: 'This site is under maintenance!! Sorry for the inconvenience.'
//	});
//});

app.use(express.static(__dirname+ '/public'));


hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
	return text.toUpperCase();
})

app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: 'Learning Node.js + Express + Handlebars',
		welcomeMsg: 'Welcome World!!'
	});
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About PAge'
	});
});

app.get('/bad', (req, res) => {
	res.send({
		errorMsg: 'This is bad request'
	});
})

app.listen(3000, () => {
	console.log("Server started at 3000");
});