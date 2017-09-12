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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3Auc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJjb25kZXYiLCJyZXF1aXJlIiwiZG91YnQiLCJleGVtcHQiLCJmYWx6eSIsInBvc3AiLCJhcnJheSIsImNvbmRpdGlvbiIsIkFSUkFZIiwiRXJyb3IiLCJlbGVtZW50IiwiZXJyb3IiLCJzdGFjayIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsU0FBU0YsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRyxRQUFRSCxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNSSxPQUFPLFNBQVNBLElBQVQsQ0FBZUMsS0FBZixFQUFzQkMsU0FBdEIsRUFBaUM7QUFDN0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSxLQUFJSCxNQUFPRSxLQUFQLEtBQWtCLENBQUNKLE1BQU9JLEtBQVAsRUFBY0UsS0FBZCxDQUF2QixFQUE4QztBQUM3QyxRQUFNLElBQUlDLEtBQUosQ0FBVyxlQUFYLENBQU47QUFDQTs7QUFFRCxLQUFHO0FBQ0ZOLFNBQVFHLEtBQVIsRUFBZSxJQUFmLEVBQXFCLFVBQUVJLE9BQUYsVUFBZVYsT0FBUVUsT0FBUixFQUFpQkgsU0FBakIsQ0FBZixFQUFyQjs7QUFFQSxTQUFPRCxLQUFQOztBQUVBLEVBTEQsQ0FLQyxPQUFPSyxLQUFQLEVBQWM7QUFDZCxRQUFNLElBQUlGLEtBQUosMkJBQW9DRSxNQUFNQyxLQUExQyxDQUFOO0FBQ0E7QUFDRCxDQWxDRDs7QUFvQ0FDLE9BQU9DLE9BQVAsR0FBaUJULElBQWpCIiwiZmlsZSI6InBvc3Auc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwicG9zcFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwicG9zcC9wb3NwLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJwb3NwLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInBvc3BcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3Bvc3AuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJwb3NwLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0UG9wIHNwbGljZWQgZWxlbWVudHMgZnJvbSBhcnJheS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiY29uZGV2XCI6IFwiY29uZGV2XCIsXG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcblx0XHRcdFwiZXhlbXB0XCI6IFwiZXhlbXB0XCIsXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgY29uZGV2ID0gcmVxdWlyZSggXCJjb25kZXZcIiApO1xuY29uc3QgZG91YnQgPSByZXF1aXJlKCBcImRvdWJ0XCIgKTtcbmNvbnN0IGV4ZW1wdCA9IHJlcXVpcmUoIFwiZXhlbXB0XCIgKTtcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5cbmNvbnN0IHBvc3AgPSBmdW5jdGlvbiBwb3NwKCBhcnJheSwgY29uZGl0aW9uICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiYXJyYXk6cmVxdWlyZWRcIjogQXJyYXksXG5cdFx0XHRcdFwiY29uZGl0aW9uOnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRSZWdFeHAsXG5cdFx0XHRcdFx0Qk9PTEVBTixcblx0XHRcdFx0XHRGVU5DVElPTixcblx0XHRcdFx0XHROVU1CRVIsXG5cdFx0XHRcdFx0T0JKRUNULFxuXHRcdFx0XHRcdFNUUklORyxcblx0XHRcdFx0XHRVTkRFRklORUQsXG5cdFx0XHRcdFx0U1lNQk9MLFxuXHRcdFx0XHRcdFwiKlwiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCBmYWx6eSggYXJyYXkgKSB8fCAhZG91YnQoIGFycmF5LCBBUlJBWSApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgYXJyYXlcIiApO1xuXHR9XG5cblx0dHJ5e1xuXHRcdGV4ZW1wdCggYXJyYXksIG51bGwsICggZWxlbWVudCApID0+IGNvbmRldiggZWxlbWVudCwgY29uZGl0aW9uICkgKTtcblxuXHRcdHJldHVybiBhcnJheTtcblxuXHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IHBvcCBlbGVtZW50cywgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwb3NwO1xuIl19
//# sourceMappingURL=posp.support.js.map
