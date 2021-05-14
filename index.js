var fs = require('fs');
var uglifyjs = require("uglify-js");
var result = uglifyjs.minify("input",{
   mangle:false
});