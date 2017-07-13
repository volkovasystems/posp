"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "posp",
              			"path": "posp/posp.js",
              			"file": "posp.js",
              			"module": "posp",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/posp.git",
              			"test": "posp-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Pop spliced elements from array.
              	@end-module-documentation
              
              	@include:
              		{
              			"condev": "condev",
              			"doubt": "doubt",
              			"exempt": "exempt",
              			"falzy": "falzy",
              		}
              	@end-include
              */

var condev = require("condev");
var doubt = require("doubt");
var exempt = require("exempt");
var falzy = require("falzy");

var posp = function posp(array, condition) {
	/*;
                                            	@meta-configuration:
                                            		{
                                            			"array:required": Array,
                                            			"condition:required": [
                                            				"string",
                                            				"function",
                                            				RegExp,
                                            				BOOLEAN,
                                            				FUNCTION,
                                            				NUMBER,
                                            				OBJECT,
                                            				STRING,
                                            				UNDEFINED,
                                            				SYMBOL,
                                            				"*"
                                            			]
                                            		}
                                            	@end-meta-configuration
                                            */

	if (falzy(array) || !doubt(array, ARRAY)) {
		throw new Error("invalid array");
	}

	try {
		exempt(array, null, function (element) {return condev(element, condition);});

		return array;

	} catch (error) {
		throw new Error("cannot pop elements, " + error.stack);
	}
};

module.exports = posp;

//# sourceMappingURL=posp.support.js.map