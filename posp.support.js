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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3Auc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJjb25kZXYiLCJyZXF1aXJlIiwiZG91YnQiLCJleGVtcHQiLCJmYWx6eSIsInBvc3AiLCJhcnJheSIsImNvbmRpdGlvbiIsIkFSUkFZIiwiRXJyb3IiLCJlbGVtZW50IiwiZXJyb3IiLCJzdGFjayIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsU0FBU0YsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRyxRQUFRSCxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNSSxPQUFPLFNBQVNBLElBQVQsQ0FBZUMsS0FBZixFQUFzQkMsU0FBdEIsRUFBaUM7QUFDN0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSxLQUFJSCxNQUFPRSxLQUFQLEtBQWtCLENBQUNKLE1BQU9JLEtBQVAsRUFBY0UsS0FBZCxDQUF2QixFQUE4QztBQUM3QyxRQUFNLElBQUlDLEtBQUosQ0FBVyxlQUFYLENBQU47QUFDQTs7QUFFRCxLQUFHO0FBQ0ZOLFNBQVFHLEtBQVIsRUFBZSxJQUFmLEVBQXFCLFVBQUVJLE9BQUYsVUFBZVYsT0FBUVUsT0FBUixFQUFpQkgsU0FBakIsQ0FBZixFQUFyQjs7QUFFQSxTQUFPRCxLQUFQOztBQUVBLEVBTEQsQ0FLQyxPQUFPSyxLQUFQLEVBQWM7QUFDZCxRQUFNLElBQUlGLEtBQUosMkJBQW9DRSxNQUFNQyxLQUExQyxDQUFOO0FBQ0E7QUFDRCxDQWxDRDs7QUFvQ0FDLE9BQU9DLE9BQVAsR0FBaUJULElBQWpCIiwiZmlsZSI6InBvc3Auc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJwb3NwXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcInBvc3AvcG9zcC5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJwb3NwLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwicG9zcFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9wb3NwLmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJwb3NwLXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0UG9wIHNwbGljZWQgZWxlbWVudHMgZnJvbSBhcnJheS5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImNvbmRldlwiOiBcImNvbmRldlwiLFxyXG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcclxuXHRcdFx0XCJleGVtcHRcIjogXCJleGVtcHRcIixcclxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBjb25kZXYgPSByZXF1aXJlKCBcImNvbmRldlwiICk7XHJcbmNvbnN0IGRvdWJ0ID0gcmVxdWlyZSggXCJkb3VidFwiICk7XHJcbmNvbnN0IGV4ZW1wdCA9IHJlcXVpcmUoIFwiZXhlbXB0XCIgKTtcclxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcclxuXHJcbmNvbnN0IHBvc3AgPSBmdW5jdGlvbiBwb3NwKCBhcnJheSwgY29uZGl0aW9uICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJhcnJheTpyZXF1aXJlZFwiOiBBcnJheSxcclxuXHRcdFx0XHRcImNvbmRpdGlvbjpyZXF1aXJlZFwiOiBbXHJcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxyXG5cdFx0XHRcdFx0XCJmdW5jdGlvblwiLFxyXG5cdFx0XHRcdFx0UmVnRXhwLFxyXG5cdFx0XHRcdFx0Qk9PTEVBTixcclxuXHRcdFx0XHRcdEZVTkNUSU9OLFxyXG5cdFx0XHRcdFx0TlVNQkVSLFxyXG5cdFx0XHRcdFx0T0JKRUNULFxyXG5cdFx0XHRcdFx0U1RSSU5HLFxyXG5cdFx0XHRcdFx0VU5ERUZJTkVELFxyXG5cdFx0XHRcdFx0U1lNQk9MLFxyXG5cdFx0XHRcdFx0XCIqXCJcclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0aWYoIGZhbHp5KCBhcnJheSApIHx8ICFkb3VidCggYXJyYXksIEFSUkFZICkgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGFycmF5XCIgKTtcclxuXHR9XHJcblxyXG5cdHRyeXtcclxuXHRcdGV4ZW1wdCggYXJyYXksIG51bGwsICggZWxlbWVudCApID0+IGNvbmRldiggZWxlbWVudCwgY29uZGl0aW9uICkgKTtcclxuXHJcblx0XHRyZXR1cm4gYXJyYXk7XHJcblxyXG5cdH1jYXRjaCggZXJyb3IgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggYGNhbm5vdCBwb3AgZWxlbWVudHMsICR7IGVycm9yLnN0YWNrIH1gICk7XHJcblx0fVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBwb3NwO1xyXG4iXX0=
//# sourceMappingURL=posp.support.js.map
