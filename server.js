'use strict';

const express = require('express');
const app = express();

app.set('PORT', process.env.PORT || 8080);
app.use('/', express.static(__dirname));

app.listen(app.get('PORT'), function() {
	console.log(`Server Started on port ${app.get('PORT')}`);
});
