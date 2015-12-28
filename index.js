'use strict';

var merge = require('merge');
var autoprefixer = require('autoprefixer');
var postcss = require('postcss');
var cssmin = require('cssmin');

module.exports = {

	test: function (a) {
		var b = a + 1;

		return b;
	}

};